import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import {
  registerValidator,
  loginValidator,
  postValidator,
} from "./validations.js";
import checkAuth from "./utils/checkAuth.js";
import { login, register, getMe } from "./controllers/UserController.js";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "./controllers/PostContoller.js";

import handleValidationsError from "./utils/handleValidationsError.js";

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.n3k1t5k.mongodb.net/wasdblog?retryWrites=true&w=majority"
  )
  .then(console.log("DB OK"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/uploads", express.static("uploads"));

const port = 5554;

app.get("/", (req, res) => res.json("hello"));

app.post("/auth/login", loginValidator, handleValidationsError, login);

app.post("/auth/register", registerValidator, handleValidationsError, register);

app.get("/auth/me", checkAuth, getMe);

app.post("/posts", postValidator, handleValidationsError, checkAuth, create);

app.get("/posts", getAll);

app.get("/posts/:id", getOne);

app.delete("/posts/:id", checkAuth, remove);

app.patch("/posts/:id", checkAuth, postValidator, handleValidationsError, update);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `uploads/${req.file.originalname}`,
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server start on port " + port);
});
