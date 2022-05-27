const db = require("../models/mysql/conection");

// pagina de carga del registro
const log_in = (req, res) => {
  res.render("registrer");
};
//registrado usuarios
const registrerUser = async (req, res) => {
  let { id, name, address, number, user, password } = req.body;
  const User = {
    id,
    name,
    address,
    phone: number,
    user_name: user,
    pass_word: password,
  };
  await db.query("INSERT INTO users SET ?", [User]);
  res.send(User);
};

module.exports = { registrerUser, log_in };
