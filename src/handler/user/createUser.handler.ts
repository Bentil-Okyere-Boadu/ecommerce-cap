import { Service } from "typedi";
import { Roles, User } from "#cds-models/ecommerce";
import { Handler, Srv, Req, Action } from "cds-routing-handlers";
import { Request } from "@sap/cds";

import { hashedPassword } from "../../utils/password";

@Service()
@Handler()
export class CreateUserHandler {
  @Action("createUser")
  public async createUser(@Srv() srv: any, @Req() req: Request) {
    try {
      const { email, role, firstName, lastName, password } = req.data;

      if (!email || !password || !firstName || !lastName) {
        return req.error(400, "Email and password are required.");
      }
      const existingUser = await SELECT.one.from(User.name).where({ email });

      if (existingUser) {
        return req.error(400, "User with this email already exists.");
      }

      const hashPass = await hashedPassword(password);
      let userRole: Roles = Roles.User
      if (role) {
            userRole = role;
        }
      
      await INSERT.into(User.name).entries({
        firstName: firstName,
        lastName: lastName,
        password: hashPass,
        email: email,
        role: userRole,
      });

    return {
        message: "User created successfully.",
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          role: userRole
        },
      };
    } catch (error) {
      console.error("Error creating user:", error);
      return req.error(500, "Internal Server Error.");
    }
  }
}
