const express=require('express');
const exhbs=require('express-handlebars');
require("dotenv").config();
const app=express();
let port = process.env.PORT || 8000;

//express handlebars middleware
app.engine("handlebars", exhbs());
app.set("view engine", "handlebars");

app.use('/public',express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public"));
app.use('/cdn',express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home",{title:"Home"}))
app.get("**", (req, res) => res.render("404",{title:"Page not Found "}));

app.listen(port, (err) => {
    if (err) throw err;
      console.log("app is running on port number " + port);
    });