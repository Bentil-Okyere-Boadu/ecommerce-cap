import { createCombinedHandler } from "cds-routing-handlers";
import { LoginHandler } from "../../src/handler/auth/auth.handler";
import { OrderHandler } from "../../src/handler/orders/orders.handler";

module.exports = createCombinedHandler({
    handler: [
        LoginHandler,
        OrderHandler
    ],
    middlewares: []
});