import { Role, User } from "@prisma/client";
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;
type decodedToken = {
  role: Role;
  email: string;
};
const generateToken = (user: User): string => {
  return jwt.sign(
    {
      role: user.role,
      email: user.email,
    },
    secret,
    { expiresIn: "12h" }
  );
};
const verifyToken = (token: string): decodedToken => {
  try {
    const decodedToken = jwt.verify(token, secret) as decodedToken;
    return decodedToken;
  } catch (error) {
    console.log("Verify token failed", error);
    throw new Error("Invalid token");
  }
};

export { generateToken, verifyToken };
