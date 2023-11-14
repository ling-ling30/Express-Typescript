import { Role } from "@prisma/client";

interface ProcessEnv {
  DATABASE_URL: string;
  SUPERADMIN_PASSWORD: string;
}
type UserType = {
  name: string;
  email: string;
  password: string;
  photo?: string;
  role: Role;
};

export interface CustomRequest extends Request {
  user?: {
    role: string;
    email: string;
  };
}
