"use client";

export default function SupportSection() {
  return (
    <section className="bg-brandDark text-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Заголовок */}
        <h2 className="text-3xl font-bold mb-6">
          Υποστήριξη και εξυπηρέτηση πελατών (N1 Casino)
        </h2>
        <p className="mb-6 text-lg leading-relaxed">
          Η ομάδα εξυπηρέτησης του N1 Casino βρίσκεται στο πλευρό των παικτών
          καθημερινά και 24 ώρες το 24ωρο. Μπορείτε να έρθετε σε επαφή με το
          τμήμα επικοινωνίας με αρκετούς τρόπους ώστε να βρείτε λύσεις σε
          προβλήματα και απαντήσεις σε απορίες. Μπορείτε να χρησιμοποιήσετε τους
          παρακάτω τρόπους επικοινωνίας:
        </p>

        {/* Интерактивные кнопки */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="https://www.n1casino.gr/support"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brandRed hover:bg-brandRed/80 transition-colors px-6 py-3 rounded-md text-white font-semibold"
          >
            Ζωντανή συνομιλία μέσα από την ιστοσελίδα του N1 Casino
          </a>
          <a
            href="https://www.n1casino.gr/support"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brandRed hover:bg-brandRed/80 transition-colors px-6 py-3 rounded-md text-white font-semibold"
          >
            Ηλεκτρονικό μήνυμα στο email support@n1casino.gr
          </a>
          <a
            href="https://www.n1casino.gr/support"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brandRed hover:bg-brandRed/80 transition-colors px-6 py-3 rounded-md text-white font-semibold"
          >
            Αίτημα για τηλεφωνική κλήση από την ομάδα υποστήριξης
          </a>
        </div>

        {/* Вставка изображения */}
        <div className="mb-8">
          <img
            src="/images/support.jpg"
            alt="Υποστήριξη"
            className="mx-auto rounded-md max-w-full h-auto"
          />
        </div>

        {/* Συμπέρασμα */}
        <h3 className="text-3xl font-bold mb-4">Συμπέρασμα</h3>
        <p className="mb-8 text-lg leading-relaxed">
          Το N1 Casino προσφέρει μία εντυπωσιακή πληρότητα σε ό,τι έχει να κάνει
          με το ίδιο το παιχνίδι, αλλά και με την εργονομία του ως ιστοσελίδα.
          Δείχνει να μπορεί να ανταποκριθεί στις απαιτήσεις των παικτών από την
          Ελλάδα, προσφέροντας ένα ασφαλές περιβάλλον παιχνιδιού χάρη στην άδεια
          από την Ελληνική Επιτροπή της. Παράλληλα, συναντάμε πληθώρα από
          επιλογές πληρωμών που είναι δημοφιλείς στους Έλληνες παίκτες.
        </p>

        {/* Γιατί Να Επιλέξετε Ν1 Καζίνο */}
        <h3 className="text-3xl font-bold mb-4">
          Γιατί Να Επιλέξετε Ν1 Καζίνο
        </h3>
        <p className="mb-8 text-lg leading-relaxed">
          Δεν είναι τυχαίο που όλο και περισσότεροι παίκτες επιλέγουν το N1
          Casino. Η πλατφόρμα προσφέρει ένα ασφαλές περιβάλλον παιχνιδιού σε μία
          πολύ εργονομική ιστοσελίδα, ενώ οι συνεργασίες με πολλούς παρόχους
          λογισμικού έχουν οδηγήσει σε μία ευρεία βιβλιοθήκη παιχνιδιών casino.
          Βεβαίως, πολύ αξιόλογη είναι και η λίστα με τα παιχνίδια στο live
          casino, τα οποία μπορείτε να απολαύσετε και από την εφαρμογή για
          κινητά. Παράλληλα, η ομάδα εξυπηρέτησης πελατών είναι πάντα στο πλευρό
          σας.
        </p>
      </div>
    </section>
  );
}
