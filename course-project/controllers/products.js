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
  Product.fetchAll(
    products => res.render("shop", { products, pageTitle: "Shop", path: "/" })
  );
};
