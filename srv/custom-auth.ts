import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import { User } from '../src/utils/types';

type Req = Request & { user: User, tenant: string };

export default function custom_auth(req: Req, res: Response, next: NextFunction){
    try {

        if (req.path === "/login" ) {
         return next();
        }

        const authorizationHeader = req.headers["authorization"];
        const bearerToken = authorizationHeader?.split(" ")[1];
    
        if (!bearerToken) {
          return res.status(401).json({
            error: "Unauthorized. Token missing or invalid format.",
          });
        }
    
        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
          return res.status(500).json({
            error: "JWT_SECRET_KEY environment variable is not defined.",
          });
        }
    
        const decodedToken: any = jwt.verify(bearerToken, secretKey);
        req.query.user = {
          id: decodedToken.id,
          role: decodedToken.role,
        };
    
        next();
      } catch (error) {
        console.error("Token verification failed:", error);
    
        if (error instanceof jwt.TokenExpiredError) {
          return res.status(401).json({ error: "Token expired" });
        }
        if (error instanceof jwt.JsonWebTokenError) {
          return res.status(401).json({ error: "Invalid token" });
        }
    
        return res.status(401).json({ error: "Unauthorized" });
      }
}
