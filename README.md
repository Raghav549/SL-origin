# SLorigins

Community-powered discovery and sourcing for Sierra Leone.

## Product direction
SLorigins helps local people surface discoveries, gives each origin a transparent verification/export-status trail, and connects verified supply with international buyer demand without holding speculative inventory.

## Current foundation
- Vite + React + TypeScript
- Responsive white / sky-blue 2.5D visual system
- Multi-page routing
- English, Krio, Mende and Temne language foundations
- Google OAuth + passwordless email wiring for Supabase
- Community discovery and buyer-request surfaces
- Supabase schema with profiles, discoveries and buyer requests + RLS
- GitHub Actions CI build

## Local setup
1. `npm install`
2. Create a Supabase project.
3. Apply `supabase/schema.sql` in the Supabase SQL editor.
4. Create `.env` with:
   - `VITE_SUPABASE_URL=...`
   - `VITE_SUPABASE_ANON_KEY=...`
5. Enable Google provider and email OTP/magic-link in Supabase Auth.
6. `npm run dev`

## Important
The visual showcase uses external Unsplash image URLs as temporary source imagery. Replace them with owned/licensed imagery before production launch. No fake marketplace inventory is represented as real supply.
