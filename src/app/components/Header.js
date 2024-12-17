import Link from "next/link";
import styles from "./Header.module.css";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className={`${styles.header} max-width`}>
      <Logo />
      <ul>
        <li>
          <Link href="/about">Chi siamo</Link>
        </li>
        <li>
          <Link href="/about">Dove siamo</Link>
        </li>
        <li>
          <Link href="/about">Contatti</Link>
        </li>
      </ul>
    </header>
  );
}
