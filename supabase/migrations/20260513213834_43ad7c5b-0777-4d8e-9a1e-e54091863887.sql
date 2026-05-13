-- Extensions for cron + http
create extension if not exists pg_cron;
create extension if not exists pg_net;

-- blog_posts
create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  lang text not null check (lang in ('pt','en')),
  title text not null,
  excerpt text not null,
  body_md text not null,
  cover_image_url text,
  tags text[] not null default '{}',
  keywords text[] not null default '{}',
  sources jsonb not null default '[]'::jsonb,
  sources_hash text,
  seo_title text,
  seo_description text,
  reading_minutes integer not null default 5,
  status text not null default 'published' check (status in ('draft','published')),
  view_count integer not null default 0,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (slug, lang)
);

create index blog_posts_lang_published_idx on public.blog_posts(lang, published_at desc) where status = 'published';
create index blog_posts_sources_hash_idx on public.blog_posts(sources_hash);
create index blog_posts_tags_idx on public.blog_posts using gin(tags);

alter table public.blog_posts enable row level security;

create policy "Public can read published posts"
on public.blog_posts for select
to anon, authenticated
using (status = 'published');

create policy "Service role full access blog_posts"
on public.blog_posts for all
to public
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');

-- updated_at trigger
create trigger blog_posts_set_updated_at
before update on public.blog_posts
for each row execute function public.update_contratos_updated_at();

-- generation runs audit
create table public.blog_generation_runs (
  id uuid primary key default gen_random_uuid(),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  sources_count integer not null default 0,
  posts_created integer not null default 0,
  error text,
  raw_log jsonb
);

alter table public.blog_generation_runs enable row level security;

create policy "Service role full access blog_runs"
on public.blog_generation_runs for all
to public
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');

-- view increment helper (safe, non-blocking)
create or replace function public.increment_blog_view(_slug text, _lang text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.blog_posts
    set view_count = view_count + 1
    where slug = _slug and lang = _lang and status = 'published';
end;
$$;

-- Schedule daily generation at 09:00 UTC
select cron.schedule(
  'generate-blog-post-daily',
  '0 9 * * *',
  $$
  select net.http_post(
    url := 'https://lpuybtjctiffqlabjszc.supabase.co/functions/v1/generate-blog-post',
    headers := '{"Content-Type":"application/json","apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwdXlidGpjdGlmZnFsYWJqc3pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxOTg1MzcsImV4cCI6MjA3NDc3NDUzN30.OYjzDASp9Zzk9RPi9O-2cLeHI2-TeQ-ZFJ5ra0HaMbo"}'::jsonb,
    body := jsonb_build_object('source','cron','time', now())
  );
  $$
);