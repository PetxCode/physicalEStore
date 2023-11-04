import mongoose from "mongoose";

const URL: string = "mongodb://127.0.0.1:27017/saleQTYDB";

export const mainConnection = async () => {
  await mongoose.connect(URL).then(() => {
    console.log("db connected...");
  });
};
