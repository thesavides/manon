/* ============================================================
   Manon's Vachtatelier — terms, privacy and cookie policy
   DRAFT. Written from the booking policy published on
   manonsvachtatelier.nl and setmore. Manon must read, amend and
   adopt these before they carry any legal weight.
   Rendered into #tcs as an accordion by renderLegal().
   ============================================================ */

const LEGAL = [
  {
    id: 'toepasselijkheid',
    nl: { t: 'Toepasselijkheid', b: `
      <p>Deze algemene voorwaarden zijn van toepassing op iedere aanvraag, afspraak en behandeling bij Manon&rsquo;s Vachtatelier, gevestigd aan het Diemerplein 174, 1111 JD Diemen, werkzaam in Dierenspeciaalzaak 101 Pootjes.</p>
      <p>Door een afspraak aan te vragen of je hond ter behandeling aan te bieden, ga je akkoord met deze voorwaarden. Afwijkingen gelden alleen wanneer die vooraf schriftelijk zijn afgesproken.</p>
      <p>In deze voorwaarden wordt met &ldquo;de eigenaar&rdquo; de persoon bedoeld die de hond aanbiedt, en met &ldquo;de trimster&rdquo; Manon Dekker.</p>` },
    en: { t: 'Scope', b: `
      <p>These terms apply to every enquiry, appointment and treatment at Manon&rsquo;s Vachtatelier, based at Diemerplein 174, 1111 JD Diemen, operating inside pet shop Dierenspeciaalzaak 101 Pootjes.</p>
      <p>By requesting an appointment or presenting your dog for treatment, you accept these terms. Any departure from them applies only where agreed in writing beforehand.</p>
      <p>In these terms, &ldquo;the owner&rdquo; means the person presenting the dog, and &ldquo;the groomer&rdquo; means Manon Dekker.</p>` },
  },
  {
    id: 'zelfstandig',
    nl: { t: 'Zelfstandig van 101 Pootjes', b: `
      <p>Let op: de trimsalon Manon&rsquo;s Vachtatelier is een zelfstandig bedrijf en staat los van 101 Pootjes. Alle reserveringen, afspraken en betalingen verlopen rechtstreeks met de salon. 101 Pootjes is niet betrokken bij de dienstverlening van de salon en draagt hiervoor geen verantwoordelijkheid of aansprakelijkheid.</p>
      <p>De salon is enkel binnen Dierenspeciaalzaak 101 Pootjes gevestigd; daarmee eindigt de betrokkenheid van 101 Pootjes. Vragen, klachten of aansprakelijkstellingen over een behandeling richt je uitsluitend aan Manon&rsquo;s Vachtatelier via de contactgegevens onderaan deze pagina.</p>` },
    en: { t: 'Independent of 101 Pootjes', b: `
      <p>Please note: the grooming salon Manon&rsquo;s Vachtatelier is an independent business and is separate from 101 Pootjes. All reservations, appointments and payments are handled directly with the salon. 101 Pootjes is not involved in the salon&rsquo;s services and carries no responsibility or liability for them.</p>
      <p>The salon is only located inside pet shop Dierenspeciaalzaak 101 Pootjes; 101 Pootjes&rsquo; involvement ends there. Any questions, complaints or liability claims about a treatment should be directed solely to Manon&rsquo;s Vachtatelier, using the contact details at the foot of this page.</p>` },
  },
  {
    id: 'afspraken',
    nl: { t: 'Aanvragen en afspraken', b: `
      <p>Iedere hond heeft een andere behandeling nodig en dus ook meer of minder tijd. Om die reden worden afspraken niet online geboekt, maar persoonlijk ingepland.</p>
      <p>Het formulier op deze website is een <strong>aanvraag</strong>. Er komt pas een afspraak tot stand wanneer de trimster die uitdrukkelijk heeft bevestigd, per WhatsApp, telefoon of e-mail. Een verzonden aanvraag geeft geen recht op een tijdslot.</p>
      <p>De opgegeven prijzen en indicaties op deze website zijn richtprijzen. De uiteindelijke prijs hangt af van de grootte van de hond, de conditie van de vacht en het karakter van de hond, en wordt vooraf met de eigenaar besproken.</p>
      <p>Kom op tijd. Bij meer dan 15 minuten vertraging kan de behandeling worden ingekort of verplaatst, omdat de tijd na jouw afspraak voor een andere hond gereserveerd is.</p>` },
    en: { t: 'Enquiries and appointments', b: `
      <p>Every dog needs a different treatment and therefore a different amount of time. For that reason appointments are not booked online but scheduled personally.</p>
      <p>The form on this website is an <strong>enquiry</strong>. An appointment exists only once the groomer has expressly confirmed it, by WhatsApp, phone or email. Submitting an enquiry does not reserve a slot.</p>
      <p>Prices and estimates shown on this website are guide prices. The final price depends on the dog&rsquo;s size, the condition of the coat and the dog&rsquo;s temperament, and is discussed with the owner beforehand.</p>
      <p>Please arrive on time. If you are more than 15 minutes late the treatment may be shortened or moved, as the time after your appointment is reserved for another dog.</p>` },
  },
  {
    id: 'annulering',
    nl: { t: 'Annulering en niet verschijnen', b: `
      <p>Een afspraak kan kosteloos worden geannuleerd tot <strong>48 uur</strong> voor het afgesproken tijdstip.</p>
      <ul>
        <li>Annuleren tot 48 uur voor de afspraak: kosteloos.</li>
        <li>Annuleren binnen 24 uur voor de afspraak: 50% van de behandelprijs.</li>
        <li>Niet verschijnen zonder bericht (no-show): 100% van de behandelprijs.</li>
      </ul>
      <p>Annuleren kan per WhatsApp, telefoon of e-mail. Bij ziekte van de hond of andere onvoorziene omstandigheden wordt in redelijkheid naar een oplossing gezocht; neem in dat geval zo snel mogelijk contact op.</p>
      <p>Wanneer de trimster een afspraak moet annuleren, wordt zo snel mogelijk een nieuwe afspraak aangeboden en zijn er geen kosten voor de eigenaar.</p>` },
    en: { t: 'Cancellation and no-show', b: `
      <p>An appointment can be cancelled free of charge up to <strong>48 hours</strong> before the agreed time.</p>
      <ul>
        <li>Cancelling more than 48 hours ahead: free of charge.</li>
        <li>Cancelling within 24 hours of the appointment: 50% of the treatment price.</li>
        <li>Not turning up without notice (no-show): 100% of the treatment price.</li>
      </ul>
      <p>Cancel by WhatsApp, phone or email. If your dog is ill, or something else unforeseen happens, a reasonable solution will be found &mdash; please get in touch as soon as you can.</p>
      <p>If the groomer has to cancel an appointment, a new one is offered as soon as possible and there is no charge to the owner.</p>` },
  },
  {
    id: 'gezondheid',
    nl: { t: 'Gezondheid, vaccinaties en parasieten', b: `
      <p>De eigenaar zorgt ervoor dat de hond gezond is en beschikt over de gangbare entingen. De eigenaar meldt vooraf alle gezondheidsklachten, medicatie, allergieën, huidaandoeningen, oudere leeftijd, doofheid, blindheid, dracht of eerdere ingrepen die van invloed kunnen zijn op de behandeling.</p>
      <p>Honden met een besmettelijke aandoening worden niet behandeld. Wordt tijdens de behandeling een aandoening geconstateerd, dan kan de trimster de behandeling staken; de tot dan toe bestede tijd wordt in rekening gebracht.</p>
      <p>Bij het aantreffen van vlooien, teken of andere parasieten wordt de behandeling voortgezet met een antiparasitair middel en geldt de toeslag voor vlooienbehandeling. Deze toeslag dekt ook de noodzakelijke reiniging en desinfectie van de salon.</p>
      <p>De trimster is geen dierenarts en stelt geen diagnoses. Constateert zij iets dat aandacht behoeft, dan wordt dat gemeld met het advies een dierenarts te raadplegen.</p>` },
    en: { t: 'Health, vaccination and parasites', b: `
      <p>The owner ensures the dog is healthy and has the usual vaccinations. The owner discloses in advance any health complaints, medication, allergies, skin conditions, advanced age, deafness, blindness, pregnancy or previous procedures that could affect the treatment.</p>
      <p>Dogs with a contagious condition will not be treated. If a condition is discovered during treatment, the groomer may stop; the time spent up to that point is charged.</p>
      <p>If fleas, ticks or other parasites are found, treatment continues with an antiparasitic product and the flea treatment surcharge applies. That surcharge also covers the necessary cleaning and disinfection of the salon.</p>
      <p>The groomer is not a vet and does not diagnose. If she notices something that needs attention she will say so, with a recommendation to consult a vet.</p>` },
  },
  {
    id: 'vacht',
    nl: { t: 'Vachtconditie en klitten', b: `
      <p>Een goed onderhouden vacht laat de meeste vrijheid in het model. Bij een sterk geklitte of vervilte vacht staat het welzijn van de hond voorop, niet het uiterlijk.</p>
      <p>Het uitkammen van een vervilte vacht is pijnlijk en belastend voor de hond. In dat geval wordt de vacht kort afgeschoren. Dit is een dierenwelzijnsafweging en geen keuze van de eigenaar; de trimster bespreekt dit vooraf en legt uit waarom.</p>
      <p>Voor het extra werk bij een vervilte vacht of extreme klitten geldt een toeslag. Deze wordt bij aankomst samen met de eigenaar vastgesteld en vooraf besproken.</p>
      <p>Onder een vervilte vacht kunnen huidproblemen, wondjes of irritaties schuilgaan die pas na het scheren zichtbaar worden. De trimster is hiervoor niet aansprakelijk.</p>` },
    en: { t: 'Coat condition and matting', b: `
      <p>A well-maintained coat leaves the most freedom in the style. Where a coat is badly tangled or matted, the dog&rsquo;s welfare comes before its appearance.</p>
      <p>Combing out a matted coat is painful and stressful for the dog. In that case the coat is clipped short. This is an animal welfare decision rather than the owner&rsquo;s choice; the groomer discusses it beforehand and explains why.</p>
      <p>A surcharge applies for the extra work involved in a matted coat or severe tangles. It is assessed together with the owner on arrival and discussed in advance.</p>
      <p>A matted coat can conceal skin problems, sores or irritation that only become visible once clipped. The groomer is not liable for these.</p>` },
  },
  {
    id: 'gedrag',
    nl: { t: 'Gedrag en veiligheid', b: `
      <p>De eigenaar meldt vooraf wanneer de hond angstig, onzeker of agressief kan reageren, of eerder problemen heeft gehad tijdens het trimmen. Dit is geen reden om een hond te weigeren, maar wel om er extra tijd en rust voor in te ruimen.</p>
      <p>Blijkt tijdens de behandeling dat de hond zoveel stress of agressie vertoont dat veilig werken niet meer mogelijk is, dan wordt de behandeling gestaakt. De tot dan toe bestede tijd wordt in rekening gebracht.</p>
      <p>Voor honden die extra tijd en begeleiding nodig hebben, geldt de toeslag voor gedragsproblemen.</p>
      <p>De hond wordt tijdens de behandeling nooit onbeheerd op de trimtafel achtergelaten. De eigenaar blijft aansprakelijk voor schade of letsel veroorzaakt door zijn of haar hond, overeenkomstig artikel 6:179 van het Burgerlijk Wetboek.</p>` },
    en: { t: 'Behaviour and safety', b: `
      <p>The owner tells the groomer in advance if the dog may react fearfully, nervously or aggressively, or has had difficulties during grooming before. This is not a reason to turn a dog away, but it is a reason to allow extra time and calm.</p>
      <p>If during treatment the dog becomes so stressed or aggressive that safe work is no longer possible, the treatment is stopped. The time spent up to that point is charged.</p>
      <p>For dogs needing extra time and handling, the behavioural difficulties surcharge applies.</p>
      <p>The dog is never left unattended on the grooming table. The owner remains liable for damage or injury caused by their dog, in line with article 6:179 of the Dutch Civil Code.</p>` },
  },
  {
    id: 'aansprakelijkheid',
    nl: { t: 'Aansprakelijkheid', b: `
      <p>De behandeling wordt met de grootst mogelijke zorg en vakkennis uitgevoerd. Werken met scherp gereedschap op een levend dier brengt echter altijd een klein risico met zich mee.</p>
      <p>De trimster is uitsluitend aansprakelijk voor schade die het directe gevolg is van aantoonbare opzet of grove nalatigheid harerzijds. Aansprakelijkheid is in dat geval beperkt tot ten hoogste het bedrag van de betreffende behandeling.</p>
      <p>De trimster is niet aansprakelijk voor:</p>
      <ul>
        <li>gevolgen van het niet, onvolledig of onjuist melden van gezondheids- of gedragsinformatie door de eigenaar;</li>
        <li>huidproblemen, wondjes of aandoeningen die pas na het scheren van een vervilte vacht zichtbaar worden;</li>
        <li>bestaande aandoeningen die door de behandeling zichtbaar of tijdelijk erger worden;</li>
        <li>het achteraf niet naar wens zijn van het model, wanneer de vachtconditie geen andere uitvoering toeliet.</li>
      </ul>
      <p>Klachten over de uitvoering meldt de eigenaar binnen 48 uur na de behandeling, zodat er nog iets aan gedaan kan worden.</p>` },
    en: { t: 'Liability', b: `
      <p>Treatment is carried out with the greatest possible care and skill. Working with sharp tools on a living animal nonetheless always carries a small risk.</p>
      <p>The groomer is liable only for damage that is the direct result of demonstrable intent or gross negligence on her part. In that case liability is limited to no more than the price of the treatment concerned.</p>
      <p>The groomer is not liable for:</p>
      <ul>
        <li>consequences of the owner failing to disclose health or behavioural information, or disclosing it incompletely or incorrectly;</li>
        <li>skin problems, sores or conditions that only become visible after a matted coat is clipped;</li>
        <li>pre-existing conditions that become visible or temporarily worse as a result of treatment;</li>
        <li>dissatisfaction with the style afterwards, where the condition of the coat allowed no other outcome.</li>
      </ul>
      <p>Complaints about the work should be raised within 48 hours of the treatment, while something can still be done about it.</p>` },
  },
  {
    id: 'betaling',
    nl: { t: 'Betaling', b: `
      <p>Betaling vindt plaats direct na de behandeling, tenzij vooraf anders is afgesproken. Alle genoemde prijzen zijn in euro&rsquo;s en inclusief btw.</p>
      <p>Toeslagen worden vooraf met de eigenaar besproken en verschijnen op de eindafrekening. Er worden geen kosten in rekening gebracht die niet vooraf zijn genoemd.</p>
      <p>Bij annuleringskosten of een no-show ontvangt de eigenaar een betaalverzoek. Deze kosten worden verrekend bij een volgende afspraak of apart voldaan.</p>` },
    en: { t: 'Payment', b: `
      <p>Payment is made directly after the treatment, unless otherwise agreed beforehand. All prices quoted are in euros and include VAT.</p>
      <p>Surcharges are discussed with the owner in advance and appear on the final bill. No charge is made that was not mentioned beforehand.</p>
      <p>Where cancellation charges or a no-show fee apply, the owner receives a payment request. These are settled at the next appointment or paid separately.</p>` },
  },
  {
    id: 'privacy',
    nl: { t: 'Privacyverklaring', b: `
      <p>Manon&rsquo;s Vachtatelier verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).</p>
      <p><strong>Welke gegevens.</strong> Via het aanvraagformulier worden verwerkt: je naam, e-mailadres, telefoonnummer, voorkeur voor contact, en de gegevens over je hond die je zelf invult (naam, leeftijd, ras, gewenste behandeling en eventuele bijzonderheden).</p>
      <p><strong>Waarvoor.</strong> Uitsluitend om contact met je op te nemen over je aanvraag, om de afspraak in te plannen en om de behandeling goed en veilig uit te kunnen voeren. De grondslag is de uitvoering van de overeenkomst en jouw toestemming.</p>
      <p><strong>Hoe lang.</strong> Klantgegevens worden bewaard zolang je klant bent en daarna maximaal zeven jaar, voor zover de fiscale bewaarplicht dat vereist. Aanvragen die niet tot een afspraak leiden, worden binnen twaalf maanden verwijderd.</p>
      <p><strong>Met wie gedeeld.</strong> Je gegevens worden niet verkocht en niet gebruikt voor marketing. Het aanvraagformulier wordt technisch afgehandeld door FormSubmit, dat het bericht uitsluitend doorstuurt en niet voor eigen doeleinden gebruikt.</p>
      <p class="demo-note"><strong>Let op &mdash; conceptvoorbeeld.</strong> Deze website is een ontwerpvoorstel en nog niet in gebruik door Manon&rsquo;s Vachtatelier. Aanvragen via dit formulier komen op dit moment terecht bij Ukuva Consulting (chris@ukuva.com), niet bij Manon. Wil je een echte afspraak maken, gebruik dan WhatsApp, telefoon of e-mail.</p>
      <p><strong>Jouw rechten.</strong> Je mag je gegevens opvragen, laten corrigeren of laten verwijderen, en je toestemming intrekken. Stuur daarvoor een e-mail naar <a href="mailto:manonsvachtatelier@icloud.com">manonsvachtatelier@icloud.com</a>. Je hebt ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.</p>` },
    en: { t: 'Privacy statement', b: `
      <p>Manon&rsquo;s Vachtatelier processes personal data in line with the General Data Protection Regulation (GDPR).</p>
      <p><strong>What data.</strong> The enquiry form processes: your name, email address, phone number, contact preference, and the details about your dog that you enter yourself (name, age, breed, desired treatment and any particulars).</p>
      <p><strong>What for.</strong> Solely to contact you about your enquiry, to schedule the appointment, and to carry out the treatment properly and safely. The legal basis is performance of the contract and your consent.</p>
      <p><strong>How long.</strong> Customer data is kept for as long as you are a customer and for a maximum of seven years after that, to the extent Dutch tax record-keeping requires. Enquiries that do not lead to an appointment are deleted within twelve months.</p>
      <p><strong>Who it is shared with.</strong> Your data is not sold and not used for marketing. The enquiry form is handled technically by FormSubmit, which only forwards the message and does not use it for its own purposes.</p>
      <p class="demo-note"><strong>Please note &mdash; concept preview.</strong> This website is a design proposal and is not yet in use by Manon&rsquo;s Vachtatelier. Enquiries sent through this form currently reach Ukuva Consulting (chris@ukuva.com), not Manon. To make a real appointment, please use WhatsApp, phone or email.</p>
      <p><strong>Your rights.</strong> You may request access to your data, have it corrected or deleted, and withdraw your consent. Email <a href="mailto:manonsvachtatelier@icloud.com">manonsvachtatelier@icloud.com</a> to do so. You also have the right to lodge a complaint with the Dutch Data Protection Authority.</p>` },
  },
  {
    id: 'cookies',
    nl: { t: 'Cookiebeleid', b: `
      <p>Deze website plaatst standaard alleen functionele opslag die nodig is om de site te laten werken: je taalkeuze (NL of EN) en je cookievoorkeur worden lokaal in je browser bewaard. Hiervoor is geen toestemming vereist.</p>
      <p><strong>Statistieken.</strong> Met jouw toestemming worden anonieme bezoekstatistieken verzameld via Google Analytics, zodat duidelijk wordt welke pagina&rsquo;s worden gelezen en hoe de site verbeterd kan worden. Deze cookies worden pas geplaatst nadat je op &ldquo;Accepteren&rdquo; hebt geklikt. Weiger je, dan wordt er niets geplaatst en wordt er niets gemeten.</p>
      <p><strong>Kaart.</strong> De kaart bij &ldquo;Locatie&rdquo; komt van OpenStreetMap en plaatst geen cookies. Je kunt de kaart dus gewoon bekijken zonder dat er iets over jou wordt vastgelegd. De knop &ldquo;Route plannen&rdquo; opent Google Maps in een nieuw tabblad; daar gelden de voorwaarden en cookies van Google.</p>
      <p>Je kunt je keuze op elk moment wijzigen via <em>Cookievoorkeuren</em> onderaan de pagina, of door de opslag van deze website in je browser te wissen.</p>` },
    en: { t: 'Cookie policy', b: `
      <p>By default this website stores only what it needs to function: your language choice (NL or EN) and your cookie preference are kept locally in your browser. No consent is required for these.</p>
      <p><strong>Statistics.</strong> With your consent, anonymous visitor statistics are collected through Google Analytics, so it is clear which pages are read and how the site can be improved. These cookies are only set once you have clicked &ldquo;Accept&rdquo;. If you decline, nothing is set and nothing is measured.</p>
      <p><strong>Map.</strong> The map under &ldquo;Location&rdquo; comes from OpenStreetMap and sets no cookies, so you can look at it without anything being recorded about you. The &ldquo;Get directions&rdquo; button opens Google Maps in a new tab, where Google's own terms and cookies apply.</p>
      <p>You can change your choice at any time via <em>Cookie preferences</em> at the foot of the page, or by clearing this website&rsquo;s storage in your browser.</p>` },
  },
  {
    id: 'recht',
    nl: { t: 'Toepasselijk recht en klachten', b: `
      <p>Op deze voorwaarden en op iedere behandeling is Nederlands recht van toepassing.</p>
      <p>Ben je ergens niet tevreden over, laat het dan eerst weten. De meeste dingen zijn in een gesprek op te lossen, en er wordt altijd gezocht naar een redelijke oplossing.</p>
      <p>Komen we er samen niet uit, dan kan het geschil worden voorgelegd aan de bevoegde rechter in het arrondissement Noord-Holland.</p>
      <p class="text-caption text-soft">Laatst bijgewerkt: 20 juli 2026. Conceptversie, nog vast te stellen.</p>` },
    en: { t: 'Governing law and complaints', b: `
      <p>Dutch law applies to these terms and to every treatment.</p>
      <p>If you are unhappy with something, please say so first. Most things can be resolved in a conversation, and a reasonable solution is always sought.</p>
      <p>If we cannot resolve it together, the dispute may be put before the competent court in the Noord-Holland district.</p>
      <p class="text-caption text-soft">Last updated: 20 July 2026. Draft version, still to be adopted.</p>` },
  },
];

/* Render the accordion. Both languages are written into the DOM; setLang()
   toggles [data-lang] blocks, so switching language is instant. */
function renderLegal() {
  const wrap = document.getElementById('tcs');
  if (!wrap) return;

  wrap.innerHTML = LEGAL.map((item, i) => `
    <div class="tcs-item" data-tcs="${item.id}">
      <h3 class="tcs-heading">
        <button class="tcs-btn" type="button" aria-expanded="false" aria-controls="tcs-body-${i}">
          <span class="tcs-title">
            <span data-lang="nl">${item.nl.t}</span><span data-lang="en" hidden>${item.en.t}</span>
          </span>
          <span class="tcs-chevron" aria-hidden="true"></span>
        </button>
      </h3>
      <div class="tcs-body" id="tcs-body-${i}">
        <div class="tcs-inner prose">
          <div data-lang="nl">${item.nl.b}</div>
          <div data-lang="en" hidden>${item.en.b}</div>
        </div>
      </div>
    </div>
  `).join('');
}
