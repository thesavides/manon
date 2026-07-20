# Manon's Vachtatelier — manon.ukuva.com

A concept website for Manon's Vachtatelier, a dog grooming salon at
Diemerplein 174, Diemen. Built as a design proposal by Ukuva Consulting.

## Status: concept, not live

Manon declined the original offer on 20 July 2026 — she had already built a
site the week before. This build exists to show what is possible, not to
replace her site. Three things follow from that, and they matter:

1. **The enquiry form goes to `chris@ukuva.com`, not to Manon.** She has not
   agreed to take this site on and should not receive enquiries through it.
   The endpoint is `FORM_ENDPOINT` at the top of `js/main.js` — change it to
   `manonsvachtatelier@icloud.com` only once she says yes.
2. **The site is not indexable.** `robots.txt` disallows everything and
   `index.html` carries `<meta name="robots" content="noindex, nofollow">`.
   This keeps it from competing with manonsvachtatelier.nl in search.
3. **A concept ribbon sits at the top of the page**, and the privacy section
   says plainly that enquiries currently reach Ukuva Consulting. Both are
   marked in the source with comments; remove them together if it goes live.

Her real contact details (phone, email, WhatsApp, Facebook) are on the page
because a pitch has to look real. They are all already public on her own site.

## Stack

- Plain HTML, CSS and JavaScript. No build step, no dependencies.
- FormSubmit for the enquiry form (same approach as the Siya site).
- Cloudflare Pages for hosting, GitHub for version control.

## Folder structure

```
manon/
├── index.html              # The whole site, one page
├── 404.html
├── robots.txt
├── css/
│   ├── design-system.css   # Tokens, typography, base components
│   └── site.css            # Layout and page-specific components
├── js/
│   ├── data.js             # Services and prices — single source of truth
│   ├── i18n.js             # NL/EN dictionary for short strings
│   ├── legal.js            # Terms, privacy and cookie policy (draft)
│   └── main.js             # Rendering, language, form, consent
├── images/
│   ├── breeds/             # 29 breed photos, slug-named
│   ├── wash/               # 4 wash-size photos
│   └── …                   # logo, banner, hero dog, portrait, certificate
└── _originals/             # Source artwork before compression (gitignored)
```

## How it fits together

**Prices live in one place.** `js/data.js` holds `BREEDS`, `WASH`, `OTHER`,
`ADDONS` and `SURCHARGES`. Those arrays render the price tables *and*
populate the form's dropdowns *and* drive the live estimate. Change a price
there and it changes everywhere. Prices are taken from
manonsvachtatelier.nl/tarieven as published on 20 July 2026.

**Bilingual, Dutch first.** Short strings carry `data-i18n="key"` and resolve
against `js/i18n.js`. Long prose (Manon's bio, the terms) sits in the HTML
inside `[data-lang="nl"]` / `[data-lang="en"]` blocks, both present, one
hidden. `setLang()` handles both and re-renders the data-driven parts, since
breed labels differ by language.

**Dutch is the default unconditionally.** The site opens in Dutch even for a
visitor whose browser is set to English — this is a Dutch salon with Dutch
customers. Only an explicit click on the NL/EN toggle changes it, and that
choice persists in `localStorage`. Browser-language sniffing was tried and
removed: it meant a Dutch business greeting most of its own customers'
English-configured browsers in English.

Breed search matches both languages, so "poedel" and "poodle" both find the
Poodles regardless of which language is showing.

**The form is an enquiry, not a booking.** This is the point Manon made in her
reply: every dog needs a different treatment and a different amount of time,
so she schedules each appointment herself. The form says so, the terms say so,
and the confirmation says she will be in touch. The estimate is explicitly a
guide price.

## Known gaps

- **Labradoodle and Poodle sizes share one photo each**, since only one image
  of each was supplied. To fix, drop the file in `images/breeds/` and point
  the entry's `img` at it in `js/data.js`. Every breed now has a photo; the
  paw placeholder still renders for any entry whose `img` is `null`.
- **Opening hours are vague** ("by appointment") because none are published.
- **No Google Analytics property yet.** The Consent Mode v2 snippet is in
  `index.html`, commented out, with a placeholder ID. The cookie banner works
  either way — `main.js` checks for `gtag` before calling it.
- **The terms are a draft.** They are built from her published cancellation
  policy (48h free, 24h 50%, no-show 100%) plus standard grooming terms. A
  visible notice says so. She has to read and adopt them before they mean
  anything.

## Privacy choices worth keeping

- The map is an **OpenStreetMap embed**, which sets no cookies, so it can
  display immediately. Google's embed sets cookies the moment it loads, which
  would force a choice between a click-to-load gate in front of the map or
  setting third-party cookies without asking. OSM avoids both. "Get
  directions" still opens Google Maps, in a new tab, on the visitor's say-so.
  Coordinates are 52.3418299, 4.9623145 (geocoded via Nominatim); the marker
  and bbox are hard-coded in the iframe URL in `index.html`.
- Analytics default to denied under Consent Mode v2 and only flip on Accept.
- Language and consent choices are stored in `localStorage`, nothing else.

## FormSubmit

The form posts to `https://formsubmit.co/ajax/chris@ukuva.com`. No account, no
API key, no server. FormSubmit needs one-time activation per address: the
first submission triggers a confirmation email with a link to click. That
address was already activated for the Siya site, so it should just work.

FormSubmit's AJAX endpoint ignores its own `_honey` and `_captcha` fields, so
the honeypot is enforced in `js/main.js` before the request goes out.

## Deploy

Both are done. Redeploy with:

```bash
./deploy.sh
```

`deploy.sh` stages the site into `dist/` first and deploys that. Do **not**
run `wrangler pages deploy .` from the repo root — Pages has no reliable
ignore file, so that publishes `_originals/` (14MB of source artwork) and
`README.md` to the live site.

| What | URL |
|---|---|
| Site (Pages default) | https://manon-60m.pages.dev |
| GitHub | https://github.com/thesavides/manon |
| Cloudflare project | `manon`, account `chris@ukuva.com` |

`manon.pages.dev` was taken, hence the `-60m` suffix.

### Still to do: the custom domain

`manon.ukuva.com` is **not** attached yet. Wrangler 4.x has no
`pages domain` subcommand, so it has to be done in the dashboard:

> Cloudflare dashboard → Workers & Pages → **manon** → Custom domains →
> Set up a custom domain → `manon.ukuva.com`

Cloudflare creates the CNAME automatically since ukuva.com is on Cloudflare.

## Local preview

```bash
python3 -m http.server 8788
```
