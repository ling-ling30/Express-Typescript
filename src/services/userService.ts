import { Role, User } from "@prisma/client";
import { prisma } from "../utils/prisma";
import comparePassword from "../utils/bcryptUtils";

type UserType = {
  name: string;
  email: string;
  password: string;
  photo?: string;
  role: Role;
};

const createUser = async (data: UserType, role: Role) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email.toLowerCase(),
        password: data.password,
        photo: data.photo,
        role,
      },
    });
    return newUser;
  } catch (error) {
    console.log("Error on userService createUser", error);
    throw new Error("Failed to create user.");
  }
};
const checkUserByEmail = async (
  email: string
): Promise<boolean | undefined> => {
  try {
    const result = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (!result) {
      return false;
    }
    return true;
  } catch (error) {
    console.log("Error on userService createUser", error);
  }
};

const getUserDataByEmail = async (email: string): Promise<User | undefined> => {
  try {
    const data = await prisma.user.findUnique({
      where: { email },
    });

    return data!;
  } catch (error) {
    console.error("Failed fetching user data", error);
    return undefined;
  }
};

export { createUser, checkUserByEmail, getUserDataByEmail };
