import User from "../models/User.model";

class UserController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ error: "User Already exists." });

    const data = await User.create({ name, email, password });

    res.status(200).json({ data });
  }
}

export default new UserController();
