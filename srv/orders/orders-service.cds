using ecommerce as my  from '../../db/schema';

service OrderService @(path: '/orders') {

    entity Orders as projection on my.Orders;
    @readonly entity Users as projection on my.Users;
    @readonly entity Cart as projection on my.Cart;

    action getUserOrders(user_ID: String, status: String) returns String;
    action createOrder(ID: String, status: String) returns String;

}