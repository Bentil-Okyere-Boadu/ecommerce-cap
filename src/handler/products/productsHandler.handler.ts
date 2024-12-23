import { Service } from "typedi";
import { Roles, Product } from "#cds-models/ecommerce";
import { Handler, Srv, Req, Action } from "cds-routing-handlers";
import { Request } from "@sap/cds";

@Service()
@Handler()
export class ProductsHandler {
    @Action('createProduct')

    public async createProduct(@Srv() srv: any, @Req() req: Request) {
        try {
            console.log(req.query)
            const { name, price, category } = req.data;

            if(!name || !price || !category) {
                return req.error(400, "Name, price and category are required.");
            }

            const existingProduct = await SELECT.one.from(Product).where({name});

            if(existingProduct) {
                return req.error(400, name + " already exists.");
            }

            await INSERT.into(Product.name).entries({
                name: name,
                price: price,
                category: category
            });

            return {
                message: "Product created successfully."
            }
        } catch (error) {
            console.error("Error creating product:", error);
            return req.error(500, "Internal Server Error.");
        }

    }
}