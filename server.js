const path = require("path");
const express = require("express");
const app = express();
const connection = require("./connection/connect");
const bodyParser = require("body-parser");

const PORT = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/public/views/pages"));
app.get("/brands", (req, res) => {
  connection.query("select * from brands", (err, rows, fields) => {
    if (!err) {
      console.log("rows", rows);
      console.log("fields", fields);
    } else {
      console.log(err);
    }
  });
});
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(PORT, () => {
  console.log(`Server running on link:http://localhost:${PORT}`);
});
