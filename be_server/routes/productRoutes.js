const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const validate = require('../middlewares/validationMiddleware');

router.get('/', controller.getAll);
router.post('/', validate, controller.create);
router.delete('/:id', controller.remove);

module.exports = router;
