import mongoose from "mongoose";

class User extends mongoose.Schema {
  constructor() {
    super(
      {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
      },
      { timestamps: true }
    );
  }
}

export default mongoose.model("User", new User());
