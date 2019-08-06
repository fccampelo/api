import { Router } from "express";

import UserController from "./controllers/User.controller";
import SessionController from "./controllers/SessionController";

// Middleweres
import middlewares from "./middlewares/index";

// Routes
const routes = new Router();

const { auth } = middlewares;

routes.post("/users", UserController.create);
routes.post("/session", SessionController.create);

// access the logged routes
routes.use(auth);

export default routes;
