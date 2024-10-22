import { createCombinedHandler } from "cds-routing-handlers";
import { LoginHandler } from "../../src/handler/auth/auth.handler";

module.exports = createCombinedHandler({
    handler: [
        LoginHandler
    ],
    middlewares: []
});