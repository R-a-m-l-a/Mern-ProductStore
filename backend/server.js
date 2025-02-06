import express from 'express';
import dotenv from "dotenv";
import path from 'path';
import {connectDB} from './config/db.js';
import productRoutes from "./routes/product.route.js";
import cors from "cors";

const app=express();
app.use(express.json())
app.use(cors()); 
dotenv.config();
const PORT=process.env.PORT || 3000;

const __dirname=path.resolve();
app.use("/api/products", productRoutes)
// console.log(process.env.MONGO_URI);
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))
}

app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
})

app.listen(PORT, ()=>{
    console.log("server started at http://localhost:"+PORT);
   
    //  console.log(process.env.MONGO_URI);

    connectDB();

})

//tGbcrSj64YaUMfIz