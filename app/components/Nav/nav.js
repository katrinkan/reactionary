"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import useClickOutside from "../../utils/useClickOutside";
import styles from "./nav.module.css";

const menuList = [
  { text: "Rules", href: "/rules" },
  { text: "Hooks", href: "/hooks" },
  { text: "Custom", href: "/custom" },
];

export default function Nav() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className={styles.nav} ref={ref}>
      <h1>
        <Link href="/rules" className={styles.homeLink}>
          Reactionary
        </Link>
      </h1>
      <div onClick={() => setIsOpen(!isOpen)} className={styles.menuBar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${isOpen ? styles.open : ""} ${styles.menuList}`}>
        {menuList.map((menu, index) => (
          <div key={index}>
            <Link
              href={menu.href}
              className={styles.menuLink}
              onClick={() => setIsOpen(false)}
            >
              {menu.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
