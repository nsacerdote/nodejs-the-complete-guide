const fs = require('fs');
const path = require('path');
const basePath = require('../helper/path');
const productsFile = path.join(basePath, 'data', 'products.json');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    Product.fetchAll(
      products => {
        products.push(this);
        fs.writeFile(productsFile, JSON.stringify(products));
      }
    );
  }

  static fetchAll(cb) {
    fs.readFile(productsFile, (err, fileContent) => {
      if (!err) {
        cb(JSON.parse(fileContent));
      } else {
        cb([]);
      }
    });
  }
};
