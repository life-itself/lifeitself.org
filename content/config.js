const userConfig = {
  title: "Life Itself",
  author: "Life Itself",
  authorUrl: "https://lifeitself.org",
  authorLogo: "/assets/site/life-itself-logo.svg",
  // Google analytics key e.g. G-XXXX
  analytics: "G-5YH3R887BV",
  navbarTitle: {
    logo: "/assets/site/life-itself-logo.svg",
    text: "Life Itself",
  },
  navLinks: [
    { href: "/about", name: "About"},
    { href: "/people", name: "People"},
    { href: "/residencies", name: "Residencies"},
    { href: "/initiatives", name: "Initiatives"},
    { href: "https://studio.lifeitself.org", name: "Studio"},
    { href: "https://news.lifeitself.org/", name: "Blog"},
    { href: "https://news.lifeitself.org/s/newsletter", name: "Newsletter"},
    { href: "https://news.lifeitself.org/s/lifeitself-podcast", name: "Podcast" },
    { href: "/contact", name: "Contact"}
  ],
  socialLinks: {
    twitter: "https://twitter.com/forlifeitself",
    instagram: "https://www.instagram.com/forlifeitself/",
    whatsapp: "https://chat.whatsapp.com/JNJCTZugNQn1fq89xbHtfA",
  },
  theme: { default: "" },
  search: {
    provider: "kbar"
  },
  nextSeo: {
    title: "Life Itself",
    description: "We’re committed to practical action for a radically wiser, weller world. We create hubs, start businesses, do research and engage in activism to pioneer a wiser culture.",
    openGraph: {
      images: [
        {
          url: "https://lifeitself.org/assets/site/homepage-social-preview.jpg",
          alt: "Life Itself",
          width: 1200,
          height: 675,
          type: "image/jpg",
        },
      ],
    },
    twitter: {
      handle: "@forlifeitself",
      site: "lifeitself.org",
      cardType: "summary_large_image",
    },
  },
};

export default userConfig;
