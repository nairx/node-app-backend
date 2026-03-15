import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import dotenv from "dotenv";
import session from "express-session";
import { authAdmin } from "./middleware/auth.js";
import productRouter from "./routes/productRoute.js";
import storeRouter from "./routes/storeRoute.js";
import authAdminRouter from "./routes/authAdminRoute.js";
import authUserRouter from "./routes/authUserRoute.js";
import dbConnect from "./config/db.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(expressEjsLayouts);
app.set("layout", "layout");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views"); //views of this project are saved in the views folder
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
  }),
);
const startServer = async () => {
  await dbConnect();
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next()
});

//Login page
app.use("/", authAdminRouter);

//api routes
app.use("/api", authUserRouter);
app.use("/api/store", storeRouter);

//admin routes
app.use("/admin/products", productRouter);

startServer();
