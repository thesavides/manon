/* ============================================================
   Manon's Vachtatelier — site behaviour
   Depends on data.js, i18n.js and legal.js (loaded before this).
   ============================================================ */

/* Where enquiries are delivered. While this site is a concept preview it
   goes to Ukuva Consulting, not to Manon — she has not adopted the site and
   should not receive unsolicited enquiries through it. Swap this for
   BIZ.email once she agrees to take it live. */
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/chris@ukuva.com';

const LANG_KEY   = 'manon-lang';
const CONSENT_KEY = 'manon-analytics-consent';
const DEMO_KEY   = 'manon-demo-dismissed';

let lang = 'nl';

/* ── Small helpers ── */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const t  = key => (I18N[lang] && I18N[lang][key]) || (I18N.nl[key] ?? key);
// \u00a0 keeps the € from wrapping away from the number.
const euro = n => `€\u00a0${n}`;
const esc = s => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* Alphabetical in whichever language is showing — "Poedel" and "Poodle" sort
   to different places, so sort at render time rather than fixing the order
   in data.js. */
const byName = list => [...list].sort((a, b) => a[lang].localeCompare(b[lang], lang));

/* Sentinel for "my breed isn't listed" */
const BREED_OTHER = 'anders';

/* ============================================================
   Services — the six cards under "Diensten".
   Keyed to svc.N.* in i18n.js so copy stays in one place.
   ============================================================ */
const SERVICES = [
  { key: '1', img: 'images/breeds/labradoodle.jpg', from: 70, anchor: 'trim'  },
  { key: '2', img: 'images/wash/klein.jpg',         from: 50, anchor: 'wash'  },
  { key: '3', img: 'images/breeds/schapendoes.jpg', from: 50, anchor: 'other', hourly: true },
  { key: '4', img: 'images/puppy.jpg',              from: 50, anchor: 'other' },
  { key: '5', img: 'images/breeds/shih-tzu.jpg',    from: 15, anchor: 'other' },
  { key: '6', img: 'images/breeds/bouvier.jpg',     from: 25, anchor: 'sur', plus: true },
];

/* ============================================================
   Rendering
   ============================================================ */
