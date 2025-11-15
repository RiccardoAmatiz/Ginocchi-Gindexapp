import React, { useState, useEffect, useRef } from 'react';
import { useSeo } from '../hooks/usePageMetadata';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import { CATEGORY_COLORS } from '../constants';
import { PlusIcon } from '../components/icons/PlusIcon';
import { MinusIcon } from '../components/icons/MinusIcon';

const XsPackPage: React.FC = () => {
    useSeo({
        title: 'GINocchi XS Pack | Acquista GINocchi GGC',
        description: 'Dettagli del GINocchi XS Pack. Contiene 6 GINocchi casuali, 1 dado e 25 stickers per creare il tuo campo di battaglia personalizzato.',
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

    const [quantity, setQuantity] = useState(1);
    const salePrice = 34.99;
    const originalPrice = 39.99;
    const totalPrice = (salePrice * quantity).toFixed(2).replace('.', ',');

    const incrementQuantity = () => setQuantity(prev => (prev < 99 ? prev + 1 : 99));
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const purchaseLink = `https://shop.iltuogin.it/carrello/cassa/?source=ginocchi&products[GINOCCHI-XS-0001]=${quantity}`;

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
        <div className="pt-6">
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
                    
                    <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-2xl lg:text-3xl font-roboto-mono text-gray-500 line-through">€{originalPrice.toFixed(2).replace('.', ',')}</span>
                        <span className="text-4xl lg:text-5xl font-roboto-mono" style={{ color: CATEGORY_COLORS.Bilanciato }}>€{salePrice.toFixed(2).replace('.', ',')}</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-sm font-bold rounded-md">Offerta lancio</span>
                    </div>

                    <div className="text-gray-300 space-y-4 leading-relaxed">
                        <p>Contenuto: 6 GINocchi (bottiglie di gin premium da 50 ml) selezionati casualmente, 1 dado e 25 stickers.</p>
                    </div>

                </div>
            </div>

            {/* Spacer for sticky button */}
            <div className="h-36"></div> 

            {/* Sticky "Acquista" Button */}
            <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm p-4 border-t border-gray-700 z-40">
                <div className="max-w-md mx-auto flex flex-col items-center gap-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-white text-lg">Quantità:</span>
                        <div className="flex items-center border border-gray-600 rounded-lg bg-gray-800">
                            <button onClick={decrementQuantity} className="p-3 text-white disabled:opacity-50 disabled:cursor-not-allowed" disabled={quantity <= 1} aria-label="Riduci quantità">
                                <MinusIcon className="w-5 h-5" />
                            </button>
                            <span className="w-12 text-center text-xl font-bold text-white tabular-nums">{quantity}</span>
                            <button onClick={incrementQuantity} className="p-3 text-white disabled:opacity-50 disabled:cursor-not-allowed" disabled={quantity >= 99} aria-label="Aumenta quantità">
                                <PlusIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    
                    <a href={purchaseLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                        <Button 
                            variant="category" 
                            categoryColor={CATEGORY_COLORS.Bilanciato}
                            className="w-full !text-black !text-xl"
                        >
                            Acquista ora {totalPrice}€
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default XsPackPage;