const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const listItems = [];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = new Date().getDay();

app.get("/", (req, res) => {
  res.render("list", { TodoListName: days[day], listItems: listItems });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;
  if (item !== "") listItems.push(item);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
