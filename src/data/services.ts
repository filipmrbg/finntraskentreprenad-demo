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
    title: 'Grävning',
    shortDescription: 'Professionella schaktarbeten, tomtplanering, grundgrävning, dränering och markarbeten i Värmland med omnejd.',
    heroText: 'Effektiva gräv och markarbeten med precision för trygga grunder och hållbara markytor.',
    detailedDescription: `Planerar du ett markarbete, dränering av husgrund eller schaktning inför nybyggnation? GS Bygg Värmland AB utför alla typer av grävarbeten med moderna maskiner och hög precision.

Vi hjälper både privatpersoner, företag och fastighetsägare i Värmland med allt från tomtplanering och finplanering till kabelgrävning, vatten och avlopp samt fuktskyddande dränering.`,
    heroImage: '/service-gravning.webp',
    image: '/service-gravning.webp',
    href: '/tjanster#gravning',
    tag: 'Grävning',
    badge: 'Precision & Erfarenhet',
    highlights: [
      'Schaktning och tomtplanering',
      'Grundgrävning inför gjutning och nybygge',
      'Husdränering och fuktskydd',
      'Kabel och ledningsgrävning',
    ],
    faq: [
      {
        question: 'Hur snabbt kan ni påbörja ett grävarbete?',
        answer: 'Mindre grävarbeten kan vi oftast påbörja inom 1 till 2 veckor beroende på säsong och maskinbokning.',
      },
      {
        question: 'Utför ni dränering av befintliga husgrunder?',
        answer: 'Ja, vi utför kompletta dräneringar med godkända isoler och fuktskyddssystem som skyddar fastigheten mot markfukt.',
      },
    ],
  },
  {
    slug: 'byggnation',
    title: 'Byggnation',
    shortDescription: 'Kundanpassade byggprojekt, garage, attefallshus, altaner och träkonstruktioner med gedigen kvalitet och finish.',
    heroText: 'Kvalitativ byggnation och snickeri anpassat efter dina visioner och behov.',
    detailedDescription: `Söker du en pålitlig byggare för att uppföra ett garage, attefallshus, utbyggnad eller ett rejält trädäck? GS Bygg Värmland AB utför kundanpassade byggnationer med starkt fokus på hållbarhet, funktion och finish.

Vi tar hand om hela byggprocessen från gjuten grund och regelstomme till färdigställd fasad och tak. Som privatperson kan du självklart nyttja 30 % ROT avdrag på arbetskostnaden.`,
    heroImage: '/service-byggnation.webp',
    image: '/service-byggnation.webp',
    href: '/tjanster#byggnation',
    tag: 'Byggnation',
    badge: 'ROT avdrag 30%',
    highlights: [
      'Garage, attefallshus och förråd',
      'Altaner, trädäck och staket',
      'Tillbyggnader och träkonstruktioner',
      'Gediget hantverk med fasta priser',
    ],
    faq: [
      {
        question: 'Hur fungerar ROT avdraget vid byggnation?',
        answer: 'Vid ombyggnad och tillbyggnad på befintlig bostad drar vi av 30 % av arbetskostnaden direkt på fakturan och sköter all administration med Skatteverket.',
      },
      {
        question: 'Hjälper ni till med underlag inför bygglov?',
        answer: 'Ja, vi bistår gärna med rådgivning och måttunderlag inför din bygglovsansökan eller anmälan.',
      },
    ],
  },
  {
    slug: 'betong',
    title: 'Betong',
    shortDescription: 'Gjutning av betongplatta på mark, armering, socklar, stödmurar och formgjutning för villor, garage och industri.',
    heroText: 'Stabila och hållbara betonggrunder gjutna med millimeterprecision.',
    detailedDescription: `En stabil betonggrund är nyckeln till ett lyckat bygge. GS Bygg Värmland AB utför gjutning av platta på mark för villor, fritidshus, garage och industrilokaler i Värmland med omnejd.

Vi ombesörjer hela kedjan: schaktning, bärlager, isolering, golvvärmeläggning, armering och betonggjutning med professionell glättning för ett perfekt plant och slitstarkt golv.`,
    heroImage: '/service-betong.webp',
    image: '/service-betong.webp',
    href: '/tjanster#betong',
    tag: 'Betong',
    badge: 'Stabila Grunder',
    highlights: [
      'Platta på mark för villa och garage',
      'Armering och isolering',
      'Gjutning av stödmurar och socklar',
      'Professionell glättning och finish',
    ],
    faq: [
      {
        question: 'Vad krävs innan man kan gjuta en betongplatta?',
        answer: 'Marken behöver schaktas ur, fyllas med dränerande bärlager och packas ordentligt innan kantelement, isolering, armering och eventuell golvvärme monteras.',
      },
      {
        question: 'Gjuter ni både för privatpersoner och företag?',
        answer: 'Ja, vi åtar oss betonggjutningar för allt från privata garage och husgrunder till kommersiella byggnader.',
      },
    ],
  },
  {
    slug: 'maskinforare',
    title: 'Maskinförare',
    shortDescription: 'Kompletta entreprenadtjänster och yrkesskickliga maskinförare för anläggning, materialflytt och markberedning.',
    heroText: 'Erfarna maskinförare och moderna maskiner för krävande entreprenaduppdrag.',
    detailedDescription: `Behöver du anlita en erfaren maskinförare eller boka maskintjänster för ditt entreprenadprojekt? GS Bygg Värmland AB erbjuder professionell maskinkörning med hög kapacitet och flexibilitet.

Med bred kompetens inom grävning, planering och materialhantering ser vi till att dina markprojekt flyter på effektivt och enligt tidsplan. Vi arbetar snabbt, säkert och med full hänsyn till omgivningen.`,
    heroImage: '/service-maskinforare.webp',
    image: '/service-maskinforare.webp',
    href: '/tjanster#maskinforare',
    tag: 'Maskinförare',
    badge: 'Kvalitet & Erfarenhet',
    highlights: [
      'Erfarna och certifierade maskinförare',
      'Moderna grävmaskiner och utrustning',
      'Materialhantering och markberedning',
      'Flexibla upplägg per timme eller fast pris',
    ],
    faq: [
      {
        question: 'Arbetar ni på löpande räkning eller fast pris?',
        answer: 'Vi erbjuder både fasta offerter för hela entreprenader och löpande timdebitering för maskintjänster, beroende på vad som passar ditt projekt bäst.',
      },
      {
        question: 'Vilka geografiska områden täcker ni?',
        answer: 'Vi utgår från Värmland och utför uppdrag i hela regionen, inklusive Karlstad, Hammarö, Kil, Forshaga, Kristinehamn och omnejd.',
      },
    ],
  },
];

export default services;

