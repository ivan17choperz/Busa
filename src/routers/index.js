const express = require("express");
const { creatClothe, readClothe, deleteClothes,getUpdateClothes, updateClothes } = require("../controllers/clothes");
const { store } = require("../controllers/store");
const { registrerUser, log_in } = require("../controllers/users");
const db = require("../models/mysql/conection");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("home");
});
routes.get("/about", (req, res) => {
  res.render("about");
});
routes.get("/business", (req, res) => {
  res.render("business");
});
routes.get("/login", (req, res) => {
  res.render("login");
});

routes.get("/support", (req, res) => {
  res.render("support");
});

// Tienda
routes.get("/store", store);

// for registring users
routes.get("/registrer", log_in);
routes.post("/registrer", registrerUser);

//for clothes saved
routes.get("/readClothe",readClothe);
routes.post("/registrerClothe", creatClothe);
routes.get("/deleteClothe/:id",deleteClothes);
routes.get("/updateClothe/:id",getUpdateClothes);
routes.post('/updateClothe/:id',updateClothes)

//path no found
// routes.use((req,res,next)=>{
//     res.status(404).render('404')
// })

module.exports = routes;
