import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ProductsRoute from "./Routes/productRoute.js";
import BestSellingRoute from "./Routes/BestSellingRoute.js"
import AllProductRoute from "./Routes/AllProductsRoute.js"
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
// app.use(express.static('public'))
// app.use(express.static('../client/src/assets'))
app.use("/products", ProductsRoute);
app.use("/BestSelling", BestSellingRoute);
app.use("/Allproducts",AllProductRoute)
const PORT = process.env.PORT;
mongoose.connect('mongodb+srv://akif:akif123@atlascluster.8zpslq0.mongodb.net');
app.listen(PORT,()=>{
    console.log('Serverimize xos geldiniz');
})