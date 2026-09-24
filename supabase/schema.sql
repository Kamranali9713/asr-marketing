-- Run this once in your Supabase project's SQL Editor.
-- It creates the two tables the admin panel manages, and locks them down
-- so anyone can read the data (for the public site) but only a logged-in
-- admin (a user you create in Supabase Auth) can add/edit/delete.

create extension if not exists "pgcrypto";

-- ── Team members ────────────────────────────────────────────────
create table if not exists team_members (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  role         text not null,
  bio          text,
  photo_url    text,
  linkedin_url text,
  twitter_url  text,
  email        text,
  order_index  integer not null default 0,
  created_at   timestamptz not null default now()
);

alter table team_members enable row level security;

create policy "Public can read team members"
  on team_members for select
  using (true);

create policy "Authenticated users can manage team members"
  on team_members for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ── Social links (Facebook, Instagram, LinkedIn, WhatsApp, ...) ──
-- The WhatsApp floating button reads the row where platform = 'whatsapp'
-- (url should be a full wa.me link, e.g. https://wa.me/923299453496).
create table if not exists social_links (
  id          uuid primary key default gen_random_uuid(),
  platform    text not null,
  url         text not null,
  order_index integer not null default 0,
  created_at  timestamptz not null default now()
);

alter table social_links enable row level security;

create policy "Public can read social links"
  on social_links for select
  using (true);

create policy "Authenticated users can manage social links"
  on social_links for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Seed with the current hardcoded values so the site keeps working
-- immediately after you switch it over to Supabase-managed data.
insert into social_links (platform, url, order_index) values
  ('facebook', 'https://www.facebook.com/share/1HCHrC9adR/?mibextid=wwXIfr', 1),
  ('instagram', 'https://www.instagram.com/asr_marketing4?igsh=Z3NpMjdrM3lkb2Fu', 2),
  ('whatsapp', 'https://wa.me/923299453496', 3)
on conflict do nothing;
