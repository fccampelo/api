import User from "../models/User.model";
import bcrypt from "bcryptjs";

class UserController {
  async create(req, res) {
    const { name, email } = req.body;

    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ error: "User Already exists." });

    const password = bcrypt.hash(req.body.password, 8);

    const data = await User.create({ name, email, password });

    res.status(200).json({ data });
  }
}

export default new UserController();
