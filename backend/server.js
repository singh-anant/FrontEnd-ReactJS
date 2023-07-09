const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Anant@12",
  database: "authentication",
});

app.post("/register", (req, res) => {
  const sql = "INSERT INTO register (name, email, password) VALUES(?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json("ERROR");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM register WHERE email = ? AND password = ?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json("ERROR");
    }
    if (data.length > 0) return res.json("Success");
    else return res.json("Failed");
  });
});

app.listen(8081, () => {
  console.log("Listen to the PORT 8081");
});
