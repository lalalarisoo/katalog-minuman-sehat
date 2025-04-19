import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('grid');
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addProduct = async (data) => {
    await axios.post('http://localhost:5000/api/products', data);
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        view,
        setView,
        filter,
        setFilter,
        search,
        setSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
