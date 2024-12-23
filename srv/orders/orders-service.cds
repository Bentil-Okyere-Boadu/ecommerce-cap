using ecommerce as my  from '../../db/schema';

service OrderService @(path: '/orders') {

    entity Orders as projection on my.Orders;
    @readonly entity Users as projection on my.Users;
    entity Cart as projection on my.Cart;
    @readonly entity Products as projection on my.Products;   

}