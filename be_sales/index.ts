import express, { Application } from "express";
import cors from "cors";
import { mainConnection } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

const app: Application = express();
const port: number | string | undefined = process.env.PORT || 2288;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ limit: "20mb" }));

mainApp(app);
const server = app.listen(port, () => {
  mainConnection();
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);
  server.close(() => {
    process.exit(1);
  });
});
