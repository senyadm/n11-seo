/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      // Добавьте другие пути при необходимости
    ],
    theme: {
      extend: {
        colors: {
          brandDark: "#1B1B24", // Цвет, похожий на скриншотэ
          brandGray: "#1F1F1F", // дополнительный серый для подложек
          brandRed: "#E50914",  // контрастный красный (пример)
        },
      },
    },
    plugins: [],
  };
  