/* ============================================================
   Manon's Vachtatelier — service and price data
   Single source of truth. Drives the price tables, the breed
   dropdown in the enquiry form, and the add-on checkboxes.
   Prices in EUR, taken from manonsvachtatelier.nl/tarieven.
   ============================================================ */

/* Full groom — "Volledige trimbeurt".
   Includes: wash, dry/de-shed, comb out, clip/thin/shave, nail trim.
   img: file in images/breeds/, or null where no photo exists yet. */
const BREEDS = [
  { id: 'chihuahua-kort',       nl: 'Chihuahua kort',        en: 'Chihuahua, short coat',  price: 70,  img: 'chihuahua-kort' },
  { id: 'chihuahua-lang',       nl: 'Chihuahua lang',        en: 'Chihuahua, long coat',   price: 85,  img: 'chihuahua-lang' },
  { id: 'yorkshire-terrier',    nl: 'Yorkshire Terriër',     en: 'Yorkshire Terrier',      price: 85,  img: 'yorkshire-terrier' },
  { id: 'maltezer',             nl: 'Maltezer',              en: 'Maltese',                price: 90,  img: 'maltezer' },
  { id: 'shih-tzu',             nl: 'Shih-tzu',              en: 'Shih Tzu',               price: 90,  img: 'shih-tzu' },
  { id: 'boomer',               nl: 'Boomer',                en: 'Boomer',                 price: 90,  img: 'boomer' },
  { id: 'havanezer',            nl: 'Havanezer',             en: 'Havanese',               price: 90,  img: 'havanezer' },
  { id: 'pomeranian',           nl: 'Pomeranian',            en: 'Pomeranian',             price: 90,  img: 'pomeranian' },
  { id: 'schapendoes',          nl: 'Schapendoes',           en: 'Schapendoes',            price: 100, img: 'schapendoes' },
  { id: 'pomsky',               nl: 'Pomsky',                en: 'Pomsky',                 price: 100, img: 'pomsky' },
  { id: 'bordercollie',         nl: 'Bordercollie',          en: 'Border Collie',          price: 100, img: 'bordercollie' },
  { id: 'bichon-frise',         nl: 'Bichon Frisé',          en: 'Bichon Frisé',           price: 100, img: 'bichon-frise' },
  { id: 'maltipoo',             nl: 'Maltipoo',              en: 'Maltipoo',               price: 100, img: 'maltipoo' },
  { id: 'cockapoo-cavapoo',     nl: 'Cockapoo / Cavapoo',    en: 'Cockapoo / Cavapoo',     price: 100, img: 'cockapoo-cavapoo' },
  { id: 'toypoedel',            nl: 'Toypoedel',             en: 'Toy Poodle',             price: 100, img: 'toypoedel' },
  { id: 'labradoodle-mini',     nl: 'Labradoodle mini',      en: 'Labradoodle, mini',      price: 100, img: 'labradoodle' },
  { id: 'labrador-retriever',   nl: 'Labrador Retriever',    en: 'Labrador Retriever',     price: 100, img: 'labrador-retriever' },
  { id: 'cocker-spaniel',       nl: 'Cocker Spaniël scheren',en: 'Cocker Spaniel, shaved', price: 110, img: 'cocker-spaniel' },
  { id: 'herder',               nl: 'Herder',                en: 'Shepherd',               price: 115, img: 'herder' },
  { id: 'labradoodle-medium',   nl: 'Labradoodle medium',    en: 'Labradoodle, medium',    price: 115, img: 'labradoodle' },
  { id: 'poedel-medium',        nl: 'Poedel medium',         en: 'Poodle, medium',         price: 115, img: 'poedel' },
  { id: 'golden-retriever',     nl: 'Golden Retriever',      en: 'Golden Retriever',       price: 120, img: 'golden-retriever' },
  { id: 'flatcoated-retriever', nl: 'Flatcoated Retriever',  en: 'Flat-Coated Retriever',  price: 120, img: 'flatcoated-retriever' },
  { id: 'setter',               nl: 'Setter',                en: 'Setter',                 price: 120, img: 'setter' },
  { id: 'akita',                nl: 'Akita',                 en: 'Akita',                  price: 120, img: 'akita' },
  { id: 'husky',                nl: 'Husky',                 en: 'Husky',                  price: 125, img: 'husky' },
  { id: 'labradoodle-standaard',nl: 'Labradoodle standaard', en: 'Labradoodle, standard',  price: 130, img: 'labradoodle' },
  { id: 'poedel-large',         nl: 'Poedel large',          en: 'Poodle, large',          price: 130, img: 'poedel' },
  { id: 'poedel-extra-large',   nl: 'Poedel extra large',    en: 'Poodle, extra large',    price: 145, img: 'poedel' },
  { id: 'labradoodle-groot',    nl: 'Labradoodle groot',     en: 'Labradoodle, large',     price: 150, img: 'labradoodle' },
  { id: 'bernersennen',         nl: 'Bernersennen',          en: 'Bernese Mountain Dog',   price: 150, img: 'bernersennen' },
  { id: 'samojeed',             nl: 'Samojeed',              en: 'Samoyed',                price: 150, img: 'samojeed' },
  { id: 'bouvier',              nl: 'Bouvier',               en: 'Bouvier',                price: 150, img: 'bouvier' },
  { id: 'leonberger',           nl: 'Leonberger',            en: 'Leonberger',             price: 160, img: 'leonberger' },
  { id: 'newfoundlander',       nl: 'Newfoundlander',        en: 'Newfoundland',           price: 160, img: 'newfoundlander' },
];

