import { contactData } from "./contactData";

export const footerData = {
  logo: "Hoang Le",
  tagline: "Creating digital experiences that inspire.",
  copyright: `© ${new Date().getFullYear()} Hoang Le. All rights reserved.`,
  newsletterEmail: contactData.email,
  socialLinks: [
    {
      id: 1,
      name: "GitHub",
      icon: "GitHub",
      url: "https://github.com/",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: "LinkedIn",
      url: "https://linkedin.com/",
    },
    {
      id: 3,
      name: "Twitter",
      icon: "Twitter",
      url: "https://twitter.com/",
    },
    {
      id: 4,
      name: "Instagram",
      icon: "Instagram",
      url: "https://instagram.com/",
    },
  ],
  quickLinks: [
    {
      id: 1,
      name: "Home",
      url: "#home",
    },
    {
      id: 2,
      name: "About",
      url: "#about",
    },
    {
      id: 3,
      name: "Services",
      url: "#services",
    },
    {
      id: 4,
      name: "Portfolio",
      url: "#portfolio",
    },
    {
      id: 5,
      name: "Contact",
      url: "#contact",
    },
  ],
};
