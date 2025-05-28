
import React from 'react';
import { CATEGORY_COLORS } from '../constants';
import { Categoria } from '../types';

interface RuleSectionProps {
  title: string;
  number?: string;
  children: React.ReactNode;
  titleClassName?: string;
}

const RuleSection: React.FC<RuleSectionProps> = ({ title, number, children, titleClassName }) => (
  <section className="mb-10">
    <h2 className={`text-3xl font-rubik mb-4 text-white ${titleClassName}`}> {/* Changed from text-yellow-400 */}
      {number && <span className="mr-2">{number}</span>}
      {title}
    </h2>
    <div className="space-y-3 text-gray-200 leading-relaxed">
      {children}
    </div>
  </section>
);

interface TriangoloItemProps {
  type: Categoria;
  receivesPlus1From: string;
  receivesMinus1From: string;
}

const TriangoloItem: React.FC<TriangoloItemProps> = ({ type, receivesPlus1From, receivesMinus1From }) => (
  <div 
    className="p-4 rounded-lg text-center text-sm md:text-base" 
    style={{ backgroundColor: CATEGORY_COLORS[type], color: parseInt(CATEGORY_COLORS[type].substring(1,3), 16) * 0.299 + parseInt(CATEGORY_COLORS[type].substring(3,5), 16) * 0.587 + parseInt(CATEGORY_COLORS[type].substring(5,7), 16) * 0.114 > 186 ? '#000000' : '#FFFFFF' }}
  >
    <h4 className="font-bold text-lg md:text-xl uppercase mb-1">{type}</h4>
    <p>Riceve +1 danno da {receivesPlus1From}.</p>
    <p>Riceve -1 danno da {receivesMinus1From}.</p>
  </div>
);

