create table if not exists public.community_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references auth.users(id) on delete cascade,
  body text not null default '',
  image_url text,
  created_at timestamptz not null default now()
);

alter table public.community_posts enable row level security;
drop policy if exists "community_posts_public_read" on public.community_posts;
create policy "community_posts_public_read" on public.community_posts for select using (true);
drop policy if exists "community_posts_owner_insert" on public.community_posts;
create policy "community_posts_owner_insert" on public.community_posts for insert with check (auth.uid() = author_id);
drop policy if exists "community_posts_owner_update" on public.community_posts;
create policy "community_posts_owner_update" on public.community_posts for update using (auth.uid() = author_id) with check (auth.uid() = author_id);
drop policy if exists "community_posts_owner_delete" on public.community_posts;
create policy "community_posts_owner_delete" on public.community_posts for delete using (auth.uid() = author_id);

insert into storage.buckets (id, name, public) values ('slorigins-media','slorigins-media',true) on conflict (id) do update set public = true;

create policy if not exists "slorigins_media_public_read" on storage.objects for select using (bucket_id = 'slorigins-media');
create policy if not exists "slorigins_media_auth_insert" on storage.objects for insert to authenticated with check (bucket_id = 'slorigins-media' and (storage.foldername(name))[1] = auth.uid()::text);
create policy if not exists "slorigins_media_owner_update" on storage.objects for update to authenticated using (bucket_id = 'slorigins-media' and owner_id::text = auth.uid()::text);
create policy if not exists "slorigins_media_owner_delete" on storage.objects for delete to authenticated using (bucket_id = 'slorigins-media' and owner_id::text = auth.uid()::text);
