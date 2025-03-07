import { Service } from "typedi";
import { Cart, Order } from "#cds-models/ecommerce";
import { Handler, Srv, Req, Action } from "cds-routing-handlers";
import { Request } from "@sap/cds";
import { OrderHandler } from "../orders/orders.handler";

@Service()
@Handler()


export class CartHandler {
    orders = new OrderHandler();

    @Action('addToCart')
    public async addToCart (@Srv() srv: any, @Req() req: Request) {
        try {
            const {orderId, productId, quantity} = req.data;
            console.log(req.data)

            if(orderId) {
                const cart = await SELECT.one.from(Cart).where({orderId});
                
                if(!cart) {
                    return req.error(404, "Invalid order ID. Could not find cart with associated order ID.")
                }

                await UPDATE(Cart).set({
                    product: productId,
                    quantity: quantity
                }).where({order: orderId})

            } else {
                console.log(req.query)
               //return req.user
                 
            }

        } catch (error) {
            console.log(error, "errr")
            return req.error(500, "Something wrong happened");
        }
    }
}