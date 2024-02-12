"use client";

import styles from "@/components/main-header/nav-link.module.css";
import { NavType } from "@/types/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: NavType) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </Link>
  );
}
