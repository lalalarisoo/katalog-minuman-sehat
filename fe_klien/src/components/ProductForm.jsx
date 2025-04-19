import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Swal from 'sweetalert2';

export default function ProductForm() {
  const { addProduct } = useContext(ProductContext);
  const [form, setForm] = useState({ name: '', category: '', price: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || form.price <= 0) {
      Swal.fire('Error', 'Nama dan harga wajib diisi', 'error');
      return;
    }

    try {
      await addProduct(form);
      Swal.fire('Berhasil', 'Produk ditambahkan', 'success');
      setForm({ name: '', category: '', price: '' });
    } catch (err) {
      Swal.fire('Gagal', 'Terjadi kesalahan', 'error');
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <h4>Tambah Minuman</h4>
      <input className="form-control mb-2" placeholder="Nama Minuman" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="form-control mb-2" placeholder="Kategori" value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <input type="number" className="form-control mb-2" placeholder="Harga" value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <button className="btn btn-primary" type="submit">Tambah</button>
    </form>
  );
}
