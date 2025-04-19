import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export default function ToggleView() {
  const { view, setView } = useContext(ProductContext);

  return (
    <div className="mb-3 text-end">
      <button className="btn btn-outline-primary me-2" onClick={() => setView('grid')}>
        Grid
      </button>
      <button className="btn btn-outline-secondary" onClick={() => setView('list')}>
        List
      </button>
    </div>
  );
}
