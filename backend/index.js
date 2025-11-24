import { configDotenv } from 'dotenv';
configDotenv();
import express from 'express';
import cors from 'cors';
import dbconfig from './db/dbconfig.js';
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import shopRouter from './routes/shopRoute.js';
import itemRouter from './routes/itemRoute.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  "origin": "*",
  "credentials":true,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));

app.set('view engine', 'ejs');
app.set('views', './views');
app.get("/", (req, res) => {
  console.log("API test endpoint hit");
  res.status(200).json({
    success: true,
    message: "🚀 API is working perfectly!",
  });
});
app.use('/api', userRouter);
app.use('/', authRouter);
app.use('/api/shop', shopRouter);
app.use('/api/item', itemRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
    dbconfig();
})