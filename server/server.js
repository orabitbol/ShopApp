const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "usersql",
  host: "localhost",
  password: "password",
  database: "shopapp",
});



app.post("/register", (req, res) => {
  console.log("body: ", req.body)
  const userName = req.body.userName
  const password = req.body.password;
  const email = req.body.email;


  db.query(
    "INSERT INTO users (userName,password, email) VALUES (?,?,?)",
    [userName, password, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Success Register");
      }
    }
  );
});


app.post("/login", (req, res) => {
  console.log("body: ", req.body)
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ? ",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result == "") {
        res.send({ massage: "Wrong email/password combination!" })
      }
      else {
        res.send(result)
      }
    }
  );
});




app.listen(5000, () => { console.log("Server started on port 5000") })