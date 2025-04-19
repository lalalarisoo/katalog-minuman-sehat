import React from 'react';
import ProductForm from '../components/ProductForm';
import FilterBar from '../components/FilterBar';
import ProductList from '../components/ProductList';
import ToggleView from '../components/ToggleView';

export default function Home() {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Katalog Minuman Sehat</h2>
      <ProductForm />
      <FilterBar />
      <ToggleView />
      <ProductList />
    </div>
  );
}
