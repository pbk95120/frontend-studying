import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styles from "@/components/main-header/main-header.module.css";
import NavLink from "@/components/main-header/nav-link";
import MainHeaderBackground from "@/components/main-header/main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="Logo File" priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
