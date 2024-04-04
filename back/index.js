import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get("/login", (req, res) => {
  res.send("<h1>Login</h1>");
});

// app.post("/register", (req, res) => {
//   console.log(req.body);
//   res.send("<h1>Register from post</h1>");
// });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
