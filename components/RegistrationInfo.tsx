"use client";

import Image from "next/image";

export default function RegistrationInfo() {
  return (
    <section className="bg-brandDark text-white py-12 flex flex-col items-center">
      {/* Контейнер для текста (по центру) */}
      <div className="max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Πώς να εγγραφείτε στο N1 Casino live
        </h2>
        <p className="mb-4 text-lg leading-relaxed">
          Εγγραφή στο N1 Casino μπορεί να γίνει εύκολα και γρήγορα, ώστε μέσα σε
          ελάχιστο χρόνο να μπορείτε να ξεκινήσετε το παιχνίδι στο online
          casino. Για να κάνετε εγγραφή και να γίνετε μέλος της πλατφόρμας,
          προχωρήστε με τα εξής βήματα:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4 text-left inline-block">
          <li>
            Ανοίξτε την ιστοσελίδα του N1 Casino και πατήστε στο κόκκινο κουμπί
            για τη διαδικασία εγγραφής.
          </li>
          <li>
            Ξεκινήστε συμπληρώνοντας το e-mail σας ορίζοντας έναν κωδικό
            πρόσβασης.
          </li>
          <li>
            Επιβεβαιώστε ότι είστε άνω των 21 ετών, αλλά και ότι συμφωνείτε με
            τους όρους και τις προϋποθέσεις της σελίδας. Ενημερώστε τη σελίδα αν
            θέλετε να λαμβάνετε προωθητικές ενέργειες.
          </li>
          <li>
            Καταχωρήστε ονοματεπώνυμο, ημερομηνία γέννησης, φύλο και αριθμό
            ταυτότητας στη σχετική φόρμα.
          </li>
          <li>
            Ενημερώστε για τη διεύθυνση κατοικίας σας και τον τηλεφωνικό σας
            αριθμό.
          </li>
          <li>
            Πατήστε στο κουμπί για να κάνετε εγγραφή και να μπορεί να γίνει
            είσοδος στον λογαριασμό.
          </li>
        </ul>

        <h3 className="text-2xl font-bold mb-4">
          Δημοφιλή Παιχνίδια & Πάροχοι
        </h3>
        <p className="mb-4 text-lg leading-relaxed">
          Το N1 Casino έχει καταφέρει να χτίσει μία αξιόλογη βιβλιοθήκη με
          παιχνίδια καζίνο, αφού περιλαμβάνει περισσότερες από 4.000 επιλογές,
          που μπορείτε να απολαύσετε τόσο από υπολογιστή, όσο και από κινητές
          συσκευές.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Ανάμεσα στους διαθέσιμους παρόχους λογισμικού συναντήσαμε πολλά γνωστά
          ονόματα όπως είναι οι εταιρείες Pragmatic Play, Playtech, BGaming,
          Play’n GO, Relax Gaming, Hacksaw Gaming, Yggdrasil, Endorphina, ELK,
          Novomatic και Red Tiger Gaming. Δημοφιλή παιχνίδια περιλαμβάνουν το
          Sweet Bonanza, το οποίο είναι ιδιαίτερα αναγνωρισμένο και αγαπητό.
        </p>

        <h3 className="text-2xl font-bold mb-4">
          Φρουτάκια & Επιτραπέζια Παιχνίδια (Sweet Bonanza κ.α.)
        </h3>
        <p className="mb-4 text-lg leading-relaxed">
          Από τη στιγμή που προσφέρει χιλιάδες επιλογές, το N1 Casino έχει
          προχωρήσει σε μία εργονομική κατηγοριοποίηση των επιλογών σε διαθέσιμα
          τραπέζια καζίνο, ώστε να μπορείτε να φιλτράρετε εύκολα τα παιχνίδια
          που σας ενδιαφέρουν. Τόσο σε ό,τι έχει να κάνει με τα φρουτάκια όσο
          και στα επιτραπέζια παιχνίδια, όπως ρουλέτες, μπλάκτζακ, μπακαρά,
          πόκερ, υπάρχει η δυνατότητα παιχνιδιού με demo σε εικονικό υπόλοιπο με
          ένα κλικ. Δεν υπάρχουν πραγματικά κέρδη, όμως πμορείτε να εξασκηθείτε
          και να πειραματιστείτε.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Έτσι, τα μέλη έχουν πρόσβαση σε πολλούς δημοφιλείς τίτλους παιχνιδιών
          όπως τα:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4 text-left inline-block">
          <li>Gates of Olympus</li>
          <li>Big Bamboo</li>
          <li>Le Bandit</li>
          <li>Razor Shark</li>
          <li>Sugar Rush</li>
          <li>Energy Coins</li>
          <li>Tome of Madness</li>
        </ul>
        <p className="mb-8 text-lg leading-relaxed">
          Μπορείτε να δείτε συγκεντρωμένα τα παιχνίδια με βάση τον πάροχο, αλλά
          και με το gameplay, βλέποντας παιχνίδια με δυνατότητα αγοράς μπόνους
          λειτουργίας, κουλοχέρηδες τζάκποτ, αλλά και μαζεμένους τους νέους ή
          τους δημοφιλείς τίτλους.
        </p>

        {/* Изображение в конце */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/seo3.jpg"
            alt="Registration Info"
            width={800}
            height={500}
            sizes="100vw"
            className="max-w-full h-auto rounded-md"
          />
          <a
            href="https://www.n1casino.gr/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-brandRed text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity inline-block"
          >
            Παίξε Τώρα
          </a>
        </div>
      </div>
    </section>
  );
}
