import { hashPassword } from "../src/utils/bcryptUtils";
import { prisma } from "../src/utils/prisma";
import dotenv from "dotenv";
dotenv.config();

const superAdmin = async () => {
  const password = await hashPassword(process.env.SUPERADMIN_PASSWORD!);
  try {
    await prisma.user.create({
      data: {
        name: "Super Admin",
        email: "admin@admin.com",
        password: password,
        role: "superAdmin",
      },
    });

    console.log("Super Admin is created!");
  } catch (error) {
    console.log("error seeding", error);
  }
};
superAdmin();
