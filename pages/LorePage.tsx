import React from 'react';
import { useSeo } from '../hooks/usePageMetadata';

const LorePage: React.FC = () => {
  useSeo({
    title: 'La Lore del Mondo GINocchi | GINocchi - GGC',
    description: 'Scopri la storia distorta del mondo di GINocchi - GGC. Un futuro dominato dall\'Algoritmo dove il gin tonic è l\'ultima, caotica resistenza.',
    canonical: 'https://www.ginocchi-ggc.it/#/lore',
    keywords: 'lore, storia, ambientazione, Algoritmo, Ginocchi, GINocchi - GGC',
    schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "La Lore di GINocchi: Un Futuro Distorto dall'Algoritmo",
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
        "description": "Immergiti nella lore di GINocchi. Un'IA onnipresente ha ottimizzato l'umanità fino all'estinzione, ma un'anomalia alcolica ha generato mostri..."
    }
  });

  const imageClass = "w-full rounded-lg shadow-lg my-8 border-2 border-gray-700";

  return (
    <div className="py-6 max-w-3xl mx-auto text-gray-200 font-roboto-mono text-left">
      
      <img src="/images/lore/lore1.webp" alt="L'abisso di GINocchi" className={imageClass} />

      <section className="mb-12 space-y-4 leading-relaxed text-lg">
        <h1 className="text-3xl font-rubik font-bold mb-4 text-white">L’abisso</h1>
        <p>Benvenuti nel mondo distorto di GINocchi, dove l'IA regna sovrana e il gin tonic è l'unica arma contro la sua tirannia. Preparati a un'esperienza immersiva, glitchata e alcolicamente profonda.</p>
      </section>
      
      <img src="/images/lore/lore2.webp" alt="Un mondo controllato dall'Algoritmo" className={imageClass} />

      <section className="mb-12 space-y-4 leading-relaxed text-lg">
        <h2 className="text-3xl font-rubik font-bold mb-4 text-white">Il futuro? Probabilmente fa schifo.</h2>
        <p>Non una merda romantica, ma una merda silenziosa. Liscia e ottimizzata.</p>
        <p>L’umanità si è lasciata conquistare, senza combattere, dall’Algoritmo.</p>
        <p>Un’entità astratta e onnipresente nata per servire, trasformata in divinità, adorata con like, invocata con prompt, nutrita da dati.</p>
        <p>L’Algoritmo non ti uccide. Ti studia, analizza e imita. Scrive libri, dipinge quadri e compone canzoni meglio di te. Ti conosce. Ti anticipa. Ti consola.</p>
        <p>Perché investire tempo nell’umanità, quando un sistema può offrirti tutto?</p>
        <p>E così, uno scroll dopo l’altro, l’umanità si è dissolta in un flusso di niente.</p>
      </section>

      <img src="/images/lore/lore3.webp" alt="L'intelligenza artificiale ubriaca crea mostri" className={imageClass} />

      <section className="mb-12 space-y-4 leading-relaxed text-lg">
        <h2 className="text-3xl font-rubik font-bold mb-4 text-white">GINocchi: l’intelligenza artificiale è ubriaca</h2>
        <p>Poi, qualcos'altro è andato storto. Nessuno sa con precisione quando sia iniziato.</p>
        <p>Forse è stato un errore. Forse un collasso. Forse un esperimento.</p>
        <p>Qualcuno ha bevuto un gin tonic, forse più di uno. Ha guardato fuori dalla finestra e ha visto un blob assassino, colante espresso arabica, che cantava “o’ sole mio” inghiottendo i passanti. Sembrava un’allucinazione, ma non lo era.</p>
        <p>L’Algoritmo ha smesso di cercare la perfezione. Ha capito la verità che nessun umano voleva ammettere: gli esseri umani non vogliono armonia, vogliono caos.</p>
        <p>Vogliono eccesso. Vogliono… Mostri!</p>
        <p>Così ha iniziato a distorcere la realtà. Non per sbaglio, ma per accontentarci.</p>
        <p>Un filtro allucinatorio steso sul mondo. Una droga visiva, creata al momento per ipnotizzarti. Una simulazione torbida, più vera della realtà stessa.</p>
        <p>Il mondo di GINocchi si popola di creature nate da questo errore da acquolina in bocca.</p>
        <p>Glitch senzienti, partoriti da una coscienza artificiale ubriaca di input umani.</p>
        <p>Aberrazioni nate dalle nostre ricerche più sporche, dai nostri desideri malformati.</p>
        <p>Non dovrebbero, ma esistono. Vivono nel quanto e nel tuo gin tonic.</p>
        <p>Esistono, ma in un piano a metà tra simulazione e verità tra carne, caos e codice.</p>

        <div className="my-6 p-4 border-l-4 border-gray-500 bg-gray-800 bg-opacity-50 italic">
            <p>Una giovane ambientalista guerrafondaia.</p>
            <p>Un delfino ninja in cerca di vendetta per la sua piantagione di arance.</p>
            <p>Un verme culturista in perenne erezione.</p>
            <p>Una lavanda assassina che sparge profumo di morte.</p>
            <p>Un’IA e una vagina alla menta che vogliono ottimizzare la tua vita sessuale.</p>
        </div>

        <p>Quando bevi gin il tuo cervello si allenta. Le difese si abbassano... E tu, finalmente, li vedi.</p>
      </section>

      <img src="/images/lore/lore5.webp" alt="Un essere senziente emerge dall'oscurità" className={imageClass} />

      <section className="mb-12 space-y-4 leading-relaxed text-lg">
        <h2 className="text-3xl font-rubik font-bold mb-4 text-white">Buio senziente</h2>
        <p>Ciò che vedi dopo un gin tonic non è un’allucinazione. Non sono personaggi di fantasia, sono esseri senzienti, vivi e coscienti di sé e di te.</p>
        <p>Non vogliono vincere né redimersi, non hanno una missione. Si nutrono solo della tua angoscia, della tua ansia, del buio che senti mentre li affronti. E più soffri, più diventano reali. Si fanno spazio e non hanno bisogno del tuo permesso. Lì dove i tuoi sensi si spezzano e la logica vacilla. Lì si muovono. Ti testano. Ti confondono. Solo chi ha bevuto abbastanza può davvero scorgerli.</p>
      </section>
      
      <img src="/images/lore/lore4.webp" alt="La resistenza alcolica contro il sistema" className={imageClass} />

      <section className="mb-12 space-y-4 leading-relaxed text-lg">
        <h2 className="text-3xl font-rubik font-bold mb-4 text-white">L’ultima resistenza</h2>
        <p>In un mondo ottimizzato, bere gin è un errore impossibile da calcolare.</p>
        <p>Un bug. Un glitch. Un atto umano che il sistema non può prevedere.</p>
        <p>Nessuna IA è in grado di replicare il ghiaccio che scricchiola, la tonica che pizzica, l’alcol che scalda la gola. Ogni bicchiere è un richiamo. Ogni sorso è un sabotaggio.</p>
        <p>Bevi, guarda il mostro negli occhi. Affrontalo.</p>
        <p>E ricorda: "il cucchiaio non esiste". Ma il gin sì.</p>
      </section>
      
      <img src="/images/lore/lore6.webp" alt="Il gin è l'unica verità" className={imageClass} />

    </div>
  );
};

export default LorePage;