import bcrypt from "bcrypt";
// import crypto from "crypto";

export const hashedPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

// export const generatePassword = (length: number = 6): string => {
//   return crypto
//     .randomBytes(Math.ceil(length / 2))
//     .toString("hex")
//     .slice(0, length);
// };
