create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  role text not null default 'member' check (role in ('member','buyer','contributor','admin')),
  language text not null default 'en',
  country text default 'Sierra Leone',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.discoveries (
  id uuid primary key default gen_random_uuid(),
  created_by uuid references auth.users(id) on delete set null,
  name text not null,
  category text not null,
  region text,
  local_name text,
  description text not null,
  image_urls text[] not null default '{}',
  availability text,
  verification_status text not null default 'pending' check (verification_status in ('pending','community_review','verified','rejected')),
  export_status text not null default 'pending' check (export_status in ('pending','verified','permit_required','restricted','not_eligible')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.buyer_requests (
  id uuid primary key default gen_random_uuid(),
  buyer_id uuid references auth.users(id) on delete cascade,
  product_query text not null,
  description text,
  target_quantity text,
  destination_country text,
  status text not null default 'open' check (status in ('open','matched','closed')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.discoveries enable row level security;
alter table public.buyer_requests enable row level security;

create policy "profiles self read" on public.profiles for select using (auth.uid() = id);
create policy "profiles self insert" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles self update" on public.profiles for update using (auth.uid() = id);
create policy "discoveries public read" on public.discoveries for select using (true);
create policy "discoveries authenticated create" on public.discoveries for insert with check (auth.uid() = created_by);
create policy "discoveries creator update" on public.discoveries for update using (auth.uid() = created_by);
create policy "buyer requests own read" on public.buyer_requests for select using (auth.uid() = buyer_id);
create policy "buyer requests own create" on public.buyer_requests for insert with check (auth.uid() = buyer_id);
create policy "buyer requests own update" on public.buyer_requests for update using (auth.uid() = buyer_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
