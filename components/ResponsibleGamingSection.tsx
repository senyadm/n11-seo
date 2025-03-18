'use client';

import Image from 'next/image';

export default function ResponsibleGamingSection() {
  return (
    <section className="bg-brandDark text-white py-12">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Υπεύθυνο Παιχνίδι */}
        <h2 className="text-3xl font-bold mb-6">Υπεύθυνο Παιχνίδι</h2>
        <p className="mb-6 text-lg leading-relaxed">
          Το N1 Casino υποστηρίζει το υπεύθυνο παιχνίδι, προσπαθώντας να βοηθήσει τους παίκτες να μείνουν μακριά από την εξάρτηση στον τζόγο με διάφορα εργαλεία. Έτσι, μπορείτε απλά να διασκεδάσετε στην πλατφόρμα χωρίς ρίσκο για μεγάλες οικονομικές απώλειες και εν τέλει εθισμό. Για οποιοδήποτε ζήτημα σχετικά με την εξάρτηση στα τυχερά παιχνίδια, καλό είναι να επικοινωνήσετε με την ομάδα support n1casino.gr σχετικά.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Τα μέλη μπορούν να πάρουν περισσότερο έλεγχο στο παιχνίδι, αφού το Ν1 Casino βοηθά σημαντικά στο υπεύθυνο παιχνίδι και στην πρόληψη του εθισμού στα τυχερά παιχνίδια. Συγκεκριμένα, οι παίκτες μπορούν να αξιοποιήσουν τα παρακάτω εργαλεία:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-8 text-left inline-block">
          <li>Όρια κατάθεσης σε καθημερινή και μηνιαία βάση</li>
          <li>Όρια απωλειών σε καθημερινή και μηνιαία βάση</li>
          <li>Χρονικό όριο παιχνιδιού στη σελίδα σε καθημερινή και μηνιαία βάση</li>
          <li>Διάλειμμα από τον λογαριασμό τους, κλείνοντας το account για διάστημα της επιθυμίας τους μέχρι και μόνιμα</li>
        </ul>
        <p className="mb-6 text-lg leading-relaxed">
          Τα εργαλεία μπορούν να αξιοποιηθούν μέσα από το προφίλ του χρήστη στη σχετική καρτέλα του υπεύθυνου στοιχηματισμού.
        </p>

        {/* Συμβουλές για Ασφαλές Παιχνίδι */}
        <h3 className="text-2xl font-bold mb-4">Συμβουλές για Ασφαλές Παιχνίδι</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-8 text-left inline-block">
          <li>Βάλτε όρια στο λογαριασμό σας, ώστε να μην μπορείτε να ποντάρετε παραπάνω χρήματα από αυτά που αντέχει η τσέπη σας.</li>
          <li>Αν νιώσετε ότι χάνετε τον έλεγχο, μη διστάσετε να κλείσετε τον λογαριασμό σας ή να επικοινωνήσετε με το τμήμα εξυπηρέτησης.</li>
          <li>Μην κυνηγάτε τις απώλειές σας και ποντάρετε περισσότερα χρήματα για να ανακτήσετε αυτά τα οποία χάσατε.</li>
          <li>Μην παίζετε με δανεικά.</li>
          <li>Κρατάτε αρχείο, ώστε να έχετε εικόνα για τα χρήματα που ξοδεύετε στα τυχερά παιχνίδια και κατά πόσο σας φεύγουν.</li>
        </ul>

        {/* Вставляем картинку */}
        <div className="my-8">
          <Image
            src="/images/responsible.jpg"
            alt="Υπεύθυνο Παιχνίδι"
            width={700}
            height={500}
            sizes="100vw"
            className="max-w-full h-auto rounded-md"
          />
        </div>

        {/* Εφαρμογή για κινητά και προσβασιμότητα */}
        <h2 className="text-3xl font-bold mb-6">Εφαρμογή για κινητά και προσβασιμότητα</h2>
        <p className="mb-6 text-lg leading-relaxed">
          Οι παίκτες του N1 Casino έχουν δυνατότητα να απολαύσουν το παιχνίδι από όπου κι αν βρίσκονται, χάρη στην εφαρμογή για κινητά. Συγκεκριμένα, η εφαρμογή είναι διαθέσιμη τόσο για συσκευές iOS όσο και Android μέσα από τα ηλεκτρονικά καταστήματα App Store και Play Store αντίστοιχα.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Έτσι, μπορείτε να αξιοποιήσετε όλες τις λειτουργίες της πλατφόρμας και να συμμετέχετε από smartphone και tablet.
        </p>
      </div>
    </section>
  );
}
