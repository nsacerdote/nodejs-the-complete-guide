const products = [];

module.exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product"
  });
};

module.exports.postAddProduct = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

module.exports.getProducts = (req, res) => {
  res.render("shop", { products: products, pageTitle: "Shop", path: "/" });
};
