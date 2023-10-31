"use client";
import Link from "next/link";
import { useState } from "react";

const menuList = [
  { text: "Rules", href: "/rules" },
  { text: "Hooks", href: "/hooks" },
  { text: "Custom", href: "/custom" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <h1>
        <Link href="/rules" className="homeLink">
          Reactionary
        </Link>
      </h1>
      <div onClick={() => setIsOpen(!isOpen)} className="menuBar">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${isOpen ? "open" : ""} menuList`}>
        {menuList.map((menu, index) => (
          <div key={index}>
            <Link href={menu.href} className="menuLink">
              {menu.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
