import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

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
