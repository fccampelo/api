import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

console.log(process.env.DB_HOST);
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.connectDateBase();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  connectDateBase() {
    try {
      mongoose.connect(process.env.DB_HOST, {
        useNewUrlParser: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new App().server;
