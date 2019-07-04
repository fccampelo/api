import express from "express";
import mongoose from "mongoose";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.connectDateBase();
  }

  middlewares() {
    this.server.use(express.json());
  }

  connectDateBase() {
    try {
      mongoose.connect(
        "mongodb://user:user123@ds117489.mlab.com:17489/connector",
        {
          useNewUrlParser: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export default new App().server;
