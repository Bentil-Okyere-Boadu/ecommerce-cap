import { createCombinedHandler } from "cds-routing-handlers";
import { LoginHandler } from "../../src/handler/auth/auth.handler";
import { CartHandler } from "../../src/handler/cart/cart.handler";

module.exports = createCombinedHandler({
    handler: [
        LoginHandler,
        CartHandler
    ],
    middlewares: []
});