function renderServices() {
  const grid = $('#svc-grid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map(s => `
    <article class="card card-hover svc-card">
      <div class="svc-media"><img src="${s.img}" alt="" loading="lazy" width="400" height="300"></div>
      <div class="svc-body">
        <h3 class="card-title" data-i18n="svc.${s.key}.t">${esc(t(`svc.${s.key}.t`))}</h3>
        <p class="card-body" data-i18n="svc.${s.key}.b">${esc(t(`svc.${s.key}.b`))}</p>
        <p class="svc-price">
          <span class="text-caption text-soft">${s.plus ? '+' : t('svc.from')}</span>
          <span class="price">${euro(s.from)}</span>
          ${s.hourly ? `<span class="price-unit">${lang === 'nl' ? 'per uur' : 'per hour'}</span>` : ''}
        </p>
        <a class="svc-link" href="#tarieven" data-goto-tab="${s.anchor}">${esc(t('price.eyebrow'))} &rarr;</a>
      </div>
    </article>
  `).join('');
}

function breedCard(item, folder) {
  const name = esc(item[lang]);
  const media = item.img
    ? `<img src="images/${folder}/${item.img}.jpg" alt="${name}" loading="lazy" width="300" height="300">`
    : `<span class="breed-placeholder" aria-hidden="true">&#128062;</span>
       <span class="visually-hidden">${esc(t('price.noPhoto'))}</span>`;
  // Index both languages so "poedel" finds the Poodle on the English site
  // and "poodle" finds the Poedel on the Dutch one.
  const search = esc(`${item.nl} ${item.en}`.toLowerCase());
  return `
    <article class="breed-card card card-hover" data-name="${search}">
      <div class="breed-media${item.img ? '' : ' is-empty'}">${media}</div>
      <h3 class="breed-name">${name}</h3>
      <p class="price">${euro(item.price)}</p>
      <button class="breed-btn" type="button" data-pick="${esc(item.id)}">${esc(t('price.request'))}</button>
    </article>`;
}

function renderBreeds() {
  const grid = $('#breed-grid');
  if (grid) grid.innerHTML = byName(BREEDS).map(b => breedCard(b, 'breeds')).join('');

  // Wash sizes are small to extra large — that order is more useful than
  // alphabetical, so leave them as authored.
  const wash = $('#wash-grid');
  if (wash) wash.innerHTML = WASH.map(w => breedCard(w, 'wash')).join('');
}

function renderOther() {
  const list = $('#other-list');
  if (list) {
    list.innerHTML = [...OTHER, ...SMALL].map(o => `
      <div class="rate-row">
        <div>
          <div class="rate-name">${esc(o[lang])}</div>
          ${o.note ? `<div class="rate-note">${esc(o.note[lang])}</div>` : ''}
        </div>
        <div class="text-right">
          <span class="price">${euro(o.price)}</span>
          ${o.unit ? `<div class="price-unit">${esc(o.unit[lang])}</div>` : ''}
        </div>
      </div>`).join('');
  }

  const sur = $('#sur-list');
  if (sur) {
    sur.innerHTML = SURCHARGES.map(s => `
      <div class="rate-row">
        <div class="rate-name">${esc(s[lang])}</div>
        <span class="price">+ ${euro(s.price)}</span>
      </div>`).join('');
  }
}

/* ============================================================
   Form: selects and checkboxes built from the same data
   ============================================================ */
function serviceOptions() {
  return [
    { v: 'trim',        nl: 'Volledige trimbeurt',     en: 'Full groom' },
    { v: 'wash',        nl: 'Alleen wassen & drogen',  en: 'Wash & dry only' },
    { v: 'plukvachten', nl: 'Plukvachten',             en: 'Hand stripping' },
    { v: 'puppy',       nl: 'Puppy wenbeurt',          en: 'Puppy intro session' },
    { v: 'klein',       nl: 'Kleine losse behandeling', en: 'Small standalone treatment' },
    { v: 'advies',      nl: 'Ik weet het nog niet — graag advies', en: "I'm not sure yet — I'd like advice" },
  ];
}

/* Rebuild a <select>, keeping the current value where it still exists. */
function fillSelect(sel, placeholderKey, items) {
  if (!sel) return;
  const prev = sel.value;
  sel.innerHTML =
    `<option value="" data-i18n="${placeholderKey}">${esc(t(placeholderKey))}</option>` +
    items.map(i => `<option value="${esc(i.v)}">${esc(i.label)}</option>`).join('');
  if (prev && sel.querySelector(`option[value="${CSS.escape(prev)}"]`)) sel.value = prev;
}

function renderFormControls() {
  fillSelect($('#f-service'), 'book.servicePh',
    serviceOptions().map(o => ({ v: o.v, label: o[lang] })));
  fillSelect($('#f-breed'), 'book.breedPh', [
    ...byName(BREEDS).map(b => ({ v: b.id, label: `${b[lang]} — ${euro(b.price)}` })),
    { v: BREED_OTHER, label: t('book.breedOther') },   // always last
  ]);
  fillSelect($('#f-size'), 'book.sizePh',
    WASH.map(w => ({ v: w.id, label: `${w[lang]} — ${euro(w.price)}` })));
  fillSelect($('#f-small'), 'book.smallPh',
    SMALL.map(s => ({ v: s.id, label: `${s[lang]} — ${euro(s.price)}` })));

  // Contact-preference options are static markup; relabel them in place.
  const pref = $('#f-pref');
  if (pref) $$('option', pref).forEach(o => {
    const k = o.getAttribute('data-i18n');
    if (k) o.textContent = t(k);
  });

  // Re-rendering replaces these inputs, so carry the ticks across a language
  // switch rather than silently clearing what the visitor already chose.
  const checked = new Set($$('#sur-check-list input:checked').map(el => el.id));
  const tick = id => (checked.has(id) ? ' checked' : '');

  const surs = $('#sur-check-list');
  if (surs) surs.innerHTML = SURCHARGES.map(s => `
    <div class="checkbox-row">
      <input type="checkbox" id="sur-${s.id}" data-sur="${s.id}" data-price="${s.price}"${tick(`sur-${s.id}`)}>
      <label for="sur-${s.id}">${esc(s[lang])} <span class="text-soft">&mdash; + ${euro(s.price)}</span></label>
    </div>`).join('');
}

/* ── Show the follow-up field that matches the chosen service ── */
function syncServiceFields() {
  const service = $('#f-service')?.value || '';

  const want = {
    breed: service === 'trim',
    size:  service === 'wash',
    small: service === 'klein',
  };

  for (const [name, on] of Object.entries(want)) {
    const field = $(`#field-${name}`);
    const sel   = $(`#f-${name}`);
    if (field) field.hidden = !on;
    // Only require — and only submit — the field that is actually visible.
    if (sel) { sel.required = on; if (!on) sel.value = ''; }
  }

  syncBreedOtherHint();
  updateEstimate();
}

/* "Other" has no price, so explain what happens next instead. */
function syncBreedOtherHint() {
  const hint = $('#breed-other-hint');
  if (hint) hint.hidden = $('#f-breed')?.value !== BREED_OTHER;
}

