import jwt from 'jsonwebtoken'
type Payload = {
    id: string;
    role: string;
  };
  export const generateToken = (data: Payload): string => {
    const key = process.env.JWT_SECRET_KEY as string;
    return jwt.sign(data, key);
  }