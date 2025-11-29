
import React from 'react';
import { useSeo } from '../hooks/usePageMetadata';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  useSeo({
    title: 'Privacy Policy – GINocchi – GGC',
    description: 'Informativa sulla privacy per il sito GINocchi - GGC. Dettagli sul trattamento dei dati, titolare e diritti degli utenti.',
    canonical: 'https://www.ginocchi-ggc.it/#/privacy-policy',
    keywords: 'privacy policy, gdpr, dati personali, GINocchi',
    schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy – GINocchi – GGC",
        "description": "Informativa sulla privacy per il sito GINocchi - GGC."
    }
  });

  return (
    <div className="py-6 max-w-3xl mx-auto px-4 text-gray-200 font-roboto-mono text-left leading-relaxed">
      <h1 className="text-3xl sm:text-4xl font-rubik font-bold mb-8 text-white text-center">Privacy Policy – GINocchi – GGC</h1>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">1. Titolare del trattamento</h2>
        <p className="mb-2">Il titolare del trattamento dei dati personali relativi al sito ginocchi-ggc.it è:</p>
        <p className="font-bold mb-1">Mosaico Spirits SRL</p>
        <p>Sede legale: Viale Regina Margherita 28, 20122 Milano (MI), Italia</p>
        <p>P. IVA: IT10767740961</p>
        <p>Email di contatto: <a href="mailto:info@iltuogin.it" className="text-yellow-400 hover:underline">info@iltuogin.it</a></p>
        <p className="mt-2">Il Titolare può essere contattato per qualsiasi informazione o richiesta relativa al trattamento dei dati personali connessi alla navigazione sul sito ginocchi-ggc.it.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">2. Tipologie di dati trattati</h2>
        <p className="mb-2">Durante la navigazione sul sito ginocchi-ggc.it possono essere trattati:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Dati di navigazione:</strong> informazioni che i sistemi informatici e le procedure software preposte al funzionamento di questo sito acquisiscono automaticamente, nel corso del loro normale esercizio. Rientrano in questa categoria, a titolo esemplificativo, gli indirizzi IP, i nomi a dominio dei computer utilizzati dagli utenti che si collegano al sito, gli identificativi delle risorse richieste, l’orario della richiesta, il codice di risposta del server e altri parametri relativi al sistema operativo e all’ambiente informatico dell’utente.</li>
            <li><strong>Cookie tecnici:</strong> il sito può utilizzare cookie o strumenti analoghi strettamente necessari a garantire il funzionamento tecnico del sito e la sua sicurezza (ad esempio cookie di sessione, bilanciamento del carico, protezioni da attacchi informatici). Non vengono utilizzati cookie di profilazione né strumenti di tracciamento per finalità di marketing o analisi avanzata.</li>
        </ul>
        <p className="mt-2">Il sito ginocchi-ggc.it non prevede moduli di registrazione, form di contatto o newsletter e non raccoglie dati identificativi dell’utente tramite tali strumenti.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">3. Finalità e basi giuridiche del trattamento</h2>
        <p className="mb-2">I dati personali sopra indicati sono trattati dal Titolare per le seguenti finalità:</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mb-2">
            <li><strong>Funzionamento tecnico del sito e sicurezza:</strong> Garantire il corretto funzionamento delle pagine web.</li>
            <li>Ricavare informazioni statistiche anonime sull’uso del sito (ad esempio numero di visite, pagine più consultate) tramite analisi dei log di server o altri strumenti interni che non prevedono la profilazione dell’utente.</li>
            <li>Tenere sotto controllo il corretto funzionamento del sito e prevenire o individuare attività fraudolente o abusi.</li>
        </ul>
        <p><strong>Base giuridica:</strong> legittimo interesse del Titolare (art. 6, par. 1, lett. f GDPR) a garantire la sicurezza della rete e dell’informazione e il corretto funzionamento del sito.</p>
        <p className="mt-2">Nessun dato raccolto sul sito ginocchi-ggc.it viene utilizzato per finalità di marketing diretto, profilazione commerciale o invio di comunicazioni promozionali.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">4. Conferimento dei dati</h2>
        <p>Il conferimento dei dati di navigazione è connesso all’uso dei protocolli di comunicazione di Internet ed è pertanto necessario per visitare il sito.</p>
        <p>L’utente può comunque limitare l’invio di determinate informazioni configurando le impostazioni del proprio browser (ad esempio bloccando i cookie), tenendo presente che tale scelta potrebbe influire sulla corretta visualizzazione del sito.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">5. Destinatari dei dati</h2>
        <p className="mb-2">I dati personali degli utenti possono essere trattati da:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
            <li>personale interno del Titolare, autorizzato e istruito sul trattamento dei dati;</li>
            <li>fornitori di servizi informatici e di hosting che operano quali responsabili del trattamento ai sensi dell’art. 28 GDPR;</li>
            <li>eventuali soggetti terzi (ad esempio consulenti, autorità pubbliche, forze dell’ordine) nei limiti in cui ciò sia richiesto dalla legge o necessario per la tutela dei diritti del Titolare.</li>
        </ul>
        <p className="mt-2">I dati non vengono diffusi in modo indiscriminato.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">6. Trasferimento dei dati verso Paesi terzi</h2>
        <p>Per la gestione del sito ginocchi-ggc.it il Titolare utilizza principalmente servizi localizzati nello Spazio Economico Europeo (SEE).</p>
        <p>Qualora, per esigenze tecniche, si rendesse necessario il trasferimento di dati verso Paesi al di fuori del SEE, tale trasferimento avverrà nel rispetto dei limiti e delle condizioni stabilite dal GDPR (ad esempio in presenza di decisioni di adeguatezza della Commissione Europea o mediante l’adozione di clausole contrattuali standard).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">7. Periodo di conservazione dei dati</h2>
        <p>I dati di navigazione e i log di sistema sono conservati per il tempo strettamente necessario al conseguimento delle finalità per cui sono raccolti e comunque nel rispetto dei termini massimi previsti dalla normativa applicabile in materia di sicurezza informatica e tutela dei diritti del Titolare.</p>
        <p>Gli eventuali cookie tecnici hanno una durata limitata alla singola sessione di navigazione o, in ogni caso, a un periodo non superiore a quanto necessario per garantire il corretto funzionamento del sito.</p>
        <p>Allo scadere dei periodi indicati, i dati vengono cancellati o resi anonimi in modo irreversibile.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">8. Diritti degli interessati</h2>
        <p className="mb-2">In qualità di interessato, l’utente può esercitare nei confronti del Titolare i diritti previsti dagli artt. 15–22 del GDPR, tra cui:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
            <li>diritto di accesso ai dati personali;</li>
            <li>diritto di rettifica o aggiornamento;</li>
            <li>diritto alla cancellazione (“diritto all’oblio”), nei casi previsti dalla legge;</li>
            <li>diritto alla limitazione del trattamento;</li>
            <li>diritto di opposizione al trattamento basato sul legittimo interesse;</li>
            <li>diritto alla portabilità dei dati, quando applicabile.</li>
        </ul>
        <p className="mt-2">Le richieste possono essere inviate all’indirizzo email: <a href="mailto:info@iltuogin.it" className="text-yellow-400 hover:underline">info@iltuogin.it</a>.</p>
        <p>L’interessato ha inoltre il diritto di proporre reclamo all’Autorità Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">www.garanteprivacy.it</a>) qualora ritenga che il trattamento dei dati effettuato tramite questo sito avvenga in violazione della normativa applicabile.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">9. Collegamento con il sito iltuogin.it</h2>
        <p>Il sito ginocchi-ggc.it presenta il progetto/prodotto GINocchi – GGC e può contenere link o pulsanti che reindirizzano l’utente verso il sito di ecommerce iltuogin.it, sul quale è possibile effettuare l’acquisto dei prodotti.</p>
        <p className="mt-2 mb-2">Tutti i trattamenti di dati personali relativi a:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
            <li>gestione degli ordini e dei pagamenti;</li>
            <li>fatturazione;</li>
            <li>creazione e gestione di account utente;</li>
            <li>iscrizione alla newsletter;</li>
            <li>recensioni e servizi collegati all’ecommerce</li>
        </ul>
        <p className="mt-2">avvengono esclusivamente sul sito iltuogin.it e sono disciplinati dalle informative privacy e cookie pubblicate su quel sito.</p>
        <p className="mt-2">Per tali trattamenti si invita l’utente a consultare le informative disponibili su:</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
            <li><strong>Privacy Policy iltuogin.it:</strong> <a href="https://iltuogin.it/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">https://iltuogin.it/privacy-policy</a></li>
            <li><strong>Cookie Policy iltuogin.it e Termini di Utilizzo:</strong> pagine dedicate sul medesimo sito.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">10. Modifiche alla presente informativa</h2>
        <p>Il Titolare si riserva il diritto di modificare la presente Privacy Policy in qualsiasi momento, dando adeguata evidenza sul sito.</p>
        <p>Le modifiche si applicano a partire dalla data di pubblicazione sul sito. Si invita pertanto l’utente a consultare periodicamente questa pagina.</p>
      </section>

    </div>
  );
};

export default PrivacyPolicyPage;
