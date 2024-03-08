const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello, this is Home");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDb Connected");
    listen();
  })
  .catch((e) => {
    console.log(e);
  });

const listen = () => {
  app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
  });
};

const SignUpRoute = require("./routes/SignUp.cjs");
app.use("/signUpApi", SignUpRoute);

const TodoRoute = require("./routes/Todo.cjs");
app.use("/todoapi", TodoRoute);

const PostRoute = require("./routes/Post.cjs");
app.use("/postapi", PostRoute);
