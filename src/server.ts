import express from "express";
import logger from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import routes from "./routes/index.js";
import connectToDB from "./config/database.js";

const app = express();

// middle ware
app.use(logger("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use("/api", routes);

const PORT: number | string = process.env.PORT || 8000;

async function main() {
  return connectToDB().then(() => {
    app.listen(PORT, () => {
      console.log("Connected to DB && Listening on PORT " + PORT);
    });
  });
}
main();

export default main;