/* Wash & dry only — "Alleen wassen & drogen" */
const WASH = [
  { id: 'was-klein',       nl: 'Kleine honden',       en: 'Small dogs',       price: 50, img: 'klein' },
  { id: 'was-middel',      nl: 'Middelmaat honden',   en: 'Medium dogs',      price: 60, img: 'middel' },
  { id: 'was-groot',       nl: 'Grote honden',        en: 'Large dogs',       price: 70, img: 'groot' },
  { id: 'was-extra-groot', nl: 'Extra grote honden',  en: 'Extra large dogs', price: 80, img: 'extra-groot' },
];

/* Other treatments booked on their own */
const OTHER = [
  { id: 'plukvachten', nl: 'Plukvachten',    en: 'Hand stripping', price: 50, unit: { nl: 'per uur', en: 'per hour' } },
  { id: 'puppy',       nl: 'Puppy wenbeurt', en: 'Puppy intro session', price: 50,
    note: { nl: 'Tot 20 weken. Eerste badje, drogen, kammen, nageltjes knippen.',
            en: 'Up to 20 weeks. First bath, dry, comb and a nail trim.' } },
];

/* Small treatments — "Kleine losse behandelingen".
   Booked on their own, not added to another treatment. */
const SMALL = [
  { id: 'nagels', nl: 'Nagels knippen',     en: 'Nail trim',                price: 15 },
  { id: 'oogjes', nl: 'Oogjes vrijknippen', en: 'Trimming around the eyes', price: 15 },
];

/* Surcharges — "Toeslagen". Assessed by Manon, shown for transparency
   and selectable so an owner can flag them up front. */
const SURCHARGES = [
  { id: 'vervilt',      nl: 'Vervilte vacht / extreme klitten', en: 'Matted coat / severe tangles', price: 25 },
  { id: 'vlooien',      nl: 'Vlooienbehandeling',               en: 'Flea treatment',               price: 25 },
  { id: 'gedrag',       nl: 'Gedragsproblemen',                 en: 'Behavioural difficulties',     price: 25 },
];

/* Business details — used across the page and in the form payload */
const BIZ = {
  name:     "Manon's Vachtatelier",
  owner:    'Manon Dekker',
  email:    'manonsvachtatelier@icloud.com',
  phone:    '06 51755091',
  phoneIntl:'+31651755091',
  whatsapp: 'https://wa.me/31651755091',
  facebook: 'https://www.facebook.com/profile.php?id=61575480465702',
  abhb:     'https://abhb.nl/',
  street:   'Diemerplein 174',
  postcode: '1111 JD',
  city:     'Diemen',
  host:     'Dierenspeciaalzaak 101 Pootjes',
  maps:     'https://www.google.com/maps/search/?api=1&query=Diemerplein+174,+1111+JD+Diemen',
};
