'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-brandGray text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Логотип */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={96}
              height={96}
              className="rounded-md"
            />
          </Link>
        </div>

        {/* Desktop меню (видно на экранах >= sm) */}
        <ul className="hidden sm:flex items-center space-x-6">
          <li>
            <Link href="/faq">
              <span className="hover:text-brandRed transition-colors">FAQ</span>
            </Link>
          </li>
          <li>
            <a
              href="https://www.n1casino.gr/games/livegames"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brandRed transition-colors"
            >
              Live Casino
            </a>
          </li>
          <li>
            <a
              href="https://www.n1casino.gr/promotions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brandRed transition-colors"
            >
              Προσφορές
            </a>
          </li>
        </ul>

        {/* Desktop кнопки (видно на экранах >= sm) */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="https://www.n1casino.gr/?sign-in=modal"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-white px-4 py-2 border border-brandRed rounded-md hover:bg-brandRed transition-colors inline-block"
          >
            Είσοδος
          </a>
          <a
            href="https://www.n1casino.gr/?sign-up=modal"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brandRed text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity inline-block"
          >
            Εγγραφή
          </a>
        </div>

        {/* Mobile меню toggle (видно только на мобильных) */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {menuOpen && (
  <div className="sm:hidden bg-brandGray px-4 py-3">
    <ul className="flex flex-col items-center space-y-4">
      {/* FAQ */}
      <li>
        <Link href="/faq">
          <span className="hover:text-brandRed transition-colors">
            FAQ
          </span>
        </Link>
      </li>
      {/* Live Casino */}
      <li>
        <a
          href="https://www.n1casino.gr/games/livegames"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brandRed transition-colors"
        >
          Live Casino
        </a>
      </li>
      {/* Προσφορές */}
      <li>
        <a
          href="https://www.n1casino.gr/promotions"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brandRed transition-colors"
        >
          Προσφορές
        </a>
      </li>
      {/* Είσοδος */}
      <li>
        <a
          href="https://www.n1casino.gr/?sign-in=modal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-transparent text-white px-3 py-1 text-sm border border-brandRed rounded-md hover:bg-brandRed transition-colors"
        >
          Είσοδος
        </a>
      </li>
      {/* Εγγραφή */}
      <li>
        <a
          href="https://www.n1casino.gr/?sign-up=modal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brandRed text-white px-3 py-1 text-sm rounded-md hover:opacity-90 transition-opacity"
        >
          Εγγραφή
        </a>
      </li>
    </ul>
  </div>
)}

    </nav>
  );
}
