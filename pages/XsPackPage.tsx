import React, { useState, useEffect, useRef } from 'react';
import { useSeo } from '../hooks/usePageMetadata';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import { CATEGORY_COLORS } from '../constants';

const XsPackPage: React.FC = () => {
    useSeo({
        title: 'GINocchi XS Pack | Acquista GINocchi GGC',
        description: 'Dettagli del GINocchi XS Pack. Contiene 6 GINocchi casuali e 25 stickers per creare il tuo campo di battaglia personalizzato.',
        canonical: 'https://www.ginocchi-ggc.it/#/acquista/xs-pack',
        keywords: 'GINocchi XS, acquista, compra, pack, bundle, gin',
    });

    const images = [
        '/images/acquista/xspackslide1.webp',
        '/images/acquista/xspackslide2.webp',
        '/images/acquista/xspackslide3.webp',
        '/images/acquista/xspackslide4.webp',
        '/images/acquista/xspackslide5.webp',
    ];

    const mainImageFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.src = `https://picsum.photos/seed/xspackmain${currentIndex}/800/800`;
    };
    const thumbImageFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>, index: number) => {
        const target = e.target as HTMLImageElement;
        target.src = `https://picsum.photos/seed/xspackthumb${index}/100/100`;
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
            5000
        );
        return () => {
            resetTimeout();
        };
    }, [currentIndex, images.length]);

    const selectImage = (index: number) => setCurrentIndex(index);
    
    const breadcrumbItems = [
        { path: '/', label: 'Home' },
        { path: '/acquista', label: 'Acquista' },
        { path: '/acquista/xs-pack', label: 'GINocchi XS Pack' },
    ];
    
    return (
        <div className="py-6">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="max-w-6xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Image Slideshow */}
                <div 
                    className="relative"
                    onMouseEnter={resetTimeout}
                >
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-800">
                        {images.map((src, index) => (
                             <img
                                key={src}
                                src={src}
                                alt={`GINocchi XS Pack - Immagine ${index + 1}`}
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                                onError={mainImageFallback}
                            />
                        ))}
                         {/* Dot indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={`dot-${index}`}
                                    onClick={() => selectImage(index)}
                                    className={`h-3 w-3 rounded-full transition-colors ${
                                        currentIndex === index ? 'bg-yellow-400' : 'bg-gray-600 bg-opacity-75 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Vai all'immagine ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-4">
                        {images.map((src, index) => (
                            <button key={`thumb-${index}`} onClick={() => selectImage(index)} className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${currentIndex === index ? 'border-yellow-400' : 'border-transparent hover:border-gray-500'}`} aria-label={`Visualizza immagine ${index + 1}`}>
                                <img src={src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" onError={(e) => thumbImageFallback(e, index)}/>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="py-4">
                    <h1 className="text-4xl lg:text-5xl font-rubik font-bold mb-2 text-white">GINocchi XS Pack</h1>
                    <p className="font-bold text-white text-lg mb-4">Gioco di Gin Collezionabili (6×50 ml)</p>
                    <p className="text-3xl font-roboto-mono mb-6" style={{ color: CATEGORY_COLORS.Bilanciato }}>€999,99</p>

                    <div className="text-gray-300 space-y-4 leading-relaxed">
                        <ul className="list-disc list-inside space-y-3 pl-2">
                            <li><strong className="font-semibold text-white">Contenuto:</strong> 6 bottiglie mignon da 50 ml di gin al 40% vol., selezionate in maniera casuale tra i 50 GINocchi esistenti.</li>
                            <li><strong className="font-semibold text-white">Set da gioco:</strong> 25 stickers per comporre il tabellone da gioco. Gli stickers possono essere applicati dove preferisci e nella maniera che più ti piace per creare il tuo campo da gioco personalizzato.</li>
                            <li><strong className="font-semibold text-white">Fascia riutilizzabile:</strong> la fascia esterna dello XS Pack può anche essere tagliata a metà e usata come base dove posizionare gli stickers, trasformandola in un tabellone pronto all’uso.</li>
                            <li><strong className="font-semibold text-white">Made in Italy:</strong> prodotto e imbottigliato a Zola Predosa (BO), Italy. Confezione e componenti con istruzioni di raccolta differenziata (cartoncino PAP21 / vetro / alluminio).</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Spacer for sticky button */}
            <div className="h-28"></div> 

            {/* Sticky "Acquista" Button */}
            <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm p-4 border-t border-gray-700 z-40">
                <div className="max-w-md mx-auto">
                    <Button 
                        variant="category" 
                        categoryColor={CATEGORY_COLORS.Bilanciato}
                        className="w-full !text-black !text-xl"
                    >
                        Acquista ora 999,99€
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default XsPackPage;