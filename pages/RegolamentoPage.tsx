import React from 'react';
import { CATEGORY_COLORS } from '../constants';
import { Categoria } from '../types';
import { useSeo } from '../hooks/usePageMetadata';

interface RuleSectionProps {
  title: string;
  number?: string;
  children: React.ReactNode;
  titleClassName?: string;
}

const RuleSection: React.FC<RuleSectionProps> = ({ title, number, children, titleClassName }) => (
  <section className="mb-10">
    <h2 className={`text-3xl font-rubik font-bold mb-4 text-white ${titleClassName}`}>
      {number && <span className="mr-2">{number}</span>}
      {title}
    </h2>
    <div className="space-y-3 text-gray-200 leading-relaxed">
      {children}
    </div>
  </section>
);

const RegolamentoPage: React.FC = () => {
  useSeo({
    title: 'Regolamento Completo | GINocchi - GGC',
    description: 'Impara tutte le regole di GINocchi - GGC. Scopri come muoverti, attaccare, difenderti e sfruttare le debolezze dei Ginocchi in questo gioco da tavolo unico.',
    canonical: 'https://www.ginocchi-ggc.it/#/regolamento',
    keywords: 'regolamento, regole, come giocare, Ginocchi, GINocchi - GGC, gioco da tavolo, gioco alcolico',
    schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Regolamento Completo del Gioco da Tavolo GINocchi",
        "author": {
            "@type": "Organization",
            "name": "GINocchi - GGC"
        },
        "publisher": {
            "@type": "Organization",
            "name": "GINocchi - GGC",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.ginocchi-ggc.it/images/logo_completo_footer.png"
            }
        },
        "description": "La guida completa con tutte le regole per giocare a GINocchi, incluse le fasi di movimento, attacco, difesa, effetti speciali e il triangolo delle debolezze."
    }
  });

  const garnishImagePath = (imageName: string) => `/images/Garnish/${imageName}`;
  const effectImagePath = (imageName: string) => `/images/Status/${imageName}`;

  const effettiSpeciali = [
    { name: "Paralisi totale", logo: "Paralisi Totale.png", desc: "Chi si difende non puoi muoversi né attaccare al prossimo turno." },
    { name: "Cura", logo: "Cura.png", desc: "Chi attacca recupera 2 PV." },
    { name: "Spinta", logo: "Spinta.png", desc: "Chi attacca spinge l’avversario di 2 caselle nella direzione dell'attacco.\nSe l’avversario sbatte contro una parete del campo da gioco, perde 1 PV.\nSe l’avversario sbatte contro un altro personaggio in gioco, entrambi perdono 1 PV." },
    { name: "Autolesionismo", logo: "Autolesionismo.png", desc: "Chi attacca subisce danno +2." },
    { name: "Vilipendio", logo: "Danno sesso opposto.png", desc: "Chi si difende, se di sesso diverso da chi attacca, subisce danno doppio." },
    { name: "Ammosciamento", logo: "Ammosciamento.png", desc: "Chi si difende infliggerà danno massimo 1 al prossimo attacco." },
    { name: "Sorso salvifico", logo: "Sorso_salvifico.png", desc: "Se il bicchiere di chi attacca contiene più gin tonic di quello di chi si difende, l’attaccante può bere un sorso e recuperare 2 PV." },
    { name: "Spogliato", logo: "Spogliato.png", desc: "Chi si difende non potrà difendersi al prossimo attacco." },
    { name: "Paura", logo: "Paura.png", desc: "Chi si difende, nel prossimo turno non potrà avvicinarsi a chi ha attaccato, dovrà rimanere ad almeno una casella di distanza." },
    { name: "Succhiaggio PV", logo: "Succhiaggio pv.png", desc: "Chi attacca recupera PV pari al danno che infligge." },
    { name: "Alcolismo competitivo", logo: "Alcolismo_competitivo.png", desc: "Se il bicchiere di chi attacca contiene meno gin tonic di quello di chi si defende, chi attacca infligge danno +2." },
    { name: "Blocca attacco", logo: "Blocco Attacco.png", desc: "Chi si difende non potrà attaccare al prossimo turno." },
    { name: "Inverti casella", logo: "Inverti Casella.png", desc: "Per chi si difende, il bonus “gioco in casa” (se applicabile) diventa un malus di pari valore." }
  ];

  const garnishItems = [
      { name: "Pepe Nero", img: "Garnish_pepenero.png", effect: "6 (Buff) ⇒ Infliggi ulteriore danno +3 con questo attacco.\n1 (Debuff) ⇒ Dopo la risoluzione di questo attacco perdi 2 PV." },
      { name: "Pepe Rosa", img: "Garnish_peperosa.png", effect: "6 (Buff) ⇒ L’attaccante sceglie quale attacco del tuo personaggio utilizzerà in questo turno.\n1 (Debuff) ⇒ Il difensore sceglie quale attacco del tuo personaggio utilizzerai in questo turno." },
      { name: "Ginepro", img: "Garnish_ginepro.png", effect: "6 (Buff) ⇒ Dopo la risoluzione dell’attacco recuperi 3 PV.\n1 (Debuff) ⇒ Infliggi ulteriore danno -2 con questo attacco." },
      { name: "Cardamomo", img: "Garnish_cardamomo.png", effect: "6 (Buff) ⇒ Dopo la risoluzione dell’attacco puoi spostarti in qualsiasi casella del tabellone.\n1 (Debuff) ⇒ Dopo la risoluzione dell’attacco, chi si è difeso sceglierà in quale casella del tabellone spostarti." }
  ];

  return (
    <div className="py-6 px-2">
      <img 
        src="/images/header_regolamento.jpg" 
        alt="Header Regolamento GINocchi" 
        className="w-full max-w-3xl mx-auto mb-10 rounded-lg shadow-lg"
      />

      <div className="max-w-3xl mx-auto">
        <RuleSection number="1." title="Obiettivo">
          <p>Il tuo obiettivo è eliminare gli altri giocatori e rimanere l’unico in vita sul tabellone.</p>
          <p>In alternativa, la partita finisce quando tutti i giocatori hanno terminato il loro gin tonic.</p>
          <div className="mt-3 p-3 bg-yellow-900 bg-opacity-30 border-l-4 border-yellow-500 text-yellow-300 rounded-r-md">
            <h3 className="text-xl font-rubik font-bold mb-2 text-yellow-500 not-italic">1.1 Regola Aurea</h3>
            <p className="italic">
              Meglio un figlio in guerra che l'alcol per terra: se rovesci il tuo gin tonic o quello di un avversario hai perso.
            </p>
          </div>
        </RuleSection>
        
        <RuleSection number="2." title="GINocchi web app">
          <p>Nell’app web di GINocchi (www.ginocchi-ggc.it) troverai:</p>
          <ul className="list-disc list-inside space-y-1 my-2 ml-4">
              <li>il Gindex</li>
              <li>Cos’è GINocchi</li>
              <li>Il gin</li>
              <li>Il regolamento completo (dove sei ora)</li>
              <li>Il regolamento per ubriachi (dove sarai a breve)</li>
          </ul>
          <p>Scansionando il QR Code presente sulle bottiglie, o consultando il Gindex, troverai la scheda di gioco del tuo personaggio. Qui potrai tenere sotto controllo punti vita, attacchi e status, da utilizzare durante la partita. In più, potrai approfondire la storia dei personaggi e farci amicizia, a tuo rischio e pericolo, chattando con loro.</p>
        </RuleSection>

        <RuleSection number="3." title="Occorrente">
          <ul className="list-disc list-inside space-y-1">
            <li>2 o più giocatori;</li>
            <li>Tabellone da gioco oppure almeno 25 casellotti;</li>
            <li>Dado a 6 facce;</li>
            <li>Garnish: pepe nero, pepe rosa, ginepro o cardamomo (opzionale).</li>
          </ul>
          <p className="font-bold my-2">Per ogni giocatore:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>2 bottiglie mignon GINocchi (una da bere e una da giocare)*;</li>
            <li>200ml di acqua tonica;</li>
            <li>Ghiaccio;</li>
            <li>Bicchiere da 330ml;</li>
            <li>Uno smartphone.</li>
          </ul>
          <p className="text-sm italic mt-2">* La bottiglia piena è in palio e verrà usata come pedina, il giocatore dovrà consegnarla all’avversario che gli infliggerà l’attacco letale.</p>
        </RuleSection>
        
        <RuleSection number="4." title="Tabellone">
          <p>Il pack GINocchi XL include il tabellone ufficiale GINocchi: una griglia 5x5, ottimale da 2 a 4 giocatori.</p>
          <p>Il pack GINocchi XS include 25 casellotti (stickers adesivi), con cui comporre il proprio tabellone personalizzato. Segui la griglia consigliata oppure scatena la fantasia!</p>
          <p>Vuoi assicurarti un gioco equilibrato? Da 2 a 4 giocatori utilizza 4 caselle rosse, 4 verdi, 4 blu e 5 gialle. Per ogni giocatore che si unisce dopo il quarto, aggiungi 8 caselle (due per ogni tipologia).</p>
          <h3 className="text-xl font-rubik font-bold mt-4 mb-2 text-white">4.1 Gioco in casa</h3>
          <p>Le caselle rappresentano le tipologie di GINocchi: bilanciato (giallo), erbaceo (verde), fruttato (rosso) e speziato (blu).</p>
          <p>Durante il gioco, se un giocatore si trova sulla casella della propria categoria ottiene un bonus +1 in attacco e difesa per “gioco in casa”.</p>
          <div className="mt-2 p-3 bg-gray-800 rounded-lg text-sm">
              <p><strong className="font-bold">Esempio:</strong></p>
              <p>Un GINocchio Bilanciato si posiziona su una casella Bilanciata e attacca. Al valore di danno del suo attacco si somma +1 per gioco in casa.</p>
              <p>Un GINocchio Bilanciato posizionato su una casella Bilanciata e viene attaccato. Al valore di danno subito si somma -1 per gioco in casa.</p>
              <p>Questo vale per tutte le tipologie.</p>
          </div>
        </RuleSection>

        <RuleSection number="5." title="Preparazione">
          <p>Ogni giocatore mostra le 2 bottiglie di GINocchi scelte per la partita. Una verrà usata per bere, l’altra per giocare.</p>
          <p>Ogni giocatore prepara il suo gin tonic con la prima bottiglia (che non userà per giocare).</p>
          <ul className="list-disc list-inside ml-4 my-2 space-y-1">
            <li>Riempire il bicchiere di ghiaccio;</li>
            <li>Aggiungere il contenuto della mignon (tutto!). I giocatori svolgono questa azione contemporaneamente;</li>
            <li>Aggiungere l’acqua tonica;</li>
            <li>Opzionale: aggiungere garnish (vedi punto 11).</li>
          </ul>
          <p>Ogni giocatore posiziona la seconda bottiglia (piena) in una casella di partenza del tabellone. Prima di iniziare, scansiona il QR Code del personaggio in campo per visualizzare la sua scheda di gioco nella web app.</p>
          <p>Tutti i giocatori fanno un brindisi d’inizio, al grido di "Vaffanculo miserabili!".</p>
          <p>Tutti bevono un sorso.</p>
          <p>Il primo giocatore che appoggia il bicchiere sul tavolo inizierà il turno*.</p>
          <p>Il gioco continua in senso orario.</p>
          <p className="text-sm italic mt-2">*Il primo giocatore, durante il primo turno, non può attaccare ma solo spostarsi.</p>
        </RuleSection>
        
        <RuleSection number="6." title="Turno di gioco">
          <p>Durante il proprio turno, ogni giocatore:</p>
          <ul className="list-disc list-inside my-2 space-y-1 ml-4">
            <li>Si muove;</li>
            <li>Attacca, se possibile. Ogni giocatore attaccato deve difendersi;</li>
            <li>Se non attacca, beve.</li>
          </ul>
          <h3 className="text-xl font-rubik font-bold mt-4 mb-2 text-white">6.1 Movimento</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Lancia il dado;</li>
            <li>Muovi la tua pedina, spostandoti solo in orizzontale o verticale. Non puoi spostarti in diagonale;</li>
            <li>Non puoi entrare in una casella occupata da un altro giocatore;</li>
            <li>Non puoi passare due volte sulla stessa casella durante lo stesso turno;</li>
            <li>Se non ci sono avversari adiacenti, bevi e passa il turno al giocatore successivo;</li>
            <li>Se il giocatore in turno non può muoversi in nessuna direzione perchè bloccato da altri giocatori, può attaccare direttamente uno dei giocatori adiacenti.</li>
          </ul>
          <h3 className="text-xl font-rubik font-bold mt-4 mb-2 text-white">6.2 Attacco</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>L’attacco è composto da danno ed effetto;</li>
            <li>Se sei in turno puoi attaccare solo posizionandoti su una casella adiacente (orizzontalmente o verticalmente) a un avversario.</li>
            <li>Dopo esserti spostato, lancia il dado per attaccare.</li>
            <li>Alza il volume del tuo smartphone, scegli l’attacco dalla scheda di gioco dell’app GINocchi (scegliendo il dado corrispondente) e dichiara danno ed effetto al tuo avversario prima che lui si difenda.</li>
          </ul>
          <h3 className="text-xl font-rubik font-bold mt-4 mb-2 text-white">6.3 Difesa</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Sei vieni attaccato, devi difenderti;</li>
            <li>Dopo aver ricevuto l’attacco dell’avversario, lancia il dado per difenderti e respingere l’attacco.</li>
            <li>Se il numero ottenuto corriponde al numero del lancio di attacco, il danno e gli effetti vengono inflitti all’accattante (inclusi debolezze e gioco in casa)</li>
            <li>Se il numero ottenuto non corrisponde al numero del lancio di attacco, il danno e l’effetto viengono inflitti al difensore (inclusi debolezze e gioco in casa)</li>
          </ul>
          <div className="mt-4 p-3 bg-orange-900 bg-opacity-40 border-l-4 border-orange-500 text-orange-300 rounded-r-md">
            <h4 className="font-bold text-lg">Scola o muori!</h4>
            <p className="italic">In caso di attacco letale, hai un’ultima chance: puoi bere il tuo gin tonic fino all’ultima goccia per annullare l’attacco dell’avversario, sia danno che effetto. Il turno si conclude e passa al giocatore successivo.</p>
          </div>
          <h3 className="text-xl font-rubik font-bold mt-4 mb-2 text-white">6.4 Risoluzione</h3>
          <p>Al termine della fase di attacco e difesa, i giocatori aggiornano PV e status sulla propria scheda di gioco.</p>
        </RuleSection>

        <RuleSection number="7." title="Triangolo delle debolezze">
          <div className="space-y-4">
            <div className="p-4 rounded-lg" style={{ backgroundColor: CATEGORY_COLORS.Fruttato, color: '#FFFFFF' }}>
                <h4 className="font-rubik font-bold text-lg uppercase mb-1">{Categoria.Fruttato}</h4>
                <p>Se attaccato da Speziato riceve ulteriore danno +1.</p>
                <p>Se attaccato da Erbaceo riceve ulteriore danno -1.</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: CATEGORY_COLORS.Erbaceo, color: '#FFFFFF' }}>
                <h4 className="font-rubik font-bold text-lg uppercase mb-1">{Categoria.Erbaceo}</h4>
                <p>Se attaccato da Fruttato riceve ulteriore danno +1.</p>
                <p>Se attaccato da Speziato riceve ulteriore danno -1.</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: CATEGORY_COLORS.Speziato, color: '#FFFFFF' }}>
                <h4 className="font-rubik font-bold text-lg uppercase mb-1">{Categoria.Speziato}</h4>
                <p>Se attaccato da Erbaceo riceve ulteriore danno +1.</p>
                <p>Se attaccato da Fruttato riceve ulteriore danno -1.</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: CATEGORY_COLORS.Bilanciato, color: '#000000' }}>
                <h4 className="font-rubik font-bold text-lg uppercase mb-1">{Categoria.Bilanciato}</h4>
                <p>Non ha debolezze né resistenze.</p>
            </div>
          </div>
        </RuleSection>

        <RuleSection number="8." title="Effetti">
          <p>Ogni personaggio ha a disposizione 6 attacchi con diversi danni ed effetti.</p>
          <p>Gli effetti sono condizioni associate all’attacco e si applicano al giocatore sconfitto durante il turno.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {effettiSpeciali.map((eff, index) => (
              <div key={index} className="p-4 bg-gray-900 rounded-lg border border-gray-700 flex flex-col items-center text-center shadow-lg">
                <img src={effectImagePath(eff.logo)} alt={`Logo ${eff.name}`} className="w-20 h-20 mb-3 object-contain" onError={(e) => { const target = e.target as HTMLImageElement; target.style.display = 'none'; }} />
                <h4 className="text-lg font-rubik font-bold text-white mb-1">{eff.name}</h4>
                <p className="text-sm text-gray-300 leading-relaxed flex-grow whitespace-pre-line">{eff.desc}</p>
              </div>
            ))}
          </div>
        </RuleSection>

        <RuleSection number="9." title="Vittoria">
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Il vincitore della partita è l’ultimo superstite.</li>
            <li>Ogni volta che un giocatore elimina un giocatore avversario, vince la sua bottiglia di GINocchi in palio.</li>
            <li>In caso di pareggio, si procede con una gara di rutti.</li>
          </ul>
        </RuleSection>

        <RuleSection number="10." title="Abisso Etilico">
          <p className="text-orange-400 font-semibold">Modalità opzionale solo per i veri eroi delle avventure alcoliche.</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>Se un giocatore termina sia i PV che il proprio gin tonic, può prepararne un altro (vedi punto 5) con un ulteriore bottiglia di GINocchi in suo possesso e rientrare in gioco.</li>
            <li>Gli unici limiti sono la resistenza alcolica e il numero di bottiglie piene a disposizione del giocatore.</li>
          </ul>
        </RuleSection>

        <RuleSection number="11." title="Garnish* (opzionale)">
          <p>Per aggiungere (letteralmente) un pò di pepe alla partita, i giocatori hanno a disposizone 4 garnish. Ogni garnish garantisce un bonus o un malus in base al lancio di attacco.</p>
          <ul className="list-disc list-inside my-2 space-y-1 ml-4">
              <li>Se il lancio di attacco dà il numero <strong>6</strong> si ottiene un Buff che attiva l’effetto positivo tipico del garnish usato.</li>
              <li>Se il lancio di attacco dà il numero <strong>1</strong> si ottiene un Debuff che attiva l’effetto negativo tipico del garnish usato.</li>
          </ul>
          <div className="space-y-6 mt-4">
            {garnishItems.map((garnish, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center p-3 bg-gray-900 rounded-lg border border-gray-700">
                <img src={garnishImagePath(garnish.img)} alt={garnish.name} className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md mr-0 sm:mr-4 mb-3 sm:mb-0 border-2 border-gray-600" onError={(e) => { const target = e.target as HTMLImageElement; target.style.display = 'none'; }} />
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-lg font-rubik font-bold text-white">{garnish.name}</h4>
                  <p className="text-sm whitespace-pre-line">{garnish.effect}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm italic mt-4">* I garnish sono decorazioni da cocktail che ne completano l'esperienza sensoriale, non solo estetica. I garnish GINocchi vanno inseriti direttamente nel drink durante la sua preparazione all’inizio della partita.</p>
        </RuleSection>
      </div>
    </div>
  );
};

export default RegolamentoPage;
