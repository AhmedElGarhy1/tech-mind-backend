import { connect, set } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let mongodbUrl: string = process.env.MONGO_SECRET || "";
// if (process.env.ENV === "dev") mongodbUrl = process.env.MONGO_DEV_SECRET || "";
set("strictQuery", false);

const connectToDB = async () => {
  return connect(mongodbUrl).catch((e) => {
    console.log("Connection Error");
    console.log("----------- -------------- -----------");
    console.log(e);
  });
};

export default connectToDB;
