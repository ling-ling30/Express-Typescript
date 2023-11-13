import { Request, Response } from "express";
import { message } from "../services/helloService";

const hello = async (req: Request, res: Response) => {
  console.log("ini controller");

  const text = await message();

  return res.json({ message: text });
};

module.exports = { hello };
