const db = require("../models/mysql/conection");

const creatClothe = async (req, res) => {
  let { name, img, desc, price } = req.body;
  const Clothe = {
    name,
    img,
    description: desc,
    price,
  };
  await db.query("INSERT INTO prendas SET ?", [Clothe]);
  res.redirect("/readClothe");
};
const readClothe = async (req, res) => {
  const res_get_porducts = await db.query("SELECT * FROM prendas");
  res.render("clothes", { ropa: res_get_porducts });
};
const getUpdateClothes = async (req, res) => {
  const { id } = req.params;
  const product = await db.query("SELECT * FROM prendas WHERE ID = ?", [id]);
  res.render("edit", { ropa: product[0] });
};
const updateClothes = async (req, res) => {
  const { id } = req.params;
  const {name,img,price,description} = req.body;
  const newClothe = {
    name,
    img,
    price,
    description
  }
  await db.query("UPDATE prendas set ? WHERE id = ?", [newClothe,id]);
  res.redirect('/readClothe');
};

const deleteClothes = async (req, res) => {
  const { id } = req.params;
  const res_get_porducts = await db.query(
    "DELETE FROM prendas WHERE id = ?",
    id
  );
  res.redirect("/readClothe");
};

module.exports = {
  creatClothe,
  readClothe,
  getUpdateClothes,
  deleteClothes,
  updateClothes
};
