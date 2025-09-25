import React from 'react';
import { useSeo } from '../hooks/usePageMetadata';
import { ExternalLinkIcon } from '../components/icons/ExternalLinkIcon';

const ContattiPage: React.FC = () => {
    useSeo({
        title: 'Contatti | GINocchi GGC',
        description: 'Contatta il team di GINocchi per domande, supporto o collaborazioni. Trova i nostri riferimenti e seguici nel nostro delirio creativo.',
        canonical: 'https://www.ginocchi-ggc.it/#/contatti',
        keywords: 'contatti, supporto, email, GINocchi GGC, collaborazione',
        schema: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Pagina Contatti di GINocchi GGC",
            "description": "Informazioni per contattare il team di GINocchi.",
            "url": "https://www.ginocchi-ggc.it/#/contatti"
        }
    });

    return (
        <div className="py-6 max-w-3xl mx-auto text-gray-200">
            <h1 className="text-4xl font-rubik font-bold mb-8 text-center text-white">Contatti</h1>

            <div className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-8">
                <section>
                    <h2 className="text-2xl font-rubik font-bold mb-4 text-white">Informazioni Generali</h2>
                    <p className="leading-relaxed">
                        Per qualsiasi domanda sul gioco, sulla lore o sul nostro gin, o se semplicemente vuoi condividere il tuo odio per l'universo, puoi scriverci all'indirizzo email qui sotto.
                    </p>
                    <div className="mt-4">
                        <a href="mailto:[TODO: inserire email]" className="text-lg font-roboto-mono text-yellow-400 hover:text-yellow-300 underline inline-flex items-center">
                            info@ginocchi-ggc.it [TODO]
                        </a>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-rubik font-bold mb-4 text-white">Collaborazioni e Stampa</h2>
                    <p className="leading-relaxed">
                        Sei un content creator, un giornalista o un'entità altrettanto disturbata e vuoi collaborare con noi? Scrivici per proposte, materiali per la stampa o interviste.
                    </p>
                    <div className="mt-4">
                         <a href="mailto:[TODO: inserire email]" className="text-lg font-roboto-mono text-yellow-400 hover:text-yellow-300 underline inline-flex items-center">
                            press@ginocchi-ggc.it [TODO]
                        </a>
                    </div>
                </section>
                
                <section>
                    <h2 className="text-2xl font-rubik font-bold mb-4 text-white">Dati Aziendali</h2>
                    <p className="leading-relaxed font-roboto-mono text-gray-400">
                        GINocchi - GGC [TODO]<br/>
                        Via del Delirio, 42 [TODO]<br/>
                        00100, Roma (RM), Italia [TODO]<br/>
                        P.IVA: IT12345678901 [TODO]
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ContattiPage;
