// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer' // <-- Не забудьте создать и экспортировать Footer

// Παράδειγμα μεταδεδομένων
export const metadata: Metadata = {
  title: 'N1 Casino — καθρέφτης στην Ελλάδα',
  description: 'Ανασκόπηση του ιστότοπου Casino N1 στην Ελλάδα.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el">
      {/* Делаем flex-контейнер высотой во всё окно */}
      <body className="flex flex-col min-h-screen bg-brandDark text-white">
        <Navbar />
        {/* Основной контент растягивается, «выталкивая» футер вниз, если контента мало */}
        <main className="flex-grow">
          {children}
        </main>
        {/* Footer «прилипает» к нижней части экрана */}
        <Footer />
      </body>
    </html>
  )
}
