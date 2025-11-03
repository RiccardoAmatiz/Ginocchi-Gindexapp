import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { CATEGORY_COLORS } from '../constants';
import { useSeo } from '../hooks/usePageMetadata';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { DiscordIcon } from '../components/icons/DiscordIcon';
import { YoutubeIcon } from '../components/icons/YoutubeIcon';

const HomePage: React.FC = () => {
  useSeo({
    title: 'GINocchi - Gioco di gin collezionabili',
    description: 'Chi lotta contro i mostri deve fare attenzione a non diventare lui stesso un mostro. E se tu guarderai a lungo in un Gin tonic, anche il Gin tonic vorrà guardare dentro di te.',
    canonical: 'https://www.ginocchi-ggc.it/',
    keywords: 'GINocchi, Ginocchi, gioco di gin, gin collezionabili, gioco da tavolo gin, etichette mignon, gin artigianale, gin italiano, distilled gin, GGC',
    og: {
      title: 'GINocchi - Gioco di Gin Collezionabili',
      description: 'Chi lotta contro i mostri deve fare attenzione a non diventare lui stesso un mostro. E se tu guarderai a lungo in un Gin tonic, anche il Gin tonic vorrà guardare dentro di te.'
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.ginocchi-ggc.it/",
        "name": "GINocchi - GGC",
        "description": "GINocchi è un gioco di gin collezionabili, un mondo distorto dove il gin tonic è l'unica arma. Colleziona i personaggi, scopri la lore e impara le regole del gioco.",
        "publisher": {
            "@type": "Organization",
            "name": "GINocchi - GGC",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.ginocchi-ggc.it/images/logo_completo_footer.png"
            }
        }
    }
  });

  const gindexButtonStyle = `w-full h-full !bg-[${CATEGORY_COLORS.Bilanciato}] !text-black hover:!opacity-90 focus:!ring-yellow-400`;
  const infoButtonStyle = "w-full h-full !bg-white !text-black hover:!bg-gray-300 focus:!ring-gray-500";
  const regolamentoButtonStyle = "w-full h-full !bg-black !text-white border-2 border-white hover:!bg-gray-800 focus:!ring-gray-400";
  const compraButtonStyle = `w-full h-full !py-4 !text-xl !font-black !text-white border-2 border-white bg-gradient-to-r from-categories-Bilanciato via-categories-Speziato via-categories-Erbaceo to-categories-Fruttato hover:opacity-90 focus:!ring-white`;
  
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img 
        src="/images/HEADER.webp"
        alt="GINocchi - Gioco di Gin Collezionabili" 
        className="mb-8 rounded-lg shadow-xl w-full max-w-2xl object-contain"
      />
      <h1 className="sr-only">GINocchi - Gioco di Gin Collezionabili</h1>
      <p className="text-sm mb-10 max-w-2xl text-gray-300 italic">
        Chi lotta contro i mostri deve fare attenzione a non diventare lui stesso un mostro. E se tu guarderai a lungo in un Gin tonic, anche il Gin tonic vorrà guardare dentro di te.
      </p>
      
      <div className="flex flex-wrap items-stretch justify-center gap-6 w-full max-w-5xl">
        <Link to="/gindex" className="w-full sm:w-[45%] lg:w-[30%]">
          <Button className={gindexButtonStyle}>
            GINDEX
          </Button>
        </Link>
        <Link to="/lore" className="w-full sm:w-[45%] lg:w-[30%]">
          <Button className={infoButtonStyle}>
            Cos'è{' '}<strong className="font-bold">GIN</strong>occhi?
          </Button>
        </Link>
        <Link to="/gin" className="w-full sm:w-[45%] lg:w-[30%]">
          <Button className={infoButtonStyle}>
            Il Gin
          </Button>
        </Link>

        <Link to="/acquista" className="w-full">
          <Button className={compraButtonStyle}>
            Compra GINocchi
          </Button>
        </Link>

        <Link to="/regolamento" className="w-full sm:w-[45%] lg:w-[30%]">
          <Button className={regolamentoButtonStyle}>
            Regolamento completo
          </Button>
        </Link>
        <Link to="/regolamento-ubriachi" className="w-full sm:w-[45%] lg:w-[30%]">
            <Button className={regolamentoButtonStyle}>
                Regolamento per ubriachi
            </Button>
        </Link>
         <Link to="/faq" className="w-full sm:w-[45%] lg:w-[30%]">
            <Button className={infoButtonStyle}>
                FAQ
            </Button>
        </Link>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-xl font-rubik font-bold mb-4 text-white">Seguici miserabile</h2>
        <div className="flex justify-center items-center space-x-6">
          <div className="cursor-not-allowed opacity-50" title="Instagram (presto disponibile)">
            <InstagramIcon className="w-10 h-10 text-gray-400" />
          </div>
          <div className="cursor-not-allowed opacity-50" title="Discord (presto disponibile)">
            <DiscordIcon className="w-10 h-10 text-gray-400" />
          </div>
          <a href="https://www.youtube.com/channel/UCSN8EGoUmmQjxWt14LJtNZg" target="_blank" rel="noopener noreferrer" title="Visita il nostro canale YouTube" className="text-gray-400 hover:text-white transition-colors">
            <YoutubeIcon className="w-10 h-10" />
          </a>
        </div>
      </div>

    </div>
  );
};

export default HomePage;