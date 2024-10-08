import Link from "next/link";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import AccordionMenu from "./AccordionMenu";

// Define the type for each navigation link
interface NavLink {
  id: number;
  title: string;
  link?: string; // Optional because not all nav links will have a direct link
  items: { label: string; href: string }[]; // Array of items for dropdowns
}

// Define the props type for the HeaderLinks component
interface HeaderLinksProps {
  showSidebar: boolean;
}

const HeaderLinks: React.FC<HeaderLinksProps> = ({ showSidebar }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };
  const navLinks: NavLink[] = [
    {
      id: 1,
      title: "Services",
      items: [
        { label: "CTV Monetization", href: "/ctv-monetization" },
        { label: "OTT Monetization", href: "/ott-monetization" },
        { label: "Website Monetization", href: "/website-monetization" },
        { label: "App Monetization", href: "/app-monetization" },
        { label: "Game Monetization", href: "/game-monetization" },
        { label: "DOOH Monetization", href: "/dooh-monetization" },
      ],
    },
    {
      id: 2,
      title: "Solutions",
      items: [
        { label: "Sports Monetization", href: "/sports-channel-monetization" },
        { label: "News Monetization", href: "/news-channel-monetization" },
        { label: "Entertainment Monetization", href: "/entertainment-channel-monetization" },
      ],
    },
    {
      id: 3,
      title: "Resources",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Career", href: "/career" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Advertiser Policy", href: "/advertiser-policy" },
        { label: "Publisher Policy", href: "/publisher-policy" },
        { label: "Demand Policy", href: "/demand-policy" },
        { label: "Supply Policy", href: "/supply-policy" },
        {
          label: "Marketplace Quality Policy",
          href: "/marketplace-quality-policy",
        },
        { label: "Brands Guide", href: "/brands-guide" },
        { label: "Terms Of Service", href: "/terms-of-service" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      id: 4,
      title: "Contact",
      link: "/contact",
      items: [],
    },
  ];

  return (
    <>
      {navLinks.map((navLink) => {
        if (navLink.items.length > 0) {
          return showSidebar ? (
            <AccordionMenu
              key={navLink.id}
              buttonLabel={navLink.title}
              items={navLink.items}
              isOpen={openAccordion === navLink.title}
              toggleAccordion={toggleAccordion}
            />
          ) : (
            <DropdownMenu
              key={navLink.id}
              buttonLabel={navLink.title}
              items={navLink.items}
            />
          );
        } else {
          return (
            navLink.link && (
              <Link
                className={`nav-link py-4 ${
                  showSidebar ? "px-4 md:px-8" : "p-4"
                } h-full`}
                key={navLink.id}
                href={navLink.link}
              >
                {navLink.title}
              </Link>
            )
          );
        }
      })}
    </>
  );
};

export default HeaderLinks;
