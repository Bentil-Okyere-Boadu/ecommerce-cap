using ecommerce as my  from '../../db/schema';

service CartService @(path: '/cart') {

    @readonly entity Users as projection on my.Users;
    @readonly entity Products as projection on my.Products;   
    entity Orders as projection on my.Orders;
    entity Cart as projection on my.Cart;

    action addToCart(orderId: String, productId: String, quantity: Integer)

}