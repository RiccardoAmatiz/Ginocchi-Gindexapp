import React from 'react';
import Accordion from '../components/Accordion';
import { useSeo } from '../hooks/usePageMetadata';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const faqData = [
    {
        question: "Cos'è esattamente GINocchi?",
        answer: "GINocchi è un universo che unisce una collezione di gin artigianale italiano con un gioco da tavolo strategico da condividere con gli amici. Ogni personaggio del gioco, chiamato Ginocchio, è rappresentato da una bottiglia mignon di gin da 0,05 L. Colleziona, bevi e combatti!",
        answerText: "GINocchi è un universo che unisce una collezione di gin artigianale italiano con un gioco da tavolo strategico da condividere con gli amici. Ogni personaggio del gioco, chiamato Ginocchio, è rappresentato da una bottiglia mignon di gin da 0,05 L. Colleziona, bevi e combatti!"
    },
    {
        question: "Come si gioca?",
        answer: (
            <>
                Con degli amici e un gin tonic in mano! L'obiettivo è eliminare gli avversari in un'arena di gioco. Ogni giocatore controlla un Ginocchio con Punti Vita (PV), attacchi e abilità uniche. Il movimento e gli attacchi sono decisi dal lancio di un dado a 6 facce. Puoi trovare tutte le regole dettagliate nella pagina del regolamento.
                <div className="mt-4">
                    <Link to="/regolamento">
                        <Button variant="secondary" className="!py-1 !px-3 !text-sm">Regolamento Completo</Button>
                    </Link>
                </div>
            </>
        ),
        answerText: "Con degli amici e un gin tonic in mano! L'obiettivo è eliminare gli avversari in un'arena di gioco. Ogni giocatore controlla un Ginocchio con Punti Vita (PV), attacchi e abilità uniche. Il movimento e gli attacchi sono decisi dal lancio di un dado a 6 facce. Puoi trovare tutte le regole dettagliate nella pagina del regolamento completo."
    },
    {
        question: "Dove trovo le schede dei personaggi?",
        answer: (
             <>
                Tutte le schede dei 50 Ginocchi si trovano nel Gindex, la nostra enciclopedia digitale. All'interno della pagina troverai gli strumenti per giocare (PV, attacchi e status), il loro profilo e la chat diretta con loro per farci amicizia! (Questa chat utilizza un sistema di intelligenza artificiale. Le risposte dei Ginocchi sono generate automaticamente, possono risultare strane, disturbanti o imprecise, e non rappresentano la realtà. Non prendere sul serio i contenuti: è solo intrattenimento.)
                <div className="mt-4">
                    <Link to="/gindex">
                        <Button variant="secondary" className="!py-1 !px-3 !text-sm">Vai al Gindex</Button>
                    </Link>
                </div>
            </>
        ),
        answerText: "Tutte le schede dei 50 Ginocchi si trovano nel Gindex, la nostra enciclopedia digitale. All'interno della pagina troverai gli strumenti per giocare (PV, attacchi e status), il loro profilo e la chat diretta con loro per farci amicizia! (Questa chat utilizza un sistema di intelligenza artificiale. Le risposte dei Ginocchi sono generate automaticamente, possono risultare strane, disturbanti o imprecise, e non rappresentano la realtà. Non prendere sul serio i contenuti: è solo intrattenimento.)"
    },
    {
        question: "Che tipo di gin producete?",
        answer: (
            <>
                Produciamo un distilled gin premium 100% italiano in quattro varianti: Bilanciato, Erbaceo, Fruttato e Speziato. Ogni variante ha un profilo aromatico unico per abbinarsi al mondo di gioco. Scopri di più nella pagina dedicata.
                 <div className="mt-4">
                    <Link to="/gin">
                        <Button variant="secondary" className="!py-1 !px-3 !text-sm">Scopri il Nostro Gin</Button>
                    </Link>
                </div>
            </>
        ),
        answerText: "Produciamo un distilled gin premium 100% italiano in quattro varianti: Bilanciato, Erbaceo, Fruttato e Speziato. Ogni variante ha un profilo aromatico unico per abbinarsi al mondo di gioco. Scopri di più nella pagina dedicata al nostro gin."
    },
    {
        question: "Il gioco è adatto a tutti?",
        answer: "GINocchi è un gioco che include il consumo di alcolici e tematiche adulte quindi è riservato a un pubblico maggiorenne. Raccomandiamo sempre di bere responsabilmente.",
        answerText: "GINocchi è un gioco che include il consumo di alcolici e tematiche adulte quindi è riservato a un pubblico maggiorenne. Raccomandiamo sempre di bere responsabilmente."
    },
    {
        question: "Posso giocare senza bere alcolici?",
        answer: "No.",
        answerText: "No."
    },
    {
        question: "Dove posso acquistare GINocchi?",
        answer: "Attualmente stiamo finalizzando i canali di distribuzione. Continua a seguirci su questo sito e sui nostri canali social per tutti gli aggiornamenti sul lancio ufficiale!",
        answerText: "Attualmente stiamo finalizzando i canali di distribuzione. Continua a seguirci su questo sito e sui nostri canali social per tutti gli aggiornamenti sul lancio ufficiale!"
    }
];

const FaqPage: React.FC = () => {
    useSeo({
        title: 'FAQ - Domande Frequenti | GINocchi GGC',
        description: 'Trova le risposte alle domande più comuni su GINocchi: come si gioca, cos\'è il Gindex, dettagli sul gin e molto altro. La tua guida completa al mondo GINocchi.',
        canonical: 'https://www.ginocchi-ggc.it/#/faq',
        keywords: 'faq, domande frequenti, GINocchi, come si gioca, regolamento, gin, gindex',
        schema: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answerText
                }
            }))
        }
    });

    return (
        <div className="py-6 max-w-3xl mx-auto">
            <h1 className="text-4xl font-rubik font-bold mb-8 text-center text-white">Domande Frequenti (FAQ)</h1>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <Accordion key={index} title={item.question} titleClassName="text-lg">
                        <div className="text-gray-300 leading-relaxed">{item.answer}</div>
                    </Accordion>
                ))}
            </div>
            <div className="mt-12 text-center p-6 bg-gray-900 rounded-lg">
                <h2 className="text-2xl font-rubik font-bold mb-4 text-white">Non hai trovato una risposta?</h2>
                <p className="text-gray-400 mb-6">Se hai altre domande, curiosità o vuoi semplicemente salutarci, visita la nostra pagina contatti.</p>
                <Link to="/contatti">
                    <Button variant="primary">
                        Vai ai Contatti
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default FaqPage;