/* ── Live price indication ── */
function updateEstimate() {
  const box = $('#estimate');
  const out = $('#estimate-value');
  if (!box || !out) return;

  const service = $('#f-service')?.value || '';
  let base = 0;
  let approx = false;

  if (service === 'trim') {
    // "Other" is deliberately priceless — Manon quotes it herself.
    const b = BREEDS.find(x => x.id === $('#f-breed')?.value);
    if (b) base = b.price;
  } else if (service === 'wash') {
    const w = WASH.find(x => x.id === $('#f-size')?.value);
    if (w) base = w.price;
  } else if (service === 'klein') {
    const s = SMALL.find(x => x.id === $('#f-small')?.value);
    if (s) base = s.price;
  } else if (service === 'plukvachten') {
    base = 50; approx = true;             // hourly rate, so a floor not a total
  } else if (service === 'puppy') {
    base = 50;
  }

  const extras = $$('#sur-check-list input:checked')
    .reduce((sum, el) => sum + Number(el.dataset.price || 0), 0);

  const total = base + extras;
  if (total <= 0) { box.hidden = true; return; }

  box.hidden = false;
  out.textContent = `${approx ? (lang === 'nl' ? 'vanaf ' : 'from ') : ''}${euro(total)}`;
}

/* ============================================================
   Language
   ============================================================ */
function setLang(next) {
  lang = (next === 'en') ? 'en' : 'nl';
  document.documentElement.lang = lang;
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}

  // Short strings
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
  // Strings carrying entities (curly quotes, dashes) that must render as markup
  $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
  $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
  $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
  $$('[data-i18n-alt]').forEach(el => { el.alt = t(el.getAttribute('data-i18n-alt')); });
  $$('[data-i18n-title]').forEach(el => { el.title = t(el.getAttribute('data-i18n-title')); });

  // Long-form blocks: show the matching language, hide the other
  $$('[data-lang]').forEach(el => { el.hidden = el.getAttribute('data-lang') !== lang; });

  // Toggle state
  $$('.lang-btn').forEach(b => {
    const on = b.dataset.langSet === lang;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-pressed', String(on));
  });

  // Data-driven content carries breed names and labels, so re-render it
  renderServices();
  renderBreeds();
  renderOther();
  renderFormControls();
  syncServiceFields();
  filterBreeds();
}

/* ============================================================
   Price tabs
   ============================================================ */
function showTab(name) {
  $$('.price-tab').forEach(b => {
    const on = b.dataset.tab === name;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-selected', String(on));
  });
  $$('.price-panel').forEach(p => {
    const on = p.dataset.panel === name;
    p.classList.toggle('is-active', on);
    p.hidden = !on;
  });
}

/* ============================================================
   Breed search
   ============================================================ */
function filterBreeds() {
  const input = $('#breed-search');
  const empty = $('#no-result');
  if (!input) return;
  const q = input.value.trim().toLowerCase();
  let hits = 0;

  $$('#breed-grid .breed-card').forEach(card => {
    const match = !q || card.dataset.name.includes(q);
    card.hidden = !match;
    if (match) hits++;
  });
  if (empty) empty.hidden = hits > 0;
}

