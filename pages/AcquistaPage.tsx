import React from 'react';
import { useSeo } from '../hooks/usePageMetadata';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const BundleCard: React.FC<{
  title: string;
  imageName: string;
  items: string[];
}> = ({ title, imageName, items }) => {
  const imagePath = `/images/acquista/${imageName}`;
  
  return (
    <div className="bg-gray-900 rounded-xl shadow-2xl p-6 flex flex-col border-2 border-gray-700 hover:border-yellow-400 transition-colors duration-300 h-full">
      <img 
        src={imagePath} 
        alt={`Pack ${title}`}
        className="w-full h-64 object-cover rounded-lg mb-6 bg-gray-800"
        onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://picsum.photos/seed/' + title.replace(/\s/g, '') + '/400/300';
            target.classList.add('bg-gray-700');
        }}
      />
      <h2 className="text-3xl font-rubik font-bold mb-4 text-white">{title}</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 flex-grow">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <Button variant="secondary" disabled className="w-full mt-auto !bg-gray-600 !cursor-not-allowed">
        COMING SOON
      </Button>
    </div>
  );
};

const AcquistaPage: React.FC = () => {
    useSeo({
        title: 'Acquista | GINocchi GGC',
        description: 'Scegli il tuo pack GINocchi e inizia la battaglia. Disponibili i bundle XS e XL con tutto il necessario per giocare e bere responsabilmente.',
        canonical: 'https://www.ginocchi-ggc.it/#/acquista',
        keywords: 'acquista, compra, shop, GINocchi, bundle, pack, gin, gioco da tavolo',
    });

    const bundleXsItems = [
        "Contenuto: 6 GINocchi (bottiglie di gin premium da 50 ml) selezionati casualmente, 1 dado e 25 stickers."
    ];

    const bundleXlItems = [
        "8 GINocchi: 8 bottiglie di gin premium da 50 ml selezionate in maniera casuale",
        "I 4 garnish da gioco: pepe nero, pepe rosa, cardamomo e ginepro.",
        "1 tabellone",
        "1 dado"
    ];

    return (
        <div className="py-6 max-w-5xl mx-auto text-center">
            <h1 className="sr-only">Acquista GINocchi</h1>
            <p className="text-lg sm:text-xl font-rubik font-bold mb-8 text-gray-300">Da sobrio sei inutile, ma abbiamo la soluzione: ordina subito!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">
                 <Link to="/acquista/xs-pack" className="block h-full group">
                    <div className="bg-gray-900 rounded-xl shadow-2xl p-6 flex flex-col border-2 border-gray-700 group-hover:border-yellow-400 transition-colors duration-300 h-full">
                        <img 
                            src="/images/acquista/xspack.webp"
                            alt="Pack GINocchi XS"
                            className="w-full h-64 object-cover rounded-lg mb-6 bg-gray-800"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://picsum.photos/seed/GINocchiXS/400/300';
                                target.classList.add('bg-gray-700');
                            }}
                        />
                        <h2 className="text-3xl font-rubik font-bold mb-4 text-white">GINocchi XS</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 flex-grow">
                            {bundleXsItems.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <div className="text-center w-full mt-auto px-6 py-3 rounded-lg font-rubik font-bold text-lg shadow-md bg-yellow-400 text-black">
                            Dettagli
                        </div>
                    </div>
                </Link>
                <BundleCard
                    title="GINocchi XL"
                    imageName="xlpack.webp"
                    items={bundleXlItems}
                />
            </div>
        </div>
    );
};

export default AcquistaPage;