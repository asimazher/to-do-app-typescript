import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";
import dotenv from "dotenv";


const app: Express = express();

const PORT: string | number = process.env.PORT || 3000;

app.use(cors());
app.use(todoRoutes);
dotenv.config({path: "../.env"});

const uri: string = process.env.MONGO_URL || "";
const options = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set("useFindAndModify", false)

console.log(process.env.MONGO_URL)

mongoose
  .connect(String(process.env.MONGO_URL),)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => {
    throw error;
  });
