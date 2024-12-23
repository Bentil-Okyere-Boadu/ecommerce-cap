import { createCombinedHandler } from "cds-routing-handlers";
import { LoginHandler } from "../../src/handler/auth/auth.handler";
import { ProductsHandler } from "../../src/handler/products/productsHandler.handler";

module.exports = createCombinedHandler({
    handler: [
        LoginHandler,
        ProductsHandler
    ],
    middlewares: []
});