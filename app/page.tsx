import CategoryMenu from "@/components/CategoryMenu";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import OffersSection from "@/components/OffersSection";
import RegistrationInfo from "@/components/RegistrationInfo";
import ResponsibleGamingSection from "@/components/ResponsibleGamingSection";
import SeoSection from "@/components/SeoSection";
import SupportSection from "@/components/SupportSection";

// app/page.tsx
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
       <Hero />
       <CategoryMenu />
       <SeoSection />
       <RegistrationInfo />
       <OffersSection />
       <InfoSection />
       <ResponsibleGamingSection />
       <SupportSection />
    </main>
  )
}
