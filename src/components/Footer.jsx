import React from "react";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  const links = [
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://github.com", icon: <FaGithub /> },
  ];

  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row ">
        <p className="text-center text-sm md:text-left">
          &copy; {new Date().getFullYear()} Zentry. All rights reserved.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          {links.map((link) => (
            <a
              key={link.href}
              href="{link.href}"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors hover:text-white ease-in-out duration-500"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className=" text-sm text-center hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
