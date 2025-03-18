"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hook.jpg')" }}
    >
      {/* Полупрозрачная подложка поверх фонового изображения */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Контейнер с текстом, центрированным по оси Y */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Η διασκέδαση σε άλλη διάσταση!
        </h1>
        <p className="text-lg text-white max-w-xl mb-6 leading-relaxed">
          N1 Casino: Είμαστε εδώ για να περάσεις καλά! Δοκίμασε μια «cool»
          εμπειρία που θα σε ταξιδέψει σε άλλη διάσταση.
        </p>
        <a
          href="https://www.n1casino.gr/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brandRed text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity w-fit inline-block"
        >
          Περισσότερα
        </a>

        <p className="mt-4 text-sm text-white opacity-80">
          Όροι και προϋποθέσεις
        </p>
      </div>
    </section>
  );
}
