import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export default function FilterBar() {
  const { filter, setFilter, search, setSearch } = useContext(ProductContext);

  return (
    <div className="d-flex justify-content-between mb-3">
      <input type="text" className="form-control me-2" placeholder="Cari minuman..." 
        value={search} onChange={(e) => setSearch(e.target.value)} />
      <select className="form-select w-25" value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">Semua Kategori</option>
        <option value="Herbal">Herbal</option>
        <option value="Jus">Jus</option>
        <option value="Tradisional">Tradisional</option>
      </select>
    </div>
  );
}
