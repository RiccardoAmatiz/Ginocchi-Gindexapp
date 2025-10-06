import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';

const GinPage: React.FC = () => {
  usePageMetadata({
    title: 'Il Gin | GINocchi - Gioco di Gin Collezionabili',
    description: 'Scopri i 4 distilled gin GINocchi: Bilanciato, Erbaceo, Fruttato e Speziato. Un gin premium italiano che unisce un gusto unico al mondo del gioco.',
    keywords: 'gin, distilled gin, gin premium, gin italiano, botaniche, Bilanciato, Erbaceo, Fruttato, Speziato, GINocchi - GGC, gioco da tavolo gin, etichette mignon',
    og: {
        url: 'https://www.ginocchi-ggc.it/#/gin',
    }
  });

  return (
    <div className="py-6 max-w-3xl mx-auto text-gray-200 font-roboto-mono">
      
      <img src="/images/gin/gin1.jpg" alt="Il Gin dei Ginocchi" className="w-full rounded-lg shadow-lg my-8 border-2 border-gray-700" />
      
      <section className="mb-12">
        <h1 className="text-4xl font-rubik font-bold mb-4 text-white">Il Gin</h1>
        <p className="text-lg leading-relaxed">
          <strong className="font-bold">GIN</strong>occhi è un distilled gin premium, prodotto interamente in Italia con materie prime di alta qualità. La formula è essenziale: acqua purissima, ginepro selezionato e alcol di cereali di prima scelta. Su questa solida base si sviluppano i profili aromatici del mondo <strong className="font-bold">GIN</strong>occhi: bilanciato, erbaceo, fruttato e speziato. La definizione delle quattro ricette va dallo studio delle singole botaniche nella loro essenza alla costruzione di bouquet completi dove la singola nota lascia spazio alla melodia. Ognuna delle quattro tipologie ha il suo gusto, che racconta una storia diversa e una forte identità. Il risultato è un distillato in grado di trasformare il semplice gesto di bere in un rito più ampio, un’esperienza sensoriale che va oltre il bicchiere e stimola l’immaginazione. <strong className="font-bold">GIN</strong>occhi non è solo un gioco, non è solo gin: è un mondo!
        </p>
      </section>

      <img src="/images/gin/gin2.jpg" alt="GINocchi Fruttato" className="w-full rounded-lg shadow-lg my-8 border-2 border-gray-700" />

      <section className="mb-12 space-y-4 leading-relaxed text-lg">
        <h2 className="text-3xl font-rubik font-bold mb-4 text-white"><strong className="font-bold">GIN</strong>occhi Fruttato</h2>
        <p>Un mix carnale di frutti maturi, succo e note agrumate che pungono il palato con la loro acidità e riempiono di dolcezza allo stesso tempo. <strong className="font-bold">GIN</strong>occhi Fruttato è un gin sensuale e spietato che lascia in bocca un gusto proibito.</p>
        <p><strong className="text-white">Botaniche:</strong> ginepro, arancia amara, pompelmo rosa, bergamotto, uva passa e mango.</p>
        <p><strong className="text-white">Profilo:</strong> fresco, agrumato, un succoso cuore tropicale che vi conquisterà.</p>
      </section>

      <img src="/images/gin/gin3.jpg" alt="GINocchi Bilanciato" className="w-full rounded-lg shadow-lg my-8 border-2 border-gray-700" />

       <section className="mb-12 space-y-4 leading-relaxed text-lg">
        <h2 className="text-3xl font-rubik font-bold mb-4 text-white"><strong className="font-bold">GIN</strong>occhi Bilanciato</h2>
        <p>L’eleganza prima di tutto! <strong className="font-bold">GIN</strong>occhi bilanciato unisce forza e armonia riempiendo il palato con l’equilibrio di un funambolo sospeso. Un bilico che non rassicura, ma seduce i tuoi sensi prima di inghiottirti.</p>
        <p><strong className="text-white">Botaniche:</strong> ginepro, bucce fresche di limone, pepe nero e rosmarino.</p>
        <p><strong className="text-white">Profilo:</strong> note erbacee, agrumate, speziate e balsamiche si uniscono nell’equilibrio perfetto.</p>
      </section>

      <img src="/images/gin/gin4.jpg" alt="GINocchi Erbaceo" className="w-full rounded-lg shadow-lg my-8 border-2 border-gray-700" />

      <section className="mb-12 space-y-4 leading-relaxed text-lg">
        <h2 className="text-3xl font-rubik font-bold mb-4 text-white"><strong className="font-bold">GIN</strong>occhi Erbaceo</h2>
        <p>Verde, selvaggio e inarrestabile affonda le radici nella tua bocca. Senti il fruscio delle foglie? È <strong className="font-bold">GIN</strong>occhi erbaceo. Questa forza della natura è un richiamo ancestrale che germoglia dentro di te e non lascia scampo.</p>
        <p><strong className="text-white">Botaniche:</strong> ginepro, rosmarino, timo, menta piperita, finocchietto selvanico e salvia.</p>
        <p><strong className="text-white">Profilo:</strong> intenso, fresco, dominato da note che esplodono in un finale verde e balsamico.</p>
      </section>
      
      <img src="/images/gin/gin5.jpg" alt="GINocchi Speziato" className="w-full rounded-lg shadow-lg my-8 border-2 border-gray-700" />

       <section className="mb-12 space-y-4 leading-relaxed text-lg">
        <h2 className="text-3xl font-rubik font-bold mb-4 text-white"><strong className="font-bold">GIN</strong>occhi Speziato</h2>
        <p>Caldo e penetrante come il bacio di un demonio. <strong className="font-bold">GIN</strong>occhi Speziato ti accende dall’interno con spezie rare dai profumi irresistibili: un abbraccio che brucia e non ti lascia più andare.</p>
        <p><strong className="text-white">Botaniche:</strong> ginepro, pepe nero, pepe rosa, pepe di Timut, zenzero.</p>
        <p><strong className="text-white">Profilo:</strong> speziato e pungente, un calore persistente che riempie il palato di aromi orientali.</p>
      </section>

      <img src="/images/gin/gin6.jpg" alt="Perché bere GINocchi?" className="w-full rounded-lg shadow-lg my-8 border-2 border-gray-700" />

      <section className="mb-12 space-y-4 leading-relaxed text-lg">
        <h2 className="text-3xl font-rubik font-bold mb-4 text-white">Perché bere <strong className="font-bold">GIN</strong>occhi? Perché è buono!</h2>
        <ul className="space-y-4">
            <li>
                <h3 className="text-xl font-bold text-white">Premium made in Italy</h3>
                <p>Ogni bottiglia è un prodotto di eccellenza, realizzato in Italia unendo tradizione e innovazione.</p>
            </li>
            <li>
                <h3 className="text-xl font-bold text-white">Distilled Gin</h3>
                <p>Un metodo di distillazione che esalta ogni botanica, senza compromessi.</p>
            </li>
            <li>
                <h3 className="text-xl font-bold text-white">Esperienza totale</h3>
                <p>Non stai solo bevendo gin, stai entrando in un mondo! Un abisso oscuro, collezionabile e disturbante che unisce il gusto al gioco.</p>
            </li>
        </ul>
      </section>

    </div>
  );
};

export default GinPage;