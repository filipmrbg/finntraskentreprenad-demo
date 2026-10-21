/**
 * CENTRALIZED IMAGE CONFIGURATION
 *
 * All images used across the template are defined here.
 * Configured for Finnträsk Entreprenad.
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  hero: {
    background: ImageSlot;
  };
  services: {
    nybyggnation?: ImageSlot;
    smahusbyggnation?: ImageSlot;
    renovering?: ImageSlot;
    ombyggnation?: ImageSlot;
    totalentreprenad?: ImageSlot;
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
  servicePages: {
    markarbete: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    dranering: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    betong: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
  };
}

const images: SiteImages = {
  logo: {
    url: '/logo.png',
    alt: 'Finnträsk Entreprenad',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'Finnträsk Entreprenad',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'Finnträsk Entreprenad mark och schaktarbeten i Västerbotten',
    },
  },

  services: {
    nybyggnation: {
      url: '/service-markarbeten.jpg',
      alt: 'Finnträsk Entreprenad grävmaskin utför markarbete och schakt',
    },
    smahusbyggnation: {
      url: '/service-markarbeten.jpg',
      alt: 'Mark och anläggningsarbeten i Västerbotten',
    },
    renovering: {
      url: '/service-grundlaggning.jpg',
      alt: 'Gjuten betongplatta och grundläggning utförd av Finnträsk Entreprenad',
    },
    ombyggnation: {
      url: '/service-markarbete.webp',
      alt: 'Maskintjänster och entreprenad i Västerbotten',
    },
    totalentreprenad: {
      url: '/service-skog.jpg',
      alt: 'Skogsentreprenad och skogsvägar i Västerbotten',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-12.jpg',
      alt: 'Betonggrund och rundad markstensläggning med panoramautsikt mot vatten och berg',
    },
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'Hitachi bandgrävare i djup schaktning och dikesarbete i Västerbotten',
    },
    {
      url: '/gallery/gallery-13.jpg',
      alt: 'Gjuten betongplatta, markstensläggning och Finnträsk Entreprenad servicefordon i solsken',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'Installation och nedgrävning av slamavskiljare och enskilt avlopp',
    },
    {
      url: '/gallery/gallery-8.jpg',
      alt: 'Slutfinish och finplanering av tomt och slänt mot sjöutsikt',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'Volvo lastbil och maskintransport med schaktutrustning i bergtäkt',
    },
    {
      url: '/gallery/gallery-11.jpg',
      alt: 'Gjuten betongplatta och plattsättning med rundad kant mot tomtmark',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'Finnträsk Entreprenad grävmaskin utför grund- och tomtgrävning vid bostadshus',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'Anläggning och grusning av väg och infart med bärlager vid fastighet',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'Hitachi grävmaskin förbereder mark och sänker ner tank för avloppssystem',
    },
    {
      url: '/gallery/gallery-9.jpg',
      alt: 'Professionell stensättning med rundad kant och marksten vid husgrund',
    },
    {
      url: '/gallery/gallery-7.jpg',
      alt: 'Förarperspektiv från grävmaskin vid markberedning och dikesgrävning över fält',
    },
    {
      url: '/gallery/gallery-10.jpg',
      alt: 'Gjuten betongplatta och färdigställt markunderlag för nybyggnation',
    },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'Finnträsk Entreprenad projekt',
    },
    midSection: {
      url: '/cta-mid-section.webp',
      alt: 'Finnträsk Entreprenad verksamhetsområde i Skellefteå och Västerbotten',
    },
  },

  about: {
    hero: {
      url: '/logo.png',
      alt: 'Finnträsk Entreprenad',
    },
    teamMember: {
      url: '/logo.png',
      alt: 'Finnträsk Entreprenad',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant entreprenadarbete och maskintjänster med hög precision',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från planering till färdigt markarbete',
  },

  portfolio: [
    {
      image: {
        url: '/gallery/gallery-12.jpg',
        alt: 'Betonggrund och rundad markstensläggning med panoramautsikt mot vatten och berg',
      },
      title: 'Betonggrund och marksten vid sjötomt',
      category: 'Plattsättning och grund',
    },
    {
      image: {
        url: '/gallery/gallery-1.jpg',
        alt: 'Hitachi bandgrävare i djup schaktning och dikesarbete i Västerbotten',
      },
      title: 'Djup schaktning och dikesgrävning',
      category: 'Mark och schakt',
    },
    {
      image: {
        url: '/gallery/gallery-13.jpg',
        alt: 'Gjuten betongplatta, markstensläggning och Finnträsk Entreprenad servicefordon i solsken',
      },
      title: 'Färdigställd platta och stenläggning',
      category: 'Grundläggning & sten',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Installation och nedgrävning av slamavskiljare och enskilt avlopp',
      },
      title: 'Installation av enskilt avlopp',
      category: 'Enskilt avlopp',
    },
    {
      image: {
        url: '/gallery/gallery-8.jpg',
        alt: 'Slutfinish och finplanering av tomt och slänt mot sjöutsikt',
      },
      title: 'Finplanering och tomtutjämning vid vatten',
      category: 'Tomtplanering',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Volvo lastbil och maskintransport med schaktutrustning i bergtäkt',
      },
      title: 'Transport och materialhantering',
      category: 'Transport och åkeri',
    },
    {
      image: {
        url: '/gallery/gallery-11.jpg',
        alt: 'Gjuten betongplatta och plattsättning med rundad kant mot tomtmark',
      },
      title: 'Plattsättning och gjuten grundplatta',
      category: 'Plattsättning och grund',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Finnträsk Entreprenad grävmaskin utför grund- och tomtgrävning vid bostadshus',
      },
      title: 'Tomtgrävning och schakt vid villa',
      category: 'Tomt och grund',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Anläggning och grusning av väg och infart med bärlager vid fastighet',
      },
      title: 'Väg- och infartsanläggning',
      category: 'Väg och infart',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Hitachi grävmaskin förbereder mark och sänker ner tank för avloppssystem',
      },
      title: 'Avloppstank och markförberedelse',
      category: 'Enskilt avlopp',
    },
    {
      image: {
        url: '/gallery/gallery-9.jpg',
        alt: 'Professionell stensättning med rundad kant och marksten vid husgrund',
      },
      title: 'Stensättning och marksten vid grund',
      category: 'Stensättning och mark',
    },
    {
      image: {
        url: '/gallery/gallery-7.jpg',
        alt: 'Förarperspektiv från grävmaskin vid markberedning och dikesgrävning över fält',
      },
      title: 'Markberedning från förarhytten',
      category: 'Maskinarbeten',
    },
    {
      image: {
        url: '/gallery/gallery-10.jpg',
        alt: 'Gjuten betongplatta och färdigställt markunderlag för nybyggnation',
      },
      title: 'Gjuten platta och grundläggning',
      category: 'Grundläggning',
    },
  ],

  servicePages: {
    markarbete: {
      hero: {
        url: '/service-markarbete.webp',
        alt: 'Grävning, schaktning och markarbete Västerbotten',
      },
      section1: {
        url: '/service-markarbete.webp',
        alt: 'Förberedelse för tomtplanering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Arbetsplats Västerbotten',
      },
    },
    dranering: {
      hero: {
        url: '/service-markarbeten.jpg',
        alt: 'Dränering och ledningsarbete Västerbotten',
      },
      section1: {
        url: '/service-markarbeten.jpg',
        alt: 'Fuktskydd och dräneringsarbete',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Dräneringsarbete Västerbotten',
      },
    },
    betong: {
      hero: {
        url: '/service-grundlaggning.jpg',
        alt: 'Gjutning av betongplatta Västerbotten',
      },
      section1: {
        url: '/service-grundlaggning.jpg',
        alt: 'Armering och betonggjutning',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Färdig betonggrund Västerbotten',
      },
    },
  },
};

export default images;
