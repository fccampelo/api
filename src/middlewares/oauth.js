import jwt from "jsonwebtoken";
import { promisify } from "util";

import authConfig from "../config/oauth";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: "Token not provided" });

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secretKeyJWT);
    req.userId = decoded.id;
  } catch (error) {
    return res.status(401).json({ error: "Toekn Invalid" });
  }
  next();
};
