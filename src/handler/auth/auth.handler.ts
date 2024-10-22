import { Service } from "typedi";
import { Handler, Srv, Req, Action } from "cds-routing-handlers";
import { Request } from "@sap/cds"
import { comparePassword } from "../../utils/password";
import { User } from "#cds-models/ecommerce";

@Service()
// @Handler()
export class LoginHandler {
    // @Action('login')

    public async login ( srv: any, req: Request ) {
        const { email, password } = req.data;
        console.log(req.data)
        try {
            const user = await SELECT.one.from(User.name).where({email});
            if(!user) {
                return req.error(404, "User not found");
            }

            const validPassword = await comparePassword(password, user.password);
            if(!validPassword) {
                return req.error(401, "Wrong password.")
            }

            const data = {
                id: user.ID,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role
            }
            return { message: "Login successful", user }

        } catch(err) {
            return req.error(500, "Login failed")
        }
    }


}

