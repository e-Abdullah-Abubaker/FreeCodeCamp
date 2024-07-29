let express = require("express");
let app = express();

absolutePath = __dirname + "/views/index.html";

app.get("/json", (req, res) => {
  res.json({
    message:
      process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON" : "Hello Json",
  });
});

// Task 4
// app.use("/public", express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   res.sendFile(absolutePath);
// });

// Task 3
// app.get("/", (req, res) => {
//   res.sendFile(absolutePath);
// });

// Task 2
// app.Get("/", (req, res) => {
//     res.send("Hello Express");
// }

//Task 1
// console.log("Hello World")

module.exports = app;
