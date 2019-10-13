import jwt from "jsonwebtoken";
import User from "../models/User.model";
import oauthConfig from "../config/oauth";

import { checkPassword } from "../utils";

class SassionController {
  async create(req, res) {
    const { email, password } = req.body;

    // Verifica se o usuário existe
    const user = await User.findOne({ email });

    // verificar se o usuário existe
    if (!user) return res.status(404).json({ error: "user not found" });

    const passwordIsValid = await checkPassword(password, user.password);
    if (!passwordIsValid) {
      return res.status(400).json({ error: "different password" });
    }
    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id, name, email }, oauthConfig.secretKeyJWT, {
        expiresIn: "7d",
      }),
    });
  }
}

export default new SassionController();
