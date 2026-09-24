# ASR Marketing - Changes Only

These are only the changed files, not the full project.

## Apply
1. Replace the matching files in your existing project.
2. Run `supabase/20260924_whatsapp_settings.sql` once in Supabase SQL Editor.
3. If you are using the existing `schema.sql` only for new databases, keep its updated version.
4. Start the project normally.

## Included changes
- Premium navy/cyan/amber visual refresh.
- Improved public background/grid and gradients.
- Fixed floating WhatsApp button query (removed invalid `is_active` dependency issue and added proper settings fields).
- WhatsApp button now opens WhatsApp with an automatically encoded admin-managed message.
- Admin panel now has a WhatsApp Settings tab.
- Admin can manage WhatsApp number, default message, button label, and show/hide state.
- WhatsApp settings update live through Supabase realtime.
- Mobile/desktop floating button styling and z-index improved.
