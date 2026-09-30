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
      url: '/service-gravning.webp',
      alt: 'Grävning och schaktning i Västerbotten',
    },
    smahusbyggnation: {
      url: '/service-byggnation.webp',
      alt: 'Mark och anläggningsarbeten i Västerbotten',
    },
    renovering: {
      url: '/service-betong.webp',
      alt: 'Betong och grundläggning i Västerbotten',
    },
    ombyggnation: {
      url: '/service-markarbete.webp',
      alt: 'Maskintjänster och entreprenad i Västerbotten',
    },
    totalentreprenad: {
      url: '/service-maskinforare.webp',
      alt: 'Maskinförare och transport i Västerbotten',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'Finnträsk Entreprenad anläggande av grillplats och utemiljö',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'Finnträsk Entreprenad schaktning och tomtplanering med grävmaskin',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'Finnträsk Entreprenad säker trädfällning från skylift',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'Finnträsk Entreprenad dikesgrävning och markberedning',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'Finnträsk Entreprenad finplanering och tomtarbete',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'Finnträsk Entreprenad ledningsarbete och schakt',
    },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'Finnträsk Entreprenad projekt',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'Finnträsk Entreprenad arbetsplats Västerbotten',
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
        url: '/gallery/gallery-1.jpg',
        alt: 'Anläggande av grillplats och utemiljö i Västerbotten',
      },
      title: 'Grillplats och utemiljö',
      category: 'Anläggning och utemiljö',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Schaktning och tomtplanering i Västerbotten',
      },
      title: 'Schakt och tomtplanering',
      category: 'Mark och schakt',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Säker trädfällning med skylift i Västerbotten',
      },
      title: 'Trädfällning med Skylift',
      category: 'Trädfällning',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Dikesgrävning och vägunderhåll i Västerbotten',
      },
      title: 'Dikesgrävning och väg',
      category: 'Diken och infrastruktur',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Finplanering och tomtarbete i Västerbotten',
      },
      title: 'Finplanering och markberedning',
      category: 'Tomtplanering',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Ledningsgrävning och schakt i Västerbotten',
      },
      title: 'Ledningsgrävning och schakt',
      category: 'Ledningsarbete',
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
        url: '/service-dranering.webp',
        alt: 'Dränering och ledningsarbete Västerbotten',
      },
      section1: {
        url: '/service-dranering.webp',
        alt: 'Fuktskydd och dräneringsarbete',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Dräneringsarbete Västerbotten',
      },
    },
    betong: {
      hero: {
        url: '/service-betong.webp',
        alt: 'Gjutning av betongplatta Västerbotten',
      },
      section1: {
        url: '/service-betong.webp',
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
