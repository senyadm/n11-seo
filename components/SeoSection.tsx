'use client';

import Image from 'next/image';

export default function SeoSection() {
  return (
    <section className="py-12 bg-brandDark text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Левая колонка – SEO текст */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">
            N1 Casino Online: Η κορυφαία επιλογή στην Ελλάδα
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            Το N1 Casino είναι ένα από τα καζίνο που αδειοδοτήθηκαν πρόσφατα από την Ελληνική Επιτροπή Εποπτείας και Ελέγχου Παιγνίων. Η φυσική διεύθυνση του καζίνο είναι 206 Wisely House, Old Bakery Street, Valletta VLT1451, Malta, γεγονός που ενισχύει την αξιοπιστία και την καθιερωμένη παρουσία του στη Μάλτα. Πρόκειται για μία απολύτως νόμιμη εταιρεία τυχερών παιχνιδιών, που έχει έναν εντυπωσιακό αριθμό από 4.000+ φρουτάκια, πολλά επιτραπέζια παιχνίδια, καθώς και επιλογές live καζίνο. Επιπλέον, προσφέρει μια μεγάλη ποικιλία από παιχνίδια καζίνο, καλύπτοντας όλες τις προτιμήσεις των παικτών.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Στη συνέχεια θα αναλύσουμε τα βασικά χαρακτηριστικά του N1 Casino και τις υπηρεσίες που μπορείτε να αξιοποιήσετε για να απολαύσετε το παιχνίδι σας.
          </p>
          <h3 className="text-2xl font-bold mb-3">Πλεονεκτήματα του N1 Casino</h3>
          <p className="mb-4 text-lg leading-relaxed">
            Το διαδικτυακό καζίνο Ν1 Casino έχει καταφέρει να ξεχωρίσει χάρη σε σημαντικά πλεονεκτήματα, που το καθιστούν μία από τις πιο ανταγωνιστικές επιλογές για τυχερά παιχνίδια στην Ελλάδα. Το N1 Greece λειτουργεί υπό άδεια από την ελληνική εποπτική αρχή, την ΕΕΕΠ, και έχει προσαρμόσει τις υπηρεσίες του, συμπεριλαμβανομένων ποικιλίας παιχνιδιών και επιλογών live καζίνο, ειδικά για Έλληνες παίκτες. Συγκεκριμένα, ξεχωρίζουμε τα εξής:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Συνεργασία με πολλούς έγκριτους παρόχους λογισμικού</li>
            <li>Αδειοδότηση από την ελληνική εποπτική αρχή</li>
            <li>24ωρη εξυπηρέτηση πελατών</li>
            <li>Μπόνους σε καθημερινή βάση</li>
          </ul>
        </div>
        {/* Правая колонка – картинка */}
        <div className="md:w-1/3 flex justify-center">
          <Image
            src="/images/seo.png"
            alt="SEO Image"
            width={350}
            height={400}
            sizes="100vw"
            className="rounded-lg max-w-full h-[700px]"
          />
        </div>
      </div>
    </section>
  );
}
