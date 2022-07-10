import Frojd from "../Assets/Images/frojd-logo.svg";
import Dazy from "../Assets/Images/dazy-logo.png";
import MakingWaves from "../Assets/Images/mw-logo.png";

const Footer = {
  items: [
    {
      title: "Where' I'm At",
      logos: [
        {
          href: "https://www.frojd.se",
          image: Frojd,
          alt: "Fröjd",
          isLarge: true,
        },
      ],
    },
    {
      title: "Where' I've been",
      logos: [
        {
          href: "https://www.dazy.se",
          image: Dazy,
          alt: "Dazy",
          isLarge: false,
        },
        {
          href: "https://www.noaignite.se",
          image: MakingWaves,
          alt: "Making Waves",
          isLarge: false,
        },
      ],
    },
  ],
  blipBlop: {
    text: "Blip blop – ",
    href: "https://github.com/vctrklndr",
    linkText: "github.com/vctrklndr",
    linkedin: {
      href: 'https://www.linkedin.com/in/victor-kilander-788081162/',
      linkText: 'Linkedin',
    }
  },
};

export default Footer;
