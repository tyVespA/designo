"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import designo_dark from "../../../public/designo-dark.svg";
import icon_hamburger from "../../../public/shared/mobile/icon-hamburger.svg";
import icon_close from "../../../public/shared/mobile/icon-close.svg";

// TODO:
// add dark backdrop when menu open
// lock scrolling when menu open

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className={`${styles.header}`}>
      <Logo src={designo_dark} />
      <nav className={openMenu ? styles.slided_in : styles.slided_out}>
        <ul>
          <li onClick={() => setOpenMenu(false)}>
            <Link href="/about">Chi siamo</Link>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <Link href="/about">Dove siamo</Link>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <Link href="/about">Contatti</Link>
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
