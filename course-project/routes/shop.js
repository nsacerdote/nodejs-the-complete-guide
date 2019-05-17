const express = require('express');

const products = require("./admin").products;

const router = express.Router();

router.get('/', (req, res) => {
  console.log(products);
  res.render('shop', {products : products, pageTitle: 'Shop', path: '/'});
});

module.exports = router;
