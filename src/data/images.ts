/**
 * CENTRALIZED IMAGE CONFIGURATION
 *
 * All images used across the template are defined here.
 * To customize for a new company: replace the URLs below.
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
    alt: 'GS Bygg Värmland AB',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'GS Bygg Värmland AB',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'GS Bygg Värmland AB byggnation, snickeri och entreprenad i Värmland',
    },
  },

  services: {
    nybyggnation: {
      url: '/service-gravning.webp',
      alt: 'Grävning och markarbete i Värmland',
    },
    smahusbyggnation: {
      url: '/service-byggnation.webp',
      alt: 'Byggnation och snickeri i Värmland',
    },
    renovering: {
      url: '/service-betong.webp',
      alt: 'Betong och gjutning i Värmland',
    },
    ombyggnation: {
      url: '/service-markarbete.webp',
      alt: 'Maskintjänster och entreprenad i Värmland',
    },
    totalentreprenad: {
      url: '/service-maskinforare.webp',
      alt: 'Maskinförare och entreprenad i Värmland',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'GS Bygg Värmland AB altanbygge med integrerad däckbelysning',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'GS Bygg Värmland AB skräddarsytt trädäck och utemiljö i Värmland',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'GS Bygg Värmland AB färdigställd uteplats med loungeyta',
    },
    {
      url: '/gallery/gallery-4.webp',
      alt: 'GS Bygg Värmland AB nybyggnation och stomresning i Ulvsby Värmland',
    },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'GS Bygg Värmland AB projekt',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'GS Bygg Värmland AB arbetsplats Värmland',
    },
  },

  about: {
    hero: {
      url: '/about.webp',
      alt: 'GS Bygg Värmland AB servicebil och byggprojekt i Värmland',
    },
    teamMember: {
      url: '/logo.png',
      alt: 'GS Bygg Värmland AB',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant hantverk och entreprenad i detalj',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från idé och planering till färdigt resultat',
  },

  portfolio: [
    {
      image: {
        url: '/gallery/gallery-1.jpg',
        alt: 'Altanbygge med integrerad däckbelysning i Värmland',
      },
      title: 'Altan & Däckbelysning',
      category: 'Altan & Uterum',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Skräddarsytt trädäck villa i Värmland',
      },
      title: 'Skräddarsytt Trädäck',
      category: 'Snickeri & Altan',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Färdigställd uteplats och loungeyta i Värmland',
      },
      title: 'Uteplats & Loungedel',
      category: 'Träkonstruktion',
    },
    {
      image: {
        url: '/gallery/gallery-4.webp',
        alt: 'Nybyggnation och stomresning i Ulvsby Värmland',
      },
      title: 'Nybyggnation & Stomresning',
      category: 'Byggnation & Stomme',
    },
  ],

  servicePages: {
    markarbete: {
      hero: {
        url: '/service-markarbete.webp',
        alt: 'Grävning, schaktning och markarbete Värmland',
      },
      section1: {
        url: '/service-markarbete.webp',
        alt: 'Förberedelse för tomtplanering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Arbetsplats Värmland',
      },
    },
    dranering: {
      hero: {
        url: '/service-dranering.webp',
        alt: 'Dränering och ledningsarbete Värmland',
      },
      section1: {
        url: '/service-dranering.webp',
        alt: 'Fuktskydd och dräneringsarbete',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Dräneringsarbete Värmland',
      },
    },
    betong: {
      hero: {
        url: '/service-betong.webp',
        alt: 'Gjutning av betongplatta Värmland',
      },
      section1: {
        url: '/service-betong.webp',
        alt: 'Armering och betonggjutning',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Färdig betonggrund Värmland',
      },
    },
  },
};

export default images;


