import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Server is running on port ${process.env.BACKEND_PORT.toString()}`);
});
