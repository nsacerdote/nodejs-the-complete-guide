const Product = require('../models/product');

module.exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product"
  });
};

module.exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

module.exports.getProducts = (req, res) => {
  res.render("shop", { products: Product.fetchAll(), pageTitle: "Shop", path: "/" });
};
