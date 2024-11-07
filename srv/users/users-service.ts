import { createCombinedHandler } from "cds-routing-handlers";
import { LoginHandler } from "../../src/handler/auth/auth.handler";
import { CreateUserHandler } from "../../src/handler/user/createUser.handler";
import { DeleteUserHandler } from "../../src/handler/user/deleteUser.handler";
import { UpdateUserHandler } from "../../src/handler/user/updateUser.handler";

module.exports = createCombinedHandler({
    handler: [
        LoginHandler,
        CreateUserHandler,
        DeleteUserHandler,
        UpdateUserHandler
    ],
    middlewares: []
});