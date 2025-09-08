
import React from 'react';
import { Link } from 'react-router-dom';

interface DrunkRuleProps {
  title: string;
  imageName: string;
  children: React.ReactNode;
}

const DrunkRule: React.FC<DrunkRuleProps> = ({ title, imageName, children }) => {
    const imagePath = `/images/regolamento_ubriachi/${imageName}`;
    return (
        <section className="mb-12 text-center">
            <h2 className="text-3xl font-rubik uppercase font-bold mb-4 text-white">
                {title}
            </h2>
            <img 
                src={imagePath} 
                alt={title} 
                className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg border-4 border-gray-700"
                onError={(e) => (e.currentTarget.style.display = 'none')} 
            />
            <div className="text-xl text-gray-200 leading-relaxed max-w-xl mx-auto">
                {children}
            </div>
        </section>
    );
};


const RegolamentoUbriachiPage: React.FC = () => {
    const rules = [
        { title: "Regola Aurea - Meglio un figlio in guerra che l’alcol per terra", imageName: "RU1.jpg", caption: "Se rovesci un gin tonic (tuo o degli altri) hai perso." },
        { title: "Preparazione", imageName: "RU2.jpg", caption: "Mettete due ginocchi sul tavolo, sceglietene uno per giocare e con l’altro fateci un gin tonic." },
        { title: "Brindisi e Inizio Partita", imageName: "RU3.jpg", caption: <>Brindate insieme urlando: "Vaffanculo Miserabili!". Chi appoggia il bicchiere per primo, inizia.</> },
        { title: "Scatena il tuo ginocchio", imageName: "RU4.jpg", caption: "Scansiona il QR code del tuo ginocchio in campo e scatena la sua vera potenza." },
        { title: "Movimento e Penalità", imageName: "RU5.jpg", caption: "Lancia il dado e muoviti del numero esatto di caselle. Se non attacchi dopo esserti spostato, bevi." },
        { title: "Attacco", imageName: "RU6.jpg", caption: "Lancia il dado, vedi a quale attacco corrisponde nella pagina del ginocchio e urlalo fortissimo in faccia al tuo avversario." },
        { title: "Difesa", imageName: "RU7.jpg", caption: "Per difenderti lancia un dado, se esce lo stesso numero del dado d’attacco dell’avversario, respingi indietro attacco ed effetto." },
        { title: "Interazione tra i gusti", imageName: "RU8.jpg", caption: "Sfrutta debolezze e resistenze dei ginocchi e se sei sulla casella della tua tipologia, hai un bonus +1 in attacco e in difesa. Fruttato +1> Erbaceo +1 > Speziato +1> Fruttato. I ginocchi bilanciati sono neutrali." },
        { title: "Sconfiggi tutti", imageName: "RU9.jpg", caption: "Se sconfiggi un avversario ti porti a casa il suo ginocchio. L'ultimo che resta vince. Se sei morto, ma hai finito il tuo gin tonic, puoi fartene un altro e ricominciare la partita con un altro ginocchio (FORTEMENTE SCONSIGLIATO)." },
    ];

  return (
    <div className="py-6 px-2">
      <img 
        src="/images/regolamento_per_ubriachi.jpg" 
        alt="Header Regolamento per ubriachi" 
        className="w-full max-w-3xl mx-auto mb-10 rounded-lg shadow-lg"
        onError={(e) => (e.currentTarget.style.display = 'none')} 
      />

      <div className="max-w-3xl mx-auto">
        <section className="mb-12 text-center">
            <p className="text-lg text-gray-300">
                Versione ridotta del regolamento, per ridotti stati di percezione.
                <br/>
                Nel caso si ponesse DAVVERO qualche dubbio, andate a vedere il regolamento esteso:
                <br/>
                <Link to="/regolamento" className="text-blue-400 hover:underline break-all">
                    https://ginocchi-gindexapp.vercel.app/#/regolamento
                </Link>
            </p>
        </section>

        {rules.map(rule => (
            <DrunkRule key={rule.title} title={rule.title} imageName={rule.imageName}>
                <p>{rule.caption}</p>
            </DrunkRule>
        ))}

      </div>
    </div>
  );
};

export default RegolamentoUbriachiPage;
