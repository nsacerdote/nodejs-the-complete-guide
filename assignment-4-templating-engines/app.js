const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const users = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render('index', {pageTitle: 'Enter User'})
});
app.get("/users", (req, res) => {
    res.render('users', {pageTitle: 'User List', users : users})
});

app.post("/users", (req, res) => {
    users.push({ name: req.body.name });
    res.redirect("/users");
});

app.use((req, res) => {
    res.status(404).send();
});

app.listen(3000);
