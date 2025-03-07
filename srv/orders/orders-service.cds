using ecommerce as my  from '../../db/schema';

service OrderService @(path: '/orders') {

    entity Orders as projection on my.Orders;
    @readonly entity Users as projection on my.Users;
    @readonly entity Cart as projection on my.Cart;
    @readonly entity Products as projection on my.Products;
    //entity UserOrders as projection on my.UserOrders;
    // entity UserOrders(userId: String) as 
    //     select 
    //         Orders.user.ID as user_ID: String, 
    //         Cart.order.ID as order_ID: String, 
    //         name: String, 
    //         price: String, 
    //         category: String, 
    //         quantity: Integer, 
    //         status: String 
    //     from Orders 
    //     join Cart 
    //         on Orders.ID = Cart.order.ID 
    //     join Products 
    //         on Products.ID = Cart.product.ID
    //     where Orders.user.ID=:userId;

    action getUserOrders(user_ID: String, status: String) returns String;
    action createOrder(ID: String, status: String) returns String;

}