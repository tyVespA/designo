import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/favicon-32x32.png";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </header>
  );
}
