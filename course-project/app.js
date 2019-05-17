const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require('express-handlebars');

const app = express();

app.engine('handlebars', expressHbs({
  defaultLayout: 'main-layout'
}));
//app.set('view engine', 'pug');
app.set('view engine', 'handlebars');
app.set('views', 'views');

const adminRoutes = require("./routes/admin").routes;
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).render("404", {pageTitle: 'Not Found'});
});

app.listen(3000);
