const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');
// ==> Definindo as rotas do CRUD - 'User':
// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/user', userController.createProduct);
module.exports = router;