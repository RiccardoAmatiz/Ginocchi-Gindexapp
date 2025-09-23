import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import Button from '../components/Button';

interface DrunkRuleProps {
  title: string;
  imageName: string;
  children: React.ReactNode;
}

const DrunkRule: React.FC<DrunkRuleProps> = ({ title, imageName, children }) => {
    const imagePath = `/images/regolamento_ubriachi/${imageName}`;
    return (
        <section className="mb-12 text-left">
            <h2 className="text-3xl font-rubik uppercase font-bold mb-4 text-white">
                {title}
            </h2>
            <img 
                src={imagePath} 
                alt={title} 
                className="w-full mb-4 rounded-lg shadow-lg border-4 border-gray-700"
                onError={(e) => (e.currentTarget.style.display = 'none')} 
            />
            <div className="text-lg text-gray-300 leading-relaxed">
                {children}
            </div>
        </section>
    );
};


const RegolamentoUbriachiPage: React.FC = () => {
    usePageMetadata({
        title: 'Regolamento per Ubriachi | GINocchi - GGC',
        description: 'La versione semplice e diretta del regolamento di GINocchi - GGC, per quando la mente è annebbiata ma la sete di vittoria è forte.',
        keywords: 'regolamento ubriachi, regole facili, Ginocchi, GINocchi - GGC, gioco da tavolo, gioco alcolico',
        og: {
            url: 'https://www.ginocchi-ggc.it/#/regolamento-ubriachi',
        }
    });

    const rules = [
        { title: "Regola Aurea: meglio un figlio in guerra che l’alcol per terra", imageName: "RU1.jpg", caption: "Se rovesci un gin tonic (tuo o di un avversario) hai perso." },
        { title: "Preparazione", imageName: "RU4.jpg", caption: "Scegli due bottiglie di GINocchi e mettile sul tavolo, una per giocare e l’altra per fare un gin tonic. Prepara il gin tonic e scansiona il QR code del tuo personaggio in campo per avere tutto sotto controllo." },
        { title: "Inizio partita", imageName: "RU3.jpg", caption: "Brinda insieme ai tuoi avversari urlando “Vaffanculo miserabili!”. Il primo a poggiare il bicchiere sul tavolo inizierà la partita." },
        { title: "Movimento", imageName: "RU5.jpg", caption: "Lancia il dado e muoviti sul tabellone. Se dopo esserti spostato non attacchi, bevi." },
        { title: "Attacco", imageName: "RU6.jpg", caption: "Lancia il dado, trova l’attacco corrispondente nella scheda di gioco e gridalo al tuo avversario!" },
        { title: "Difesa", imageName: "RU7.jpg", caption: "Se vieni attaccato, lancia un dado. Se ottieni lo stesso numero del dado di attacco, danno ed effetto verranno inflitti al tuo avversario." },
        { title: "Interazione", imageName: "RU8.jpg", caption: <>Sfrutta debolezze e resistenze: se il tuo personaggio si posiziona sulla casella della propria tipologia, ottieni un bonus +1 in attacco e in difesa.<br/>Inoltre: Fruttato +1 &gt; Erbaceo +1 &gt; Speziato +1 &gt; Fruttato. I GINocchi bilanciati, invece, sono neutrali.</> },
        { title: "Vittoria & Co.", imageName: "RU9.jpg", caption: "Sconfiggendo un avversario, vincerai la sua bottiglia di GINocchi in campo. L’ultimo superstite vince la partita. Se sei morto, ma hai anche finito il tuo gin tonic, puoi farne un altro e rientrare in campo con un altra bottiglia di GINocchi a tua disposizione, a tuo rischio e pericolo!" },
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
        <section className="mb-12 text-left">
            <p className="text-lg text-gray-300">
                Versione ridotta del regolamento, per ridotti stati di percezione.
                <br/>
                Nel caso avessi qualche dubbio, da lucido, puoi consultare il regolamento integrale:
            </p>
            <div className="mt-4">
                <Link to="/regolamento">
                    <Button className="!bg-black !text-white border-2 border-white hover:!bg-gray-800 focus:!ring-gray-400 w-full sm:w-auto">
                        Regolamento completo
                    </Button>
                </Link>
            </div>
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