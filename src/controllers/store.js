const db = require("../models/mysql/conection");

// pagina de carga del registro
const store = async (req, res) => {
  const res_get_porducts = await db.query("SELECT * FROM prendas");
  res.render('store',{ropa:res_get_porducts})
};

module.exports = {store};