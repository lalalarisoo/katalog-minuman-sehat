const Product = require('../models/productModel');

exports.getAll = (req, res) => {
  Product.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.create = (req, res) => {
  const { name, category, price } = req.body;
  Product.create({ name, category, price }, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Product created successfully', id: result.insertId });
  });
};

exports.remove = (req, res) => {
  const { id } = req.params;
  Product.remove(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Product deleted successfully' });
  });
};
