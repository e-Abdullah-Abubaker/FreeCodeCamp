let express = require("express");
let app = express();

let bodyParser = require("body-parser");

//Task 1
// console.log("Hello World")

// Task 2
// app.Get("/", (req, res) => {
//     res.send("Hello Express");
// }

// Task 3
// app.get("/", (req, res) => {
//   res.sendFile(absolutePath);
// });

// Task 4
absolutePath = __dirname + "/views/index.html";
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

// Task 5
// app.get("/json", (req, res) => {
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     res.json({ message: "HELLO JSON" });
//   } else {
//     res.json({ message: "Hello json" });
//   }
// });

// Task 6
// app.use((req, res, next) => {
//   var string = req.method + " " + req.path + " - " + req.ip;
//   console.log(string);
//   next();
// });

// Task 7
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({
      time: req.time,
    });
  },
);

// Task 8
// app.get("/:word/echo", (req, res) => {
//   res.json({ echo: req.params.word });
// });

// Task 9
app.get("/name", (req, res) => {
  res.json({
    name: req.query.first + " " + req.query.last,
  });
});

// Task 10
app.use(bodyParser.urlencoded({ extended: false }));

// Task 11
app.post("/name", (req, res) => {
  // console.log(req.body);
  res.json({ name: req.body.first + " " + req.body.last });
});

// Task 12

module.exports = app;