/* ============================================================
   Wire everything up
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderLegal();

  // A saved choice wins; otherwise fall back to the browser's language,
  // defaulting to Dutch since that is what most of her customers read.
  let saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
  const browserPrefersEn = (navigator.language || '').toLowerCase().startsWith('en');
  setLang(saved || (browserPrefersEn ? 'en' : 'nl'));

  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();

  /* ── Language buttons ── */
  $$('.lang-btn').forEach(b => b.addEventListener('click', () => setLang(b.dataset.langSet)));

  /* ── Nav ── */
  const burger = $('#hamburger');
  const links  = $('#nav-links');
  burger?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    burger?.setAttribute('aria-expanded', 'false');
  }));

  // Shrink the header once the page scrolls
  const header = $('#site-header');
  const onScroll = () => header?.classList.toggle('is-stuck', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Price tabs ── */
  $$('.price-tab').forEach(b => b.addEventListener('click', () => showTab(b.dataset.tab)));

  // "Tarieven →" links on the service cards open the matching tab
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-goto-tab]');
    if (link) showTab(link.dataset.gotoTab);
  });

  /* ── Breed search ── */
  $('#breed-search')?.addEventListener('input', filterBreeds);

  /* ── "Aanvragen" on a breed card pre-fills the form ── */
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-pick]');
    if (!btn) return;
    const id = btn.dataset.pick;
    const service = $('#f-service');
    if (!service) return;

    if (BREEDS.some(b => b.id === id)) {
      service.value = 'trim';
      syncServiceFields();
      const sel = $('#f-breed');
      if (sel) sel.value = id;
    } else if (WASH.some(w => w.id === id)) {
      service.value = 'wash';
      syncServiceFields();
      const sel = $('#f-size');
      if (sel) sel.value = id;
    }
    updateEstimate();
    $('#boeken')?.scrollIntoView({ behavior: 'smooth' });
  });

  /* ── Form reactivity ── */
  $('#f-service')?.addEventListener('change', syncServiceFields);
  $('#f-breed')?.addEventListener('change', () => { syncBreedOtherHint(); updateEstimate(); });
  $('#f-size')?.addEventListener('change', updateEstimate);
  $('#f-small')?.addEventListener('change', updateEstimate);
  document.addEventListener('change', e => {
    if (e.target.matches('#sur-check-list input')) updateEstimate();
  });

  /* ── T&Cs accordion ── */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.tcs-btn');
    if (!btn) return;
    const item = btn.closest('.tcs-item');
    const body = $('.tcs-body', item);
    const wasOpen = item.classList.contains('open');

    $$('.tcs-item').forEach(i => {
      i.classList.remove('open');
      $('.tcs-body', i).style.maxHeight = null;
      $('.tcs-btn', i).setAttribute('aria-expanded', 'false');
    });

    if (!wasOpen) {
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  /* ── Concept ribbon ── */
  const ribbon = $('#demo-ribbon');
  let dismissed = null;
  try { dismissed = localStorage.getItem(DEMO_KEY); } catch (e) {}
  if (dismissed === '1') ribbon?.remove();
  $('#demo-close')?.addEventListener('click', () => {
    try { localStorage.setItem(DEMO_KEY, '1'); } catch (e) {}
    ribbon?.remove();
  });

  /* ── Booking form ── */
  const form = $('#booking-form');
  const ok   = $('#msg-success');
  const bad  = $('#msg-error');

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const f = form.elements;

    // FormSubmit's AJAX endpoint ignores its own _honey field, so the
    // honeypot is enforced here. Fake success: a bot shouldn't retry.
    if (f._honey.value) { ok.hidden = false; form.reset(); return; }

    const btn = $('.form-submit', form);
    const label = t('book.submit');
    btn.textContent = t('book.sending');
    btn.disabled = true;
    ok.hidden = true;
    bad.hidden = true;

    const labelFor = (list, id) => (list.find(x => x.id === id) || {})[lang] || '';
    const picked = sel => $$(sel).filter(el => el.checked)
      .map(el => el.nextElementSibling?.textContent.trim())
      .join(', ') || (lang === 'nl' ? 'Geen' : 'None');

    const serviceLabel = (serviceOptions().find(o => o.v === f.service.value) || {})[lang] || f.service.value;

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Nieuwe afspraakaanvraag — ${f.name.value} (${f.dog.value})`,
          _template: 'table',
          Naam: f.name.value,
          'E-mail': f.email.value,
          Telefoon: f.phone.value,
          'Voorkeur contact': $('option:checked', f.pref)?.textContent.trim() || f.pref.value,
          Hond: f.dog.value,
          Leeftijd: f.age.value || '—',
          Behandeling: serviceLabel,
          Ras: f.breed.value === BREED_OTHER
            ? (lang === 'nl' ? 'Anders — zie bericht' : 'Other — see message')
            : labelFor(BREEDS, f.breed.value) || '—',
          Grootte: labelFor(WASH, f.size.value) || '—',
          'Kleine behandeling': labelFor(SMALL, f.small.value) || '—',
          Toeslagen: picked('#sur-check-list input'),
          Indicatie: $('#estimate').hidden ? '—' : $('#estimate-value').textContent,
          Voorkeurmoment: f.when.value || '—',
          Bericht: f.message.value || '—',
          'Akkoord voorwaarden': f.terms.checked ? 'Ja' : 'Nee',
          Taal: lang.toUpperCase(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && String(data.success) === 'true') {
        ok.hidden = false;
        form.reset();
        syncServiceFields();
        ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        throw new Error(data.message || 'send failed');
      }
    } catch (err) {
      console.error('Booking form:', err);
      bad.hidden = false;
    } finally {
      btn.textContent = label;
      btn.disabled = false;
    }
  });

  /* ── Cookie consent (Google Consent Mode v2) ──
     The GA tag in <head> defaults analytics_storage to denied. Accept flips
     it to granted; the choice persists. Safe while no GA tag is present. */
  const banner = $('#cookie-banner');
  const grant = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  };
  const showBanner = () => banner?.classList.add('is-visible');
  const hideBanner = () => banner?.classList.remove('is-visible');

  let choice = null;
  try { choice = localStorage.getItem(CONSENT_KEY); } catch (e) {}
  if (choice === 'granted') grant();
  else if (choice !== 'denied') showBanner();

  $('#cookie-accept')?.addEventListener('click', () => {
    try { localStorage.setItem(CONSENT_KEY, 'granted'); } catch (e) {}
    grant(); hideBanner();
  });
  $('#cookie-decline')?.addEventListener('click', () => {
    try { localStorage.setItem(CONSENT_KEY, 'denied'); } catch (e) {}
    hideBanner();
  });
  $('#cookie-settings')?.addEventListener('click', showBanner);
});
