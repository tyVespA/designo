"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import designo_dark from "../../../public/designo-dark.svg";
import icon_hamburger from "../../../public/shared/mobile/icon-hamburger.svg";
import icon_close from "../../../public/shared/mobile/icon-close.svg";

// TODO:
// add dark backdrop when menu open

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [openMenu]);

  return (
    <header className={`${styles.header}`}>
      <div
        className={`${styles.backdrop} ${
          openMenu ? styles.backdrop_slidedIn : styles.backdrop_slidedOut
        }`}
      ></div>
      <Logo src={designo_dark} />
      <nav className={openMenu ? styles.slided_in : styles.slided_out}>
        <ul>
          <li onClick={() => setOpenMenu(false)}>
            <Link href="/chi-siamo">Chi siamo</Link>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <Link href="/dove-siamo">Dove siamo</Link>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <Link href="/contatti">Contatti</Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          setOpenMenu(true), console.log(openMenu);
        }}
        className={`${styles.icon_hamburger} ${
          openMenu ? styles.display_none : styles.display_block
        }`}
      >
        <Image src={icon_hamburger} alt="icona apri menu" />
      </button>
      <button
        onClick={() => setOpenMenu(false)}
        className={`${styles.icon_close} ${
          openMenu ? styles.display_block : styles.display_none
        }`}
      >
        <Image src={icon_close} alt="icona chiudi menu" />
      </button>
    </header>
  );
}
