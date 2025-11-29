
import React from 'react';
import { useSeo } from '../hooks/usePageMetadata';

const CookiePolicyPage: React.FC = () => {
  useSeo({
    title: 'Cookie Policy – GINocchi – GGC',
    description: 'Informativa sui cookie per il sito GINocchi - GGC. Utilizziamo solo cookie tecnici per garantire il funzionamento del sito.',
    canonical: 'https://www.ginocchi-ggc.it/#/cookie-policy',
    keywords: 'cookie policy, cookie tecnici, GINocchi',
    schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Cookie Policy – GINocchi – GGC",
        "description": "Informativa sui cookie per il sito GINocchi - GGC."
    }
  });

  return (
    <div className="py-6 max-w-3xl mx-auto px-4 text-gray-200 font-roboto-mono text-left leading-relaxed">
      <h1 className="text-3xl sm:text-4xl font-rubik font-bold mb-8 text-white text-center">Cookie Policy – GINocchi – GGC</h1>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">1. Cosa sono i cookie</h2>
        <p>I cookie sono piccoli file di testo che i siti web visitati dall’utente inviano al suo dispositivo (computer, smartphone, tablet), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti in occasione di visite successive.</p>
        <p>I cookie consentono al sito di funzionare in modo efficiente e possono fornire informazioni al Titolare per finalità statistiche o di personalizzazione dell’esperienza di navigazione.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">2. Cookie utilizzati da ginocchi-ggc.it</h2>
        <p className="mb-2">Il sito ginocchi-ggc.it utilizza esclusivamente:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong>cookie tecnici</strong> strettamente necessari al funzionamento del sito e alla fruizione dei contenuti da parte dell’utente (ad esempio cookie di sessione, di sicurezza, eventuale bilanciamento del carico).</li>
        </ul>
        <p className="mt-2">Questi cookie non richiedono il consenso preventivo dell’utente in quanto non vengono utilizzati per finalità ulteriori rispetto a quelle tecniche sopra descritte.</p>
        <p className="mt-4 mb-2">Il sito <strong>non</strong> utilizza:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
            <li>cookie di profilazione;</li>
            <li>cookie per finalità di marketing;</li>
            <li>strumenti di terze parti finalizzati al tracciamento del comportamento degli utenti (ad esempio Google Analytics, pixel pubblicitari o strumenti analoghi).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">3. Gestione dei cookie tramite browser</h2>
        <p>L’utente può decidere se accettare o meno i cookie anche attraverso le impostazioni del proprio browser.</p>
        <p>La disattivazione totale o parziale dei cookie tecnici potrebbe compromettere il corretto funzionamento di alcune sezioni del sito.</p>
        <p className="mt-4 mb-2">Di seguito alcuni link alle pagine di gestione dei cookie dei principali browser:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Chrome</a></li>
            <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Firefox</a></li>
            <li><a href="https://support.microsoft.com/it-it/edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c23d-37fd-6b7ac1c08ff9" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Edge</a></li>
            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Safari</a></li>
            <li><a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Opera</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-rubik font-bold mb-3 text-white">4. Aggiornamenti</h2>
        <p>La presente Cookie Policy può essere soggetta a modifiche nel tempo. Eventuali aggiornamenti saranno pubblicati su questa pagina, che si invita l’utente a consultare periodicamente.</p>
      </section>

    </div>
  );
};

export default CookiePolicyPage;
