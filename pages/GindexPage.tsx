import React, { useState, useMemo } from 'react';
import { ALL_GINOCCHI, CATEGORIES_ORDER, CATEGORY_COLORS } from '../constants';
import { Categoria, Ginocchio } from '../types';
import GinocchioCard from '../components/GinocchioCard';
import Accordion from '../components/Accordion';

const GindexPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Categoria | 'All'>('All');

  const filteredGinocchi = useMemo(() => {
    return ALL_GINOCCHI.filter(ginocchio => {
      const matchesSearch = ginocchio.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            ginocchio.id.toString().includes(searchTerm);
      const matchesCategory = selectedCategory === 'All' || ginocchio.categoria === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const ginocchiByCategoria = useMemo(() => {
    const grouped: Record<Categoria, Ginocchio[]> = {
      [Categoria.Bilanciato]: [],
      [Categoria.Erbaceo]: [],
      [Categoria.Fruttato]: [],
      [Categoria.Speziato]: [],
    };
    filteredGinocchi.forEach(ginocchio => {
      grouped[ginocchio.categoria].push(ginocchio);
    });
    return grouped;
  }, [filteredGinocchi]);

  return (
    <div className="py-6">
      <h1 className="text-4xl font-rubik font-bold mb-8 text-center">Tutti i <strong className="font-bold">GIN</strong>occhi</h1>
      
      <div className="mb-8 p-4 bg-gray-800 rounded-lg shadow flex flex-col sm:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Cerca per nome o ID..."
          className="w-full sm:w-1/2 p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-categories-Speziato focus:border-transparent outline-none"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-label="Cerca GINocchio per nome o ID"
        />
        <select
          className="w-full sm:w-1/2 p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-categories-Speziato focus:border-transparent outline-none font-roboto-mono"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value as Categoria | 'All')}
          aria-label="Filtra GINocchi per categoria"
        >
          <option value="All">Tutte le Categorie</option>
          {CATEGORIES_ORDER.map(cat => (
            <option key={cat} value={cat} style={{color: CATEGORY_COLORS[cat]}}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {CATEGORIES_ORDER.map(categoria => {
        const ginocchiInCategory = ginocchiByCategoria[categoria];
        if (ginocchiInCategory.length === 0 && (selectedCategory !== 'All' && selectedCategory !== categoria)) {
          return null; // Don't show empty categories if filters are active and don't match
        }
        if (ginocchiInCategory.length === 0 && searchTerm !== '' && selectedCategory === 'All') {
             return null; // Don't show category if search term results in no items for this category
        }


        return (
          <Accordion 
            key={categoria} 
            title={`${categoria} (${ginocchiInCategory.length})`}
            defaultOpen={selectedCategory === 'All' || selectedCategory === categoria}
            categoryColor={CATEGORY_COLORS[categoria]}
            titleClassName="text-2xl"
          >
            {ginocchiInCategory.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {ginocchiInCategory.map(ginocchio => (
                  <GinocchioCard key={ginocchio.id} ginocchio={ginocchio} />
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center py-4">Nessun <strong className="font-bold">GIN</strong>occhio trovato per questa categoria con i filtri attuali.</p>
            )}
          </Accordion>
        );
      })}
       {filteredGinocchi.length === 0 && (
        <p className="text-gray-300 text-2xl text-center py-10">Nessun <strong className="font-bold">GIN</strong>occhio trovato. Prova a modificare la ricerca o i filtri.</p>
      )}
    </div>
  );
};

export default GindexPage;