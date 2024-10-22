using ecommerce as my  from '../db/schema';

service OrderService @(path: '/orders', requires: 'authenticated-user') {

    entity Orders as projection on my.Orders;
    @readonly entity Users as projection on my.Users;
    entity Cart as projection on my.Cart;
    entity Products as projection on my.Products;   

    // Add product to cart
    // this.on('addToCart', (req: Request) => {
    //     const data = req.data;
    // }) 

    // Remove product from cart
    // this.on('removeFromCart', (req: Request) => {}) 
}