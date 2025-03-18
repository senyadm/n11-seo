'use client';

import { 
  FaGamepad,
  FaTrophy,
  FaGift,
  FaTv,
  FaPlay,
  FaFire,
  FaBoxOpen,
  FaBook,
  FaUsers 
} from 'react-icons/fa';

export default function CategoryMenu() {
  // Список категорий (названия и иконки)
  const categories = [
    { label: 'Παιχνίδια', icon: <FaGamepad /> },
    { label: 'Κορυφαία Παιχνίδια', icon: <FaTrophy /> },
    { label: 'N1 Επέτειος', icon: <FaGift /> },
    { label: 'Live Casino', icon: <FaTv /> },
    { label: "Play'n Go", icon: <FaPlay /> },
    { label: 'Νέα Παιχνίδια', icon: <FaFire /> },
    { label: 'Bonus Buy Παιχνίδια', icon: <FaBoxOpen /> },
    { label: 'Book Slots', icon: <FaBook /> },
    { label: 'Πάροχοι', icon: <FaUsers /> },
  ];

  return (
    <div className="mt-8 bg-brandGray rounded-lg px-4 py-2 overflow-x-auto">
      <ul className="flex space-x-6 items-center ">
        {categories.map((cat) => (
          <li key={cat.label}>
            <a
              href="https://www.n1casino.gr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-1 text-white rounded-md transition-colors hover:bg-white/10"
            >
              {/* Иконка (белая) */}
              <span className="text-lg">{cat.icon}</span>
              {/* Текст (белый, подчёркивается при ховере) */}
              <span className="whitespace-nowrap">
                {cat.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
