export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroText: string;
  detailedDescription: string;
  heroImage: string;
  image: string;
  href: string;
  tag?: string;
  badge?: string;
  highlights?: string[];
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
    bullets?: string[];
    subsections?: Array<{
      subheading: string;
      text: string;
    }>;
  }>;
  faq?: FAQItem[];
  iconName?: string;
  features?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'gravning',
    title: 'Schaktning',
    shortDescription: 'Allt inom mark och schaktarbeten, tomtplanering, grundgrävning, dikesgrävning och kabelgrävning i Västerbotten med omnejd.',
    heroText: 'Allt inom mark och schaktarbeten med precision för trygga grunder och hållbara markytor.',
    detailedDescription: `Planerar du ett markarbete, schaktning inför nybyggnation eller dränering av husgrund? Finnträsk Entreprenad är ett företag med stark lokal förankring i Västerbotten som utför allt inom mark och schaktarbeten. Med stor kunskap och bredd löser vi det mesta.

Vi hjälper privatpersoner, lantbruk, företag och fastighetsägare i Västerbotten med allt från tomtplanering och dikesgrävning till ledningsgrävning och finplanering. Hör av dig till Niklas eller Kevin så diskuterar vi fram den bästa lösningen.`,
    heroImage: '/service-gravning.webp',
    image: '/service-gravning.webp',
    href: '/tjanster#gravning',
    tag: 'Schaktning',
    badge: 'Precision och erfarenhet',
    highlights: [
      'Schaktning och tomtplanering',
      'Grundgrävning inför hus och garage',
      'Dikesgrävning och vägunderhåll',
      'Kabel och ledningsgrävning',
    ],
    faq: [
      {
        question: 'Hur snabbt kan ni påbörja ett grävarbete?',
        answer: 'Mindre gräv och schaktarbeten kan vi oftast påbörja inom 1 till 2 veckor beroende på maskinbokning och säsong.',
      },
      {
        question: 'Utför ni även tomtplanering och dikesgrävning?',
        answer: 'Ja, vi har stor erfarenhet av tomtplanering, dikesrensning och vägunderhåll i Västerbotten med omnejd.',
      },
    ],
  },
  {
    slug: 'byggnation',
    title: 'Markanläggning',
    shortDescription: 'Kundanpassade anläggningsarbeten, grillplatser, markbeläggningar, stenmurar och utemiljöer med gedigen finish.',
    heroText: 'Kvalitativa anläggningsarbeten och utemiljöer anpassade efter dina visioner och behov.',
    detailedDescription: `Vill du anlägga en trivsam grillplats, förbereda för en ny uteplats eller skapa en funktionell och vacker tomtmiljö? Finnträsk Entreprenad förverkligar dina idéer med gediget hantverk och omsorg om detaljerna.

Vi tar hand om hela processen från urgrävning och bärlager till stensättning, markbeläggning och finjustering. Som familjeföretaget i Västerbotten gör vi visioner till verklighet.`,
    heroImage: '/service-byggnation.webp',
    image: '/service-byggnation.webp',
    href: '/tjanster#byggnation',
    tag: 'Markanläggning',
    badge: 'Hantverk och kvalitet',
    highlights: [
      'Anläggning av grillplatser och uteplatser',
      'Markbeläggningar, sten och bärlager',
      'Tomtberedning och grönytor',
      'Gediget utförande med fasta priser',
    ],
    faq: [
      {
        question: 'Hjälper ni till med idéer och utformning av utemiljön?',
        answer: 'Absolut! Vi bollar gärna materialval, höjdsättning och utformning utifrån tomtens naturliga förutsättningar.',
      },
      {
        question: 'Kan privatpersoner nyttja ROT avdrag?',
        answer: 'Vid godkända mark och grundarbeten i anslutning till bostadshus hjälper vi gärna till att administrera ROT avdraget direkt på fakturan.',
      },
    ],
  },
  {
    slug: 'betong',
    title: 'Grundläggning',
    shortDescription: 'Gjutning av betongplatta på mark, armering, socklar, stödmurar och formgjutning för garage, maskinhallar och villor.',
    heroText: 'Stabila och hållbara betonggrunder gjutna med högsta precision och noggrannhet.',
    detailedDescription: `En stabil grund är förutsättningen för ett lyckat bygge. Finnträsk Entreprenad utför kompletta mark och grundarbeten inför gjutning av platta på mark för villor, maskinhallar, fritidshus och garage i Västerbotten med omnejd.

Vi ombesörjer hela kedjan: schaktning, dränerande bärlager, isolering, armering och förberedelser inför gjutning för att säkerställa ett perfekt och fuktsäkert resultat.`,
    heroImage: '/service-betong.webp',
    image: '/service-betong.webp',
    href: '/tjanster#betong',
    tag: 'Grundläggning',
    badge: 'Stabila Grunder',
    highlights: [
      'Grundarbeten för platta på mark',
      'Schaktning, bärlager och markisolering',
      'Gjutning av stödmurar och socklar',
      'Noggrann höjdsättning och packning',
    ],
    faq: [
      {
        question: 'Vad krävs innan man kan gjuta en platta?',
        answer: 'Marken behöver schaktas ur till fast botten, fyllas med dränerande bärlager och packas noggrant med vibroplatta innan isolering och armering installeras.',
      },
      {
        question: 'Gör ni grunder för både garage och större hallar?',
        answer: 'Ja, vi utför grundarbeten för allt från privata garage och attefallshus till större maskinhallar och ekonomibyggnader.',
      },
    ],
  },
  {
    slug: 'maskinforare',
    title: 'Maskintjänster',
    shortDescription: 'Kompletta entreprenadtjänster, erfarna maskinförare, trädfällning från skylift och transporter för större uppdrag.',
    heroText: 'Erfarna maskinförare och gedigen transportbakgrund för alla typer av entreprenaduppdrag.',
    detailedDescription: `Behöver du anlita en erfaren maskinförare eller boka maskintjänster för ditt entreprenadprojekt? Finnträsk Entreprenad har en gedigen bakgrund inom transportsektorn med goda kontakter, vilket gör att vi kan åta oss även större uppdrag.

Vi erbjuder även specialtjänster såsom säker trädfällning med skylift, materialtransporter, schaktmassor och markberedning. Vi arbetar snabbt, säkert och med full hänsyn till omgivningen.`,
    heroImage: '/service-maskinforare.webp',
    image: '/service-maskinforare.webp',
    href: '/tjanster#maskinforare',
    tag: 'Maskintjänster',
    badge: 'Bred Kapacitet',
    highlights: [
      'Erfarna maskinförare med bred kompetens',
      'Säker trädfällning med skylift',
      'Gedigen bakgrund inom transportsektorn',
      'Flexibla upplägg per timme eller fast pris',
    ],
    faq: [
      {
        question: 'Arbetar ni på löpande räkning eller fast pris?',
        answer: 'Vi erbjuder både fasta offerter för hela entreprenader och löpande timdebitering för maskintjänster och transport, beroende på vad som passar bäst.',
      },
      {
        question: 'Vilka områden i Västerbotten arbetar ni i?',
        answer: 'Vi utgår från Finnträsk i Västerbotten och utför uppdrag i Byske, Skellefteå, Piteå och omnejd i hela regionen.',
      },
    ],
  },
];

export default services;
