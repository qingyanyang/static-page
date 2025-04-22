"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/services", label: "SERVICES" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="sticky w-full text-white py-3 text-base bg-gradient-to-r from-[#d9d9d9] to-[#ffa4a1]">
        <p className="container mx-auto text-right font-source font-light">
          For expert interior lining installations, call 03 9894 4488
        </p>
      </div>
      <div
        className={`container mx-autoflex flex py-[24px] justify-between items-center transition-all duration-300 ${
          scrolled ? "h-[130px]" : "h-[170px]"
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/C80706-1920w.png"
            alt="Aflux Interior Linings"
            width={scrolled ? 90 : 150}
            height={scrolled ? 20 : 60}
            className="transition-all duration-300"
          />
        </Link>
        <nav
          className={`flex gap-8 transition-all duration-300 transform font-muli text-[#242424] ${
            scrolled ? "translate-y-[0px]" : "-translate-y-[40px]"
          }`}
        >
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`relative inline-block uppercase font-light transition-colors duration-300
    before:absolute before:left-0 before:w-full before:h-[2px] before:transition-transform before:duration-300 before:ease-in-out
    after:absolute after:left-0 after:w-full after:h-[2px] after:transition-transform after:duration-300 after:ease-in-out
    before:top-0 after:bottom-0
    ${
      isActive
        ? "text-[#a1a1a1] before:-translate-y-2 before:bg-[#a2a2a2] after:translate-y-2 after:bg-[#a2a2a2]"
        : "text-black before:-translate-y-3 after:translate-y-3 hover:text-[#a1a1a1] hover:before:-translate-y-2 hover:before:bg-[#a2a2a2] hover:after:translate-y-2 hover:after:bg-[#a2a2a2]"
    }
  `}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
