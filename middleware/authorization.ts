import { Request, Response, NextFunction } from "express";
import { checkUserByEmail } from "../src/services/userService";
import { verifyToken } from "../src/utils/jwt";
export const isAdmin = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - Token not provided" });
    }

    const decodedToken = verifyToken(token);

    req.user = decodedToken;

    const { role } = decodedToken;
    if (role !== "admin" && role !== "superAdmin") {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  } catch (error) {
    console.error("Error verifying token middleware", error);
    return res.status(401).json({ error: "Unauthorized - Invalid token" });
  }
};

export const isUser = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - Token not provided" });
    }

    const decodedToken = verifyToken(token);

    req.user = decodedToken;

    const { role } = decodedToken;

    next();
  } catch (error) {
    console.error("Error verifying token middleware", error);
    return res.status(401).json({ error: "Unauthorized - Invalid token" });
  }
};
