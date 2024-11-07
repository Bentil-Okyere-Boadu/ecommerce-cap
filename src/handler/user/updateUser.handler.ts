import { Service } from "typedi";
import { Request } from "@sap/cds";
import { User } from "#cds-models/ecommerce";
import { Handler, Req, Action, Srv } from "cds-routing-handlers";

/**
 * Deleting/Updating  a model can be done using DEL request on the OData model. 
 * Using an action for deletion or update is done only when there is 
 * a custom behviour to be done during DEL or PUT.
 * This was done just for demonstration purposes. 
 */
@Service()
@Handler()
export class UpdateUserHandler {
    @Action('updateUser')
    public async updateUser (@Srv() srv: any, @Req() req: Request) {
        try {

            const { ID, email, role, firstName, lastName } = req.data;
        
            // Check if user exists
            const user = await SELECT.one.from(User).where({ID});
            if(!user) {
                req.error(404, "User not found");
                return
            }

            await UPDATE(User).set({
                email: email, 
                role: role,
                firstName: firstName, 
                lastName: lastName
            }).where({ID: ID});

            return req.reply({
                message: "User updated successfully"
            })
        } catch (error) {
            console.error("Error updating user:", error);
            return req.error(500, "Something went wrong while updating user. Internal server error.")
        }
        
    }
}