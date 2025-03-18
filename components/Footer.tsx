"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brandGray text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Логотип слева */}
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
        {/* Кнопки справа */}
        <div className="flex space-x-4">
          <Link
            href="/faq"
            className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-brandDark transition-colors font-semibold"
          >
            FAQ
          </Link>
          <a
            href="https://www.n1casino.gr/support"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-brandDark transition-colors font-semibold"
          >
            Υποστήριξη
          </a>
          <a
            href="https://www.n1casino.gr/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-brandDark transition-colors font-semibold"
          >
            Παίξε
          </a>
        </div>
      </div>
    </footer>
  );
}
