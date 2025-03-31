// imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
//import Book from "./models/books.js";
import book_router from "./routers/book_router.js";
import user_router from "./routers/user_router.js";


// variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes


// start up
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Database is connected");
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});

app.use('/books', book_router);
app.use('/users', user_router);