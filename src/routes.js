import { Router } from "express";

import UserController from "./controllers/User.controller";

// Routes
const routes = new Router();

routes.post("/users", UserController.create);

export default routes;
