# Plan: Website-builder prompt for Eazee's portfolio site

## Context
Ezekiel James (Eazee) builds AI automations for small businesses, coaches and creators in Abuja. He wants a light, one-page portfolio site that explains what he builds in plain words and pushes two actions: **join The AI MBA** (free WhatsApp community) and **contact me** (WhatsApp chat). He doesn't want me to build the site. He wants **a detailed prompt** to paste into a site generator. He'll give his visual style before I finish it.

The only asset so far is `Gemini_Generated_Image_beva53beva53beva.jpg`: a 2048×2048 portrait in a black shirt and glasses, against a dark stage with teal neon rings. It's the hero photo.

## Deliverable
One file: `C:\Users\USER\Desktop\Eazee Portfolio\website-prompt.md`. It's a self-contained prompt with these parts:
1. **Role and goal:** build a single-page site in plain HTML, CSS and JS (one `index.html`, no frameworks, no build step), fast and mobile-first.
2. **Tone rules:** simple everyday English, no tech jargon in the main copy, short sentences. Tool names appear only once, in a small "Tools I use" line.
3. **Style block:** filled with the style Eazee provides. Until then it's a clearly marked `[YOUR STYLE HERE]` slot. If he gives no style, the fallback is to match the photo: dark background, teal neon accent.
4. **Section-by-section spec**, with the exact copy (below).
5. **Links and CTAs**, with exact URLs.
6. **Technical must-haves:** responsive layout, the photo optimized to WebP at about 800px, SEO title and meta tags, Open Graph image, smooth scroll, a floating WhatsApp button on mobile, accessible contrast and alt text. Keep it lightweight: no heavy animation libraries.

## Site structure (moderate: 7 blocks)
1. **Nav:** "Eazee" wordmark, 3 anchor links (Services · My Work · Community) and a "Contact me" button.
2. **Hero:** photo, headline "I build AI helpers that save your business time and money.", a one-line subtext ("a worker who never sleeps, never forgets, never gets tired") and two buttons: **Contact me** (primary) and **Join The AI MBA** (secondary).
3. **What I can build:** 3 main cards (WhatsApp AI Sales Person, Lead Catcher, "Ask Me" Bot), each with a "Problem → What you get" line. Below them, a compact "Other things I can build" list of 4 one-liners.
4. **Things I've built:** 5 compact items (Eazee Headwears, Telegram assistant, Shop management AI, WhatsApp prioritizer, Ask the Archive). Eazee Headwears is framed as "I run a business too."
5. **How we work:** 3 numbered steps, plus a small "Tools I use" line (n8n, AI agents, Gemini, WhatsApp, Telegram, Google Sheets, Gmail, Supabase, APIs).
6. **Join The AI MBA:** a highlighted band with the community copy (who it's for, what's inside, 4 + 4 bullets kept short) and a **Join free** button.
7. **Final CTA and footer:** "Want an AI helper for your business?" with a WhatsApp button. The footer has the email, phone, LinkedIn, the community link, Abuja, Nigeria and the year.

## Links (tracking parameters removed)
- **Contact me:** `https://wa.me/2348146618591?text=Hi%20Eazee%2C%20I%20saw%20your%20website%20and%20I%27d%20like%20an%20AI%20helper%20for%20my%20business.`
- **Join The AI MBA:** `https://chat.whatsapp.com/Hh8wTwrvUSl643ejLEzFHe`
- **LinkedIn:** `https://www.linkedin.com/in/ezekiel-james-617b75432` (in the nav or footer and the community section, as "Follow me on LinkedIn")
- **Email:** `mailto:ezekieljames494@gmail.com` (footer only)

## Copy edits I'll make in the prompt
- Light tightening only, keeping Eazee's voice. Fix "portofolio" and other typos.
- Rewrite the closing line ("If you hire me, I get to build…") so it's about the client: "As your business grows, your helpers grow with it, so you keep saving time and money."

## Steps after approval
1. Ask Eazee for his style (colors, fonts, vibe, any reference sites).
2. Write `website-prompt.md` with the style block filled in.
3. Show him the prompt and adjust it.

## Verification
- Check every URL in the prompt by hand: the wa.me link opens a chat with the pre-filled text, and the community and LinkedIn links resolve.
- Re-read the prompt for jargon and section count against the "not too heavy" requirement.
- Optional: once he generates the site, open the output `index.html` in a browser at phone and desktop width to check the CTAs.
