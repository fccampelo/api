import bcrypt from "bcryptjs";

const checkPassword = (password, passwordCheck) => {
  return bcrypt.compare(password, passwordCheck);
};

export default checkPassword;
