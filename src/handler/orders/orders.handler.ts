import { Service } from "typedi";
import { OrderStatus, Order } from "#cds-models/ecommerce";
import { Handler, Srv, Req, Action } from "cds-routing-handlers";
import { Request } from "@sap/cds";

@Service()
@Handler()
export class OrderHandler {
    @Action("createOrder")
    public async createOrder(@Srv() srv: any, @Req() req: Request) {
        
        try {
            const { ID, status } = req.data;
            
            if(!ID || !status) {
                return req.error(400, "User and status are mandatory")
            }

            await INSERT.into(Order.name).entries({
                user_ID: ID,
                status: status
            });

            return {
                message: "Order created successfully."
            }
            
        } catch (error) {
            console.error("Error creating order:", error);
            return req.error(500, "Internal Server Error.");
        }

    } 

    @Action("getUserOrders")
    public async getUserOrders(@Srv() srv: any, @Req() req: Request) {
        try {
            
            const { user_ID } = req.data;

            if(user_ID) {
                // Add JOINs to this query to get the list of products in the carts for the orders.
                const orders = await SELECT.from(Order.name).where({user_ID});

                if(orders) {
                    return {
                        message: "User's orders.",
                        orders: orders
                    }
                } else {
                    return req.error(404, "No orders were found for this user.");
                }
            }
        } catch (error) {
            console.error("Error getting user's order:", error);
            return req.error(500, "Internal Server Error.");
        }

    }

}