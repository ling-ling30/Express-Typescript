import bcrypt from "bcryptjs";

const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(9);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing passwords");
  }
};

const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    const result = await bcrypt.compare(password, hashedPassword);
    return result;
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
};

export default comparePassword;
export { hashPassword, comparePassword };
