import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { ProductContext } from '../context/ProductContext';

export default function ProductCard({ product }) {
  const { deleteProduct } = useContext(ProductContext);

  const handleDelete = () => {
    Swal.fire({
      title: 'Yakin hapus?',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product.id);
        Swal.fire('Dihapus!', '', 'success');
      }
    });
  };

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Kategori: {product.category}</p>
        <p className="card-text text-success fw-bold">Rp {product.price}</p>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Hapus
        </button>
      </div>
    </div>
  );
}
