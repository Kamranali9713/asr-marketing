-- WhatsApp floating-button settings for the existing social_links table.
-- Run this once in Supabase SQL Editor.

alter table social_links
  add column if not exists is_active boolean not null default true;

alter table social_links
  add column if not exists whatsapp_message text;

alter table social_links
  add column if not exists button_label text default 'Let''s Talk';

update social_links
set
  is_active = coalesce(is_active, true),
  whatsapp_message = coalesce(
    whatsapp_message,
    'Hello ASR Marketing! I would like to know more about your services. Please share more details.'
  ),
  button_label = coalesce(button_label, 'Let''s Talk')
where platform = 'whatsapp';

-- Keep the existing WhatsApp row if it already exists.
-- If it does not exist, create the current default row.
insert into social_links (platform, url, order_index, is_active, whatsapp_message, button_label)
select
  'whatsapp',
  'https://wa.me/923299453496',
  3,
  true,
  'Hello ASR Marketing! I would like to know more about your services. Please share more details.',
  'Let''s Talk'
where not exists (
  select 1 from social_links where platform = 'whatsapp'
);
