const path = require("path");
const basePath = require("./helper/path");

const errorController = require('./controllers/error');

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(basePath, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.notFound);

app.listen(3000);
