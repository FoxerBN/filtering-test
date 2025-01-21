import express from 'express';
import cors from 'cors';
import productRouter from "./routes/productsRoute.js"
import connectDB from "./config/mongoDB.js";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3001;
connectDB();



app.use("/api/products", productRouter);

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});