const RegolamentoPage: React.FC = () => {
  const garnishImagePath = (imageName: string) => `/images/Garnish/${imageName}`;
  const effectImagePath = (imageName: string) => `/images/Status/${imageName}`;
  const categoryImagePath = (categoria: Categoria) => `/images/categories/${categoria}.png`;


  return (
    <div className="py-6 px-2">
      <img 
        src="/images/header_regolamento.png" 
        alt="Header Regolamento Ginocchi" 
        className="w-full max-w-3xl mx-auto mb-10 rounded-lg shadow-lg"
        onError={(e) => (e.currentTarget.style.display = 'none')} 
      />

      <div className="max-w-3xl mx-auto">
        <RuleSection number="1." title="OBIETTIVO DEL GIOCO">
          <p>Il tuo obiettivo è eliminare tutti gli altri Ginocchi e rimanere l’unico in vita sul tabellone. In alternativa, la partita finisce quando tutti i giocatori hanno terminato il loro gin tonic.</p>
          <p className="mt-3 p-3 bg-yellow-900 bg-opacity-30 border-l-4 border-yellow-500 text-yellow-300 italic rounded-r-md">
            <strong>Regola Aurea:</strong> Meglio un figlio in guerra che l'alcol per terra: se rovesci il tuo gin tonic o quello di un avversario hai perso!
          </p>
        </RuleSection>

        <RuleSection number="2." title="COSA SERVE PER GIOCARE">
          <ul className="list-disc list-inside space-y-1">
            <li>Da 2 a 4 giocatori.</li>
            <li>2 bottiglie mignon di Ginocchi per ogni giocatore (una si beve, una si usa per giocare mettendola in palio).</li>
            <li>1 bicchiere, 1 tonica da 200 ml e ghiaccio per ogni giocatore.</li>
            <li>Quattro garnish (facoltativi): Pepe Nero, Pepe Rosa, Ginepro o Cardamomo.</li>
            <li>Tabellone da gioco con 25 caselle (5x5).</li>
            <li>1 dado a 6 facce.</li>
          </ul>
        </RuleSection>

        <RuleSection number="3." title="COME PREPARARE LA PARTITA">
          <p>Ogni giocatore mostra le sue 2 bottiglie di Ginocchi. Una verrà usata per bere, l’altra per giocare.</p>
          <p>Prepara il gin tonic con la bottiglia che non si userà nel gioco:</p>
          <ul className="list-disc list-inside ml-4 my-2 space-y-1">
            <li>Metti il ghiaccio nel bicchiere.</li>
            <li>Versa tutto il gin da 50 ml. Tutti i giocatori svolgono questo passo contemporaneamente.</li>
            <li>Aggiungi la tonica.</li>
            <li>Se vuoi, metti un garnish (ti darà un’abilità speciale).</li>
          </ul>
          <p>Posiziona il Ginocchio da gioco in uno dei quattro angoli del tabellone, nella casella Occhio più vicina a te.</p>
          <p>Scansiona il QR Code del Ginocchio o guarda sul Gindex la potenza del ginocchio.</p>
          <p>Fai un brindisi di inizio urlando "Vaffanculo miserabili". Tutti bevono un sorso. Chi appoggia il bicchiere per primo inizia. Poi si continua in senso orario.</p>
        </RuleSection>

        <RuleSection number="4." title="TURNO DI GIOCO">
          <p>Ogni giocatore compie due azioni nel suo turno:</p>
          <ul className="list-disc list-inside my-2 space-y-1">
            <li>Muove il Ginocchio.</li>
            <li>Attacca, se possibile. Un giocatore che viene attaccato deve difendersi.</li>
            <li>Se non attacchi, bevi.</li>
          </ul>
          <h3 className="text-xl font-rubik mt-4 mb-2 text-white">MOVIMENTO</h3> {/* Changed from text-yellow-300 */}
          <ul className="list-disc list-inside space-y-1">
            <li>Lancia il dado.</li>
            <li>Muovi il Ginocchio di esattamente quel numero di caselle, solo in orizzontale o verticale.</li>
            <li>Non puoi muoverti in diagonale.</li>
            <li>Non puoi entrare in una casella occupata da un altro Ginocchio.</li>
            <li>Non puoi passare due volte sulla stessa casella durante lo stesso turno.</li>
            <li>Se non ci sono avversari adiacenti, il turno finisce.</li>
            <li>Se il ginocchio non può muoversi in nessuna direzione perchè bloccato da altri ginocchi, può attaccare direttamente.</li>
            <li>Se non riesci ad attaccare, fai un sorso dal tuo gin tonic.</li>
          </ul>
          <h3 className="text-xl font-rubik mt-4 mb-2 text-white">ATTACCO</h3> {/* Changed from text-yellow-300 */}
          <ul className="list-disc list-inside space-y-1">
            <li>Solo se sei su una casella adiacente (orizzontalmente o verticallmente) ad un avversario.</li>
            <li>Lancia il dado.</li>
            <li>Guarda sul Gindex del tuo ginocchio quale attacco esegui e applicane gli effetti.</li>
            <li>Nota: Il primo giocatore, durante il primo turno, non può attaccare.</li>
          </ul>
          <h3 className="text-xl font-rubik mt-4 mb-2 text-white">DIFESA</h3> {/* Changed from text-yellow-300 */}
          <ul className="list-disc list-inside space-y-1">
            <li>Quando un giocatore viene attaccato, deve lanciare il dado (dopo l'attaccante) per tentare di difendersi e respingere l'attacco.</li>
            <li>Se il giocatore in difesa con il suo tiro, totalizza esattamente lo stesso punteggio dell'avversario, allora l'attacco è respinto al mittente, sia danni che effetto. Nella respinta non si applicano debolezze, resistenze e bonus casella.</li>
            <li>Se il giocatore con il suo tiro in difesa ottiene un lancio diverso da quello dell'attaccante, allora l'attacco va a buon fine.</li>
          </ul>
           <h3 className="text-xl font-rubik mt-4 mb-2 text-white">TOOLS</h3> {/* Changed from text-yellow-300 */}
          <p>Nelle pagine del gindex di ogni ginocchio, nella sezione tools di gioco, sono presenti dei tools per tenere il conto dei PV e per gli status. Usali durante le partite.</p>
        </RuleSection>

        <RuleSection number="5." title="TRIANGOLO DELLE DEBOLEZZE">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <TriangoloItem type={Categoria.Fruttato} receivesPlus1From="Speziato" receivesMinus1From="Erbaceo" />
            <TriangoloItem type={Categoria.Erbaceo} receivesPlus1From="Fruttato" receivesMinus1From="Speziato" />
            <TriangoloItem type={Categoria.Speziato} receivesPlus1From="Erbaceo" receivesMinus1From="Fruttato" />
          </div>
          <div className="p-4 rounded-lg text-center text-sm md:text-base" style={{ backgroundColor: CATEGORY_COLORS.Bilanciato, color: '#000000' }}>
            <h4 className="font-bold text-lg md:text-xl uppercase mb-1">{Categoria.Bilanciato}</h4>
            <p>Non ha debolezze o resistenze.</p>
          </div>
        </RuleSection>

        <RuleSection number="6." title="IL TABELLONE">
          <h3 className="text-xl font-rubik mt-4 mb-2 text-white">Tipi di caselle:</h3> {/* Changed from text-yellow-300 */}
          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tipo</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Gusto</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Effetto</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {[
                  { tipo: Categoria.Erbaceo, effetto: "+1 danno se attacchi con un Ginocchio Erbaceo.\nSubisci -1 danno se vieni attaccato e sei un Ginocchio Erbaceo." },
                  { tipo: Categoria.Speziato, effetto: "+1 danno se attacchi con un Ginocchio Speziato.\nSubisci -1 danno se vieni attaccato e sei un Ginocchio Speziato." },
                  { tipo: Categoria.Fruttato, effetto: "+1 danno se attacchi con un Ginocchio Fruttato.\nSubisci -1 danno se vieni attaccato e sei un Ginocchio Fruttato." },
                  { tipo: Categoria.Bilanciato, effetto: "+1 danno se attacchi con un Ginocchio Bilanciato.\nSubisci -1 danno se vieni attaccato e sei un Ginocchio Bilanciato." }
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <img src={categoryImagePath(item.tipo)} alt={item.tipo} className="w-5 h-5 mr-2" onError={(e) => (e.currentTarget.style.display = 'none')}/>
                        <span style={{color: CATEGORY_COLORS[item.tipo]}}>{item.tipo}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm" style={{color: CATEGORY_COLORS[item.tipo]}}>{item.tipo}</td>
                    <td className="px-4 py-3 text-sm whitespace-pre-line">{item.effetto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RuleSection>

        <RuleSection number="6." title="GUARNIZIONI (ABILITÀ PASSIVE)">
          <p>Scegli un garnish quando prepari il tuo gin tonic. Ogni garnish ti garantirà un bonus o un malus in base al lancio di attacco.</p>
          <ul className="list-disc list-inside my-2 space-y-1">
              <li><strong>6 (Buff)</strong> ⇒ si attiva l’effetto positivo del garnish.</li>
              <li><strong>1 (Debuff)</strong> ⇒ si attiva l’effetto negativo del garnish.</li>
          </ul>
          <div className="space-y-6 mt-4">
            {[
              { name: "Pepe Nero", img: "Garnish_pepenero.png", effect: "6 (Buff) ⇒ Infliggi +3 danni con questo attacco.\n1 (Debuff) ⇒ Dopo aver risolto l’attacco, perdi 2 Punti Vita." },
              { name: "Pepe Rosa", img: "Garnish_peperosa.png", effect: "6 (Buff) ⇒ Scegli tu quale attacco del tuo Ginocchio utilizzerai in questo turno.\n1 (Debuff) ⇒ L’avversario sceglie quale attacco del tuo Ginocchio utilizzerai in questo turno." },
              { name: "Ginepro", img: "Garnish_ginepro.png", effect: "6 (Buff) ⇒ Dopo aver risolto l’attacco, recuperi 3 Punti Vita.\n1 (Debuff) ⇒ Questo attacco infligge –2 danni." },
              { name: "Cardamomo", img: "Garnish_cardamomo.png", effect: "6 (Buff) ⇒ Dopo aver risolto l’attacco, spostati in qualsiasi casella del tabellone.\n1 (Debuff) ⇒ Dopo aver risolto l’attacco, l’avversario sceglie in quale casella del tabellone spostarti." }
            ].map((garnish, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center p-3 bg-gray-800 rounded-lg border border-gray-700">
                <img 
                    src={garnishImagePath(garnish.img)} 
                    alt={garnish.name} 
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md mr-0 sm:mr-4 mb-3 sm:mb-0 border-2 border-gray-600" 
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.alt = `Immagine di ${garnish.name} non trovata`;
                        target.style.display = 'none'; 
                        const placeholder = document.createElement('div');
                        placeholder.className = 'w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-gray-700 text-gray-400 text-xs rounded-md mr-0 sm:mr-4 mb-3 sm:mb-0 border-2 border-gray-600';
                        placeholder.textContent = garnish.name;
                        if (target.parentNode) {
                            target.parentNode.insertBefore(placeholder, target);
                        }
                    }}
                />
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-lg font-rubik text-white">{garnish.name}</h4> {/* Changed from text-yellow-300 */}
                  <p className="text-sm whitespace-pre-line">{garnish.effect}</p>
                </div>
              </div>
            ))}
          </div>
        </RuleSection>

        <RuleSection number="7." title="ATTACCHI E EFFETTI SPECIALI">
          <p>Ogni ginocchio ha 6 attacchi con effetti diversi. Scansiona il QR del tuo ginocchio!</p>
          <div className="overflow-x-auto mt-4 rounded-lg border border-gray-700">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Effetto</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Logo</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Cosa fa</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {[
                  { name: "Paralisi totale", logo: "Paralisi Totale.png", desc: "Il Ginocchio non può muoversi né attaccare al prossimo turno (non cumulabile)." },
                  { name: "Cura", logo: "Cura.png", desc: "Recuperi 2 Punti Vita. Non puoi superare i PV massimi." },
                  { name: "Spinta", logo: "Spinta.png", desc: "Spingi l’avversario di 2 caselle nella direzione dell'attacco. Se sbatte contro una parete, perde 1 PV. Se finisce contro un altro ginocchio, entrambi perdono 1 PV." },
                  { name: "Auto-lesionismo (Recoil)", logo: "Autolesionismo.png", desc: "Ti fai 1 danno dopo aver attaccato." },
                  { name: "Danno doppio sesso opposto", logo: "Danno sesso opposto.png", desc: "Se il giocatore avversario è di sesso diverso dal tuo, fai danno doppio." },
                  { name: "Ammosciamento", logo: "Ammosciamento.png", desc: "L’avversario fa massimo 1 danno al prossimo attacco." },
                  { name: "Tossicodipendenza", logo: "Tossicodipendenza.png", desc: "Il bersaglio è costretto ad attaccare lo stesso Ginocchio del turno precedente. Se non può, non si attacca." },
                  { name: "Spogliato!", logo: "Spogliato.png", desc: "Non può difendersi al prossimo attacco." },
                  { name: "Paura", logo: "Paura.png", desc: "Il bersaglio non può avvicinarsi a te nel prossimo turno, deve stare ad almeno 1 casella di distanza." },
                  { name: "Succhiaggio PV", logo: "Succhiaggio pv.png", desc: "Recuperi PV pari al danno che infliggi." },
                  { name: "Blocca movimento", logo: "Blocco Movimento.png", desc: "Il bersaglio non può muoversi al prossimo turno." },
                  { name: "Blocca attacco", logo: "Blocco Attacco.png", desc: "Il bersaglio non può attaccare al prossimo turno." },
                  { name: "Inverti casella", logo: "Inverti Casella.png", desc: "I bonus della casella diventano malus per l’avversario finché ci resta sopra." }
                ].map((eff, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">{eff.name}</td> {/* Changed from text-yellow-300 */}
                    <td className="px-4 py-3 whitespace-nowrap">
                        <img 
                            src={effectImagePath(eff.logo)} 
                            alt={`Logo ${eff.name}`} 
                            className="w-10 h-10 object-contain"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.alt = `Logo per ${eff.name} non trovato`;
                                target.style.display = 'none'; 
                                const placeholder = document.createElement('div');
                                placeholder.className = 'w-10 h-10 flex items-center justify-center bg-gray-700 text-gray-400 text-xs p-1 text-center';
                                placeholder.textContent = `Logo ${eff.name}`;
                                 if (target.parentNode) {
                                    target.parentNode.insertBefore(placeholder, target);
                                }
                            }}
                        />
                    </td>
                    <td className="px-4 py-3 text-sm">{eff.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RuleSection>

        <RuleSection number="8." title="VINCITORE">
          <ul className="list-disc list-inside space-y-1">
            <li>Vince chi elimina tutti gli altri Ginocchi.</li>
            <li>Ogni volta che un giocatore elimina un ginocchio avversario ne vince il possesso.</li>
            <li>In caso di pareggio, si procede con una gara di rutti. Il pareggio può avvenire in varie situazioni, la gara di rutti è sempre la soluzione. (Valutata in base all'ovazione dei presenti).</li>
          </ul>
        </RuleSection>

        <RuleSection number="9." title="MODALITÀ ABISSO ETILICO">
          <p className="text-orange-400 font-semibold">Modalità opzionale solo per i veri eroi delle avventure alcoliche.</p>
          <p className="text-red-500 font-bold">CALDAMENTE SCONSIGLIATA</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Se un giocatore perde tutti i PV del proprio Ginocchio e ha terminato tutto il proprio gin tonic, può prepararne un'altro con un ulteriore Ginocchio e rientrare in gioco.</li>
            <li>L'unico limite è la resistenza alcolica (e il numero di ginocchi in possesso ovviamente).</li>
          </ul>
        </RuleSection>
      </div>
    </div>
  );
};

export default RegolamentoPage;
