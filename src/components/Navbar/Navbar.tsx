"use client";

import s from "@/styles/Navbar/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { TLinkNav, linksNav } from "./linksNav";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={s.HeaderNavbar}>
      <nav className={`container`}>
        <div className={`smallContainer ${s.Navbar}`}>
          <Link href="/">
            <img src="/assets/img/RebecaLogo.png" alt="Rebeca Logo" />
          </Link>
          <div
            className={`${s.NavbarOptions} ${
              navOpen ? s.NavbarOptionsMobileOpen : ""
            }`}
          >
            {linksNav?.map((obj: TLinkNav) => {
              return (
                <Link
                  key={obj.text}
                  href={obj.url}
                  className="font-text"
                  onClick={() => setNavOpen(false)}
                >
                  {obj.text}
                </Link>
              );
            })}
          </div>
          <button className={`${s.navBtnBurger} ${navOpen ? s.navBtnBurgerOpen : ""}`} onClick={() => setNavOpen(!navOpen)}>
            <div className={s.navBtnLine}></div>
            <div className={s.navBtnLine}></div>
            <div className={s.navBtnLine}></div>
          </button>
        </div>
      </nav>
    </header>
  );
}
