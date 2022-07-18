var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "avenger",
});

connection.connect(function (err) {
  if (err) console.log("err", JSON.stringify(err, undefined, 2));
  else console.log("conect sunccess");
});
module.exports = connection;
