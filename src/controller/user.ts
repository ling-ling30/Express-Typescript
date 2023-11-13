import { Request, Response } from "express";

const getUser = async (req: Request, res: Response) => {
  return res.json({ message: "hello world" });
};

export { getUser };
