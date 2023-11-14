import { Request, Response } from "express";
import comparePassword, { hashPassword } from "../utils/bcryptUtils";
import { checkUserByEmail, getUserDataByEmail } from "../services/userService";
import { generateToken } from "../utils/jwt";

const userService = require("../services/userService");

const registerUser = async (req: Request, res: Response) => {
  try {
    const registerCredential = req.body;

    const existingUser = await userService.checkUserByEmail(
      registerCredential.email
    );
    if (existingUser) {
      return res.status(400).json({
        message: "Email has registered before, please login with your email",
      });
    }

    const hashedPassword = await hashPassword(registerCredential.password);

    const data = { ...registerCredential, password: hashedPassword };
    await userService.createUser(data, "customer");

    return res.json({ message: "User registered successfully" }).status(200);
  } catch (error) {
    console.log("error userController", error);
    return res.status(500).json({
      message: "An error occurred during user registration",
    });
  }
};

const registerAdmin = async (req: any, res: Response) => {
  const registerCredential = req.body;
  const role = req.user.role;
  console.log(role);
  if (role !== "superAdmin") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const existingUser = await userService.checkUserByEmail(
    registerCredential.email
  );
  try {
    const registerCredential = req.body;

    const existingUser = await userService.checkUserByEmail(
      registerCredential.email
    );
    if (existingUser) {
      return res.status(400).json({
        message: "Email has registered before, please login with your email",
      });
    }

    const hashedPassword = await hashPassword(registerCredential.password);

    const data = { ...registerCredential, password: hashedPassword };
    await userService.createUser(data, "admin");

    return res.json({ message: "User registered successfully" }).status(200);
  } catch (error) {
    console.log("error userController", error);
    return res.status(500).json({
      message: "An error occurred during user registration",
    });
  }
};

const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (
    !email ||
    typeof email !== "string" ||
    !password ||
    typeof password !== "string"
  ) {
    return res.status(400).json({ message: "Invalid login request" });
  }

  const loginCredential = req.body;

  const existingUser = await checkUserByEmail(loginCredential.email);
  if (!existingUser) {
    return res.status(400).json({ message: "Email address is not registered" });
  }

  const userData = await getUserDataByEmail(loginCredential.email);
  if (!userData) {
    return res.status(400).json({ message: "Failed to fetch user data" });
  }

  const checkPassword = await comparePassword(
    loginCredential.password,
    userData.password
  );
  if (!checkPassword) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = await generateToken(userData);
  return res.status(200).json({ message: "You are logged in", data: token });
};

export { registerUser, registerAdmin, Login };
