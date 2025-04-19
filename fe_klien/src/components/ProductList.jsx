import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';

export default function ProductList() {
  const { products, filter, search, view } = useContext(ProductContext);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === '' || p.category === filter)
  );

  return (
    <div className={`row ${view === 'grid' ? 'row-cols-1 row-cols-md-3 g-4' : ''}`}>
      {filtered.map(p => (
        <div key={p.id} className={view === 'grid' ? '' : 'mb-2'}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
