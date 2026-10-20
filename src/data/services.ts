export interface FAQItem {
  question: string;
  answer: string;
}

export interface SubService {
  /** Anchor id on the service page, e.g. /tjanster/markarbeten#schakter */
  id: string;
  name: string;
  text: string;
  bullets?: string[];
}

export interface ServiceItem {
  slug: string;
  title: string;
  /** Visible H1 on the service page */
  h1: string;
  shortDescription: string;
  heroText: string;
  detailedDescription: string;
  heroImage: string;
  image: string;
  imagePosition?: string;
  imageAlt: string;
  href: string;
  tag?: string;
  badge?: string;
  highlights?: string[];
  subServices: SubService[];
  faq?: FAQItem[];
  seoTitle: string;
  seoDescription: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'markarbeten',
    title: 'Markarbeten',
    h1: 'Markarbeten i Skellefteå',
    shortDescription: 'Schakter, infarter, dikning och jordvärmegrävning för villa, fritidshus, lantbruk och företag.',
    heroText: 'Schaktning, infarter, dikning och jordvärmegrävning utfört av ett lokalt familjeföretag med egna maskiner.',
    detailedDescription: `Ett bra markarbete märks inte, det bara fungerar. Vattnet rinner åt rätt håll, infarten håller för tung trafik och marken sätter sig inte efter första vintern. Det är det vi jobbar för på varje uppdrag.

Vi utgår från Finnträsk och gör markarbeten åt privatpersoner, lantbruk och företag i Skellefteå, Byske, Kåge, Ursviken, Bureå och resten av Västerbotten. Du har direktkontakt med Niklas eller Kevin genom hela jobbet, från platsbesök till färdig yta.`,
    heroImage: '/service-markarbeten.jpg',
    image: '/service-markarbeten.jpg',
    imageAlt: 'Finnträsk Entreprenad grävmaskin utför markarbete och schaktning vid bostadstomt',
    href: '/tjanster/markarbeten',
    tag: 'Markarbeten',
    badge: 'Schakt och mark',
    highlights: [
      'Schakt inför villa, garage och maskinhall',
      'Nya infarter och förstärkning av befintliga',
      'Dikning och avvattning av tomt och mark',
      'Grävning för jordvärme och kollektorslang',
    ],
    subServices: [
      {
        id: 'schakter',
        name: 'Schakter',
        text: 'Vi schaktar ur för husgrunder, garage, attefallshus, maskinhallar och tillbyggnader. Matjord och lösa massor tas bort ner till bärkraftig botten, och vi ser till att schaktbotten får rätt nivå inför nästa steg. Överblivna massor kan vi lägga upp på tomten eller köra bort.',
        bullets: ['Husgrund, garage och attefallshus', 'Ledningsschakt för el, fiber och vatten', 'Bortforsling eller omfördelning av massor'],
      },
      {
        id: 'infarter',
        name: 'Infarter',
        text: 'En infart ska tåla tunga fordon, tjäle och snöröjning år efter år. Vi gräver ur, lägger fiberduk vid behov, bygger upp med förstärkningslager och bärlager och avslutar med slitlager av grus. Trumma under infarten löser vi också, så att diket fortsätter fungera.',
        bullets: ['Ny infart till villa eller fritidshus', 'Breddning och förstärkning av gammal infart', 'Vägtrumma och avvattning'],
      },
      {
        id: 'dikning',
        name: 'Dikning',
        text: 'Står vatten kvar på tomten eller åkern på våren är det ofta diket som behöver ses över. Vi gräver nya diken, rensar igenvuxna diken och lägger trummor där det behövs, så att vattnet leds bort från hus, vägar och odlingsmark.',
        bullets: ['Nya diken och dikesrensning', 'Avvattning av tomt, väg och åker', 'Trummor och utlopp'],
      },
      {
        id: 'jordvarmegravning',
        name: 'Jordvärmegrävning',
        text: 'Ska du installera jordvärme med ytjordvärme behöver kollektorslangen grävas ner på rätt djup och med rätt avstånd. Vi gräver schaktet i samarbete med din värmepumpsinstallatör och återfyller noggrant så att tomten kan återställas efteråt.',
        bullets: ['Grävning för ytjordvärme', 'Schakt för anslutning in till huset', 'Återfyllning och återställning av tomt'],
      },
    ],
    faq: [
      {
        question: 'Hur snabbt kan ni börja med ett markarbete i Skellefteå?',
        answer: 'Det beror på säsong och hur mycket vi har inbokat. Mindre jobb kan ofta starta inom ett par veckor. Ring Niklas eller Kevin så får du ett ärligt besked direkt.',
      },
      {
        question: 'Tar ni hand om massorna som grävs upp?',
        answer: 'Ja. Vi kan lägga upp massorna på tomten för återfyllning eller köra bort dem, beroende på vad som passar ditt projekt bäst.',
      },
      {
        question: 'Kan jag få ROT-avdrag för markarbete?',
        answer: 'Vissa markarbeten i anslutning till bostaden ger rätt till ROT-avdrag, till exempel dränering runt huset. Vi går igenom vad som gäller för just ditt jobb när vi lämnar offert.',
      },
    ],
    seoTitle: 'Markarbeten i Skellefteå: schakt, infarter och dikning | Finnträsk Entreprenad',
    seoDescription: 'Schakter, infarter, dikning och jordvärmegrävning i Skellefteå, Byske och Västerbotten. Lokalt familjeföretag med egna maskiner. Begär kostnadsfri offert.',
  },
  {
    slug: 'grundlaggning',
    title: 'Grundläggning',
    h1: 'Grundläggning och dränering i Skellefteå',
    shortDescription: 'Grunder för hus och garage, dränering och grundisolering samt VA-arbete.',
    heroText: 'Stabila grunder, fungerande dränering och VA-arbete gjort ordentligt från början.',
    detailedDescription: `Grunden är den del av huset du aldrig ser, men som allt annat vilar på. Ett misstag här blir dyrt att rätta till i efterhand. Därför lägger vi stor vikt vid underarbetet: rätt schaktdjup, dränerande material, ordentlig packning och exakta höjder.

Vi gör grundarbeten för villor, garage, attefallshus och ekonomibyggnader, dränerar om äldre hus och utför VA-arbeten i Skellefteå, Byske, Kåge, Bureå, Burträsk och övriga Västerbotten.`,
    heroImage: '/service-grundlaggning.jpg',
    image: '/service-grundlaggning.jpg',
    imagePosition: 'center 65%',
    imageAlt: 'Gjuten betongplatta och färdigställd husgrund utförd av Finnträsk Entreprenad',
    href: '/tjanster/grundlaggning',
    tag: 'Grundläggning',
    badge: 'Stabila grunder',
    highlights: [
      'Grundarbeten för platta på mark',
      'Omdränering och grundisolering runt huset',
      'VA-arbete och anslutning till kommunalt nät',
      'Noggrann packning och laseravvägning',
    ],
    subServices: [
      {
        id: 'grunder',
        name: 'Grunder',
        text: 'Vi förbereder grunden för platta på mark, plintgrund eller krypgrund. Det innebär schakt till bärkraftig botten, uppbyggnad med dränerande makadam, packning i lager och avvägning med laser så att plattan hamnar exakt rätt. Vi samarbetar gärna med din byggare eller ditt husföretag.',
        bullets: ['Villa, garage och attefallshus', 'Maskinhallar och ekonomibyggnader', 'Plintar och mindre grunder för förråd och altan'],
      },
      {
        id: 'dranering-grundisolering',
        name: 'Dränering och grundisolering',
        text: 'Fuktig källare eller lukt i krypgrunden är ofta ett tecken på att dräneringen har gjort sitt. Vi gräver fram grunden, lägger ny dräneringsledning och monterar dräneringsskivor mot grundmuren. Skivorna både isolerar och leder bort vatten, vilket ger en torrare och varmare grund.',
        bullets: ['Omdränering av äldre villor', 'Utvändig grundisolering mot källarvägg och grundmur', 'Spolbrunnar och ny dräneringsledning'],
      },
      {
        id: 'va-arbete',
        name: 'VA-arbete',
        text: 'Vi gräver för vatten och avlopp, både vid anslutning till kommunalt nät och för enskilda lösningar på landsbygden. Ledningarna läggs på frostfritt djup eller isoleras där det inte går att gräva djupt, vilket är viktigt här uppe i norr.',
        bullets: ['Anslutning till kommunalt VA', 'Byte av gamla avloppsledningar', 'Schakt för enskilt avlopp'],
      },
    ],
    faq: [
      {
        question: 'Vad krävs innan man kan gjuta en platta på mark?',
        answer: 'Marken schaktas ur till fast botten, fylls med dränerande material, packas i lager och avvägs noggrant. Därefter läggs isolering och armering innan gjutning.',
      },
      {
        question: 'Hur vet jag om huset behöver ny dränering?',
        answer: 'Vanliga tecken är fukt eller mögellukt i källaren, saltutfällningar på källarväggen eller att huset är äldre än 30 till 40 år. Vi kommer gärna ut och tittar.',
      },
      {
        question: 'Varför är det viktigt med grundisolering vid dränering?',
        answer: 'Dräneringsskivorna både isolerar grundmuren och leder bort vatten. Det motverkar markfukt och ger en torrare och varmare källare med lägre uppvärmningskostnader jämfört med att bara byta dräneringsrör.',
      },
    ],
    seoTitle: 'Grundläggning, dränering och VA i Skellefteå | Finnträsk Entreprenad',
    seoDescription: 'Grunder för hus och garage, dränering och grundisolering samt VA-arbete i Skellefteå och Västerbotten. Noggrant underarbete. Begär offert.',
  },
  {
    slug: 'skogsentreprenad',
    title: 'Skogsentreprenad',
    h1: 'Skogsvägar, stugvägar och högläggning i Västerbotten',
    shortDescription: 'Skogsvägar, stugvägar, högläggning av hyggen samt trädfällning och skotning.',
    heroText: 'Vägar som håller och hyggen som är redo för plantering, byggt med kunskap om norrländsk terräng.',
    detailedDescription: `Många av våra uppdrag ligger utanför tätorterna. Vi bygger och förbättrar skogsvägar och stugvägar och hjälper skogsägare att förbereda hyggen inför föryngring.

Vi känner terrängen och förhållandena i Skellefteå kommun och Västerbotten, med tjäle, myrmark och korta säsonger. Det påverkar hur en väg ska byggas för att hålla i många år.`,
    heroImage: '/service-skog.jpg',
    image: '/service-skog.jpg',
    imagePosition: 'center 48%',
    imageAlt: 'Skogsväg, dumper och grävmaskin i skogsterräng vid stuga i Västerbotten',
    href: '/tjanster/skogsentreprenad',
    tag: 'Skogsentreprenad',
    badge: 'Skog och väg',
    highlights: [
      'Nybyggnation av skogsvägar',
      'Stugvägar och vägar till fritidshus',
      'Högläggning av hyggen inför plantering',
      'Trädfällning, vindfällor och skotning',
    ],
    subServices: [
      {
        id: 'skogsvagar',
        name: 'Skogsvägar',
        text: 'En välbyggd skogsväg gör det möjligt att sköta och avverka skogen på ett lönsamt sätt. Vi bygger nya vägar och rustar upp befintliga med ny vägkropp, diken, trummor och slitlager, anpassat efter hur vägen ska användas.',
        bullets: ['Nybyggnation och upprustning', 'Vändplaner och avlägg', 'Diken och vägtrummor'],
      },
      {
        id: 'stugvagar',
        name: 'Stugvägar',
        text: 'Drömmer du om att kunna köra hela vägen fram till stugan? Vi bygger stugvägar och infarter till fritidshus, även i svårare terräng. Vägen anpassas så att den fungerar året runt och klarar snöröjning.',
        bullets: ['Ny väg fram till fritidshus', 'Förstärkning av befintlig stugväg', 'Parkering och vändplats vid stugan'],
      },
      {
        id: 'hoglaggning-hyggen',
        name: 'Högläggning av hyggen',
        text: 'Högläggning innebär att plantorna sätts i upphöjda högar av omvänd torv och jord. Det ger varmare och torrare växtplats och bättre överlevnad för plantorna, särskilt på fuktig mark. Vi utför högläggning med grävmaskin på hyggen i hela Västerbotten.',
        bullets: ['Markberedning inför plantering', 'Passar fuktig och tung mark', 'Uppdrag åt skogsägare och skogsbolag'],
      },
      {
        id: 'tradfallning-skotning',
        name: 'Trädfällning och skotning',
        text: 'Vi hjälper till med trädfällning i skog och på gårdstomter, inklusive uppröjning av vindfällor och stormskador. Vi ombesörjer även skotning och uttransport av virke och ris från mindre skogspartier och gallringar.',
        bullets: [
          'Uppröjning av vindfällor och stormfällt',
          'Fällning av gårdsträd och träd på tomt',
          'Skotning av mindre skogspartier',
        ],
      },
    ],
    faq: [
      {
        question: 'Vad kostar det att bygga en stugväg?',
        answer: 'Det beror på vägens längd, terrängen och vilket material som finns på plats. Vi gör en genomgång på plats vid behov och lämnar ett tydligt prisförslag.',
      },
      {
        question: 'Vad är fördelen med högläggning jämfört med harvning?',
        answer: 'Högläggning ger plantorna en upphöjd, varmare och torrare växtplats. Det fungerar särskilt bra på fuktig mark där harvning ger sämre resultat.',
      },
      {
        question: 'Kan ni hjälpa till med vindfällor och enstaka gårdsträd?',
        answer: 'Ja, vi tar hand om vindfällor, fäller gårdsträd och skotar ut virke från mindre skogspartier så att marken blir ren och framkomlig igen.',
      },
    ],
    seoTitle: 'Skogsvägar, stugvägar, högläggning och trädfällning | Finnträsk Entreprenad',
    seoDescription: 'Vi bygger skogsvägar och stugvägar, utför högläggning av hyggen samt hanterar trädfällning, vindfällor och skotning i Skellefteå och Västerbotten.',
  },
  {
    slug: 'fastighetsservice',
    title: 'Fastighetsservice',
    h1: 'Trädfällning, trädgård och takskottning i Skellefteå',
    shortDescription: 'Trädgårdsanläggning, trädfällning med skylift, stubbortagning och skottning av tak.',
    heroText: 'Hjälp med tomten och huset året runt, från trädgårdsanläggning på sommaren till takskottning på vintern.',
    detailedDescription: `Vi hjälper villaägare, bostadsrättsföreningar och företag med tomten och fastigheten under hela året. På sommaren anlägger vi trädgårdar och tar ner träd, på vintern skottar vi tak innan snölasten blir ett problem.

Vi arbetar i Skellefteå, Byske, Kåge, Ursviken och omkringliggande orter. Du får ett fast pris eller ett tydligt upplägg innan vi börjar.`,
    heroImage: '/service-fastighetsservice.jpg',
    image: '/service-fastighetsservice.jpg',
    imageAlt: 'Trädfällning med skylift vid villa i Skellefteå',
    href: '/tjanster/fastighetsservice',
    tag: 'Fastighetsservice',
    badge: 'Året runt',
    highlights: [
      'Trädgårdsanläggning och markplanering',
      'Säker trädfällning med skylift',
      'Stubbortagning efter fällning',
      'Skottning av tak vintertid',
    ],
    subServices: [
      {
        id: 'tradgardsanlaggning',
        name: 'Trädgårdsanläggning',
        text: 'Vi förbereder och anlägger trädgården från grunden: grovplanering, jordförbättring, gångar, uteplatser, grillplatser och ytor för gräsmatta. Du får en tomt med rätt lutning, där vattnet rinner bort från huset.',
        bullets: ['Planering och utjämning av tomt', 'Uteplatser, gångar och grillplatser', 'Underarbete för gräsmatta och planteringar'],
      },
      {
        id: 'tradfallning',
        name: 'Trädfällning',
        text: 'Träd som står nära hus, ledningar eller vägar kan inte fällas på vanligt sätt. Vi tar ner dem i sektioner med hjälp av skylift, bit för bit och kontrollerat. Ris och stammar kan vi forsla bort eller lämna kapat som ved.',
        bullets: ['Sektionsfällning med skylift', 'Riskträd nära hus och ledningar', 'Bortforsling av ris och virke'],
      },
      {
        id: 'stubbortagning',
        name: 'Stubbortagning',
        text: 'En stubbe som står kvar efter fällningen är i vägen för gräsklipparen och skjuter ofta nya skott. Vi gräver effektivt upp stubben med grävmaskin, tar med rötterna och fyller igen hålet så att marken kan återställas och användas igen.',
        bullets: ['Stubbar efter trädfällning', 'Återfyllning av hålet', 'Gärna i samband med trädfällning'],
      },
      {
        id: 'takskottning',
        name: 'Skottning av tak',
        text: 'Stora snömängder på taket kan ge skador på takstolar och risk för ras. Vi skottar tak på villor, garage, ladugårdar och mindre fastigheter med säkerhetsutrustning och avspärrning där det behövs.',
        bullets: ['Villor, garage och ekonomibyggnader', 'Avspärrning och säker arbetsmetod', 'Bortforsling av snö vid behov'],
      },
    ],
    faq: [
      {
        question: 'Kan ni fälla träd som står nära huset?',
        answer: 'Ja. Med skylift tar vi ner trädet i sektioner, uppifrån och ner, utan att det behöver falla i ett stycke. Det är den säkraste metoden nära hus och ledningar.',
      },
      {
        question: 'När behöver taket skottas?',
        answer: 'Det beror på takets konstruktion och snöns vikt. Blöt och packad snö väger betydligt mer än nysnö. Är du osäker kan du ringa oss så gör vi en bedömning.',
      },
    ],
    seoTitle: 'Trädfällning, stubbortagning och takskottning i Skellefteå | Finnträsk Entreprenad',
    seoDescription: 'Trädgårdsanläggning, trädfällning med skylift, stubbortagning och skottning av tak i Skellefteå, Byske och Kåge. Begär kostnadsfri offert.',
  },
  {
    slug: 'transport-maskintransport',
    title: 'Transport och Maskintransport',
    h1: 'Transport, maskintransporter och flakuthyrning i Skellefteå',
    shortDescription: 'Grustransporter, maskintransporter, väggblock och uthyrning av 22 m³ container med tömning för företag och privatpersoner.',
    heroText: 'Flexibla transporter med egen lastbil, maskinflak och släp samt uthyrning av 22 m³ container i Skellefteå och Västerbotten.',
    detailedDescription: `Med egen lastbil utrustad med maskinflak och släp erbjuder vi pålitliga transporttjänster åt både företag och privatpersoner i Skellefteå, Byske, Kåge, Ursviken och hela Västerbotten.

Vi kör mestadels grus, bergkross och matjord till bygg- och trädgårdsprojekt, men utför även maskintransporter av grävmaskiner och utrustning samt transport av väggblock och skrymmande byggmaterial. Dessutom har vi en rymlig 22 m³ container för uthyrning – perfekt vid renovering, städning eller bygge – där vi sköter både utkörning, etablering och tömning. Det mesta som går att lasta på ett maskinflak och släp löser vi smidigt och punktligt.`,
    heroImage: '/service-transport.jpg',
    image: '/service-transport.jpg',
    imageAlt: 'Volvo lastbil med maskinflak för maskintransporter och materialleveranser i Skellefteå',
    href: '/tjanster/transport-maskintransport',
    tag: 'Transport',
    badge: 'Egen lastbil',
    highlights: [
      'Grustransporter och materialleveranser (grus, kross, matjord)',
      'Maskintransporter med maskinflak och släp',
      'Transport av väggblock och skrymmande byggmaterial',
      'Uthyrning av 22 m³ container inklusive utkörning och tömning',
    ],
    subServices: [
      {
        id: 'grustransporter',
        name: 'Grus- och materialtransporter',
        text: 'Ska du anlägga en ny infart, gjuta en platta eller fixa trädgården? Vi levererar grus, bergkross, makadam, sand och matjord direkt till din tomt eller byggarbetsplats. Med egen lastbil slipper du dyra mellanhänder och kan få materialet tippat precis där du vill ha det. Vi kan även köra bort schaktmassor och fyllnadsmaterial.',
        bullets: ['Grus, bergkross och makadam', 'Matjord och harpad planteringsjord', 'Bortforsling av schaktmassor och fyllnadsmaterial'],
      },
      {
        id: 'maskintransporter',
        name: 'Maskintransporter',
        text: 'Behöver du flytta en grävmaskin, dumper, traktor eller tunga redskap mellan arbetsplatser? Med vårt maskinflak och släp transporterar vi entreprenadmaskiner och utrustning tryggt och säkert åt byggföretag, entreprenörer och maskinägare i Västerbotten.',
        bullets: ['Flytt av grävmaskiner och entreprenadmaskiner', 'Maskinflak med god lastkapacitet och lastsäkring', 'Snabba ryck och pålitliga tider'],
      },
      {
        id: 'vaggblock-specialgods',
        name: 'Väggblock och byggmaterial',
        text: 'Vi transporterar prefabricerade väggblock, byggmoduler, takstolar och virkespaket för byggprojekt. Tack vare flexibelt flak och släp kan vi lasta och leverera långt, tungt och skrymmande byggmaterial direkt till byggarbetsplatsen.',
        bullets: ['Prefabricerade väggblock och takelement', 'Skrymmande byggmoduler och konstruktionsvirke', 'Direktleverans till byggplatsen'],
      },
      {
        id: 'flakuthyrning',
        name: 'Flakuthyrning 22 m³',
        text: 'Hyr vår rejäla 22 m³ container när du rensar, bygger om eller renoverar. Vi kör ut containern till din fastighet, placerar den där du önskar och hämtar upp den för tömning när du är klar. Enkelt, smidigt och prisvärt för både privatpersoner, bostadsrättsföreningar och företag.',
        bullets: ['22 m³ volym för byggavfall, ris, skrot eller rivning', 'Utkörning, etablering och hämtning ingår', 'Miljöriktig sortering och tömning på återvinning'],
      },
    ],
    faq: [
      {
        question: 'Vem kan anlita er för transport och flakuthyrning?',
        answer: 'Vi kör åt både privatpersoner och företag (byggbolag, lantbrukare och andra entreprenörer). Oavsett om du behöver ett enstaka gruslass till uppfarten eller löpande maskintransporter är du varmt välkommen att höra av dig.',
      },
      {
        question: 'Vad ryms i en 22 m³ container och vad får man slänga?',
        answer: 'En 22 m³ container rymmer stora volymer och passar utmärkt för byggspill, trä, ris och trädgårdsavfall, möbler och blandat skrot. Hör av dig till oss inför uthyrningen så stämmer vi av vilket avfallsslag det gäller och ger dig ett fast pris inklusive utkörning och tömning.',
      },
      {
        question: 'Hur snabbt kan ni leverera grus eller transportera en maskin?',
        answer: 'Vi är flexibla och kan ofta lösa materialleveranser och lokala maskintransporter med kort varsel i Skellefteåområdet. Ring Niklas (070-588 40 32) eller Kevin (070-588 40 42) så kikar vi på schemat direkt.',
      },
    ],
    seoTitle: 'Transport, maskintransport och flakuthyrning i Skellefteå | Finnträsk Entreprenad',
    seoDescription: 'Grustransporter, maskintransporter med maskinflak, transport av väggblock och uthyrning av 22 m³ container med tömning i Skellefteå och Västerbotten. Begär kostnadsfri offert.',
  },
];

/** Maps old slugs (used in earlier links/bookmarks) to the new service groups. */
export const legacyServiceSlugs: Record<string, string> = {
  gravning: 'markarbeten',
  byggnation: 'markarbeten',
  betong: 'grundlaggning',
  maskinforare: 'skogsentreprenad',
  maskintjanster: 'skogsentreprenad',
  transport: 'transport-maskintransport',
  maskintransport: 'transport-maskintransport',
  container: 'transport-maskintransport',
  akeri: 'transport-maskintransport',
};

export function getServiceBySlug(slug: string | undefined): ServiceItem | undefined {
  if (!slug) return undefined;
  return services.find((s) => s.slug === slug);
}

export default services;
