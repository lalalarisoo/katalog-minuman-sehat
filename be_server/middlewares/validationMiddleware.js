module.exports = (req, res, next) => {
    const { name, price } = req.body;
    if (!name || name.trim() === '') {
      return res.status(400).json({ error: 'Nama minuman tidak boleh kosong' });
    }
    if (isNaN(price) || price <= 0) {
      return res.status(400).json({ error: 'Harga harus berupa angka lebih dari 0' });
    }
    next();
  };
  