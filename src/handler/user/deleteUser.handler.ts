import { Service } from "typedi";
import { Request } from "@sap/cds";
import { User } from "#cds-models/ecommerce";
import { Handler, Req, Action } from "cds-routing-handlers";

/**
 * Deleting/Updating  a model can be done using DEL request on the OData model. 
 * Using an action for deletion or update is done only when there is 
 * a custom behviour to be done during DEL or PUT.
 * This was done just for demonstration purposes. 
 */
@Service()
@Handler()
export class DeleteUserHandler {
    @Action("deleteUser")
    public async deleteUser(srv: any, @Req() req: Request) {
        try {
            const { ID } = req.data;
            
            // Retrieve users by ID and check if they exist
            const users = await SELECT.one.from(User.name).where({ ID });

            if (users.length === 0) {
                return req.error(404, "No users found for the provided IDs");
            }

            // Delete the users in batch
            await DELETE.from(User.name).where({ ID });

            return req.reply({
                message: "Users deleted successfully",
            });

        } catch (error) {
            console.log('Error during user deletion:', error);
            return req.error(500, "Internal server error");
        }

    }
}