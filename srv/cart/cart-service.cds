using ecommerce as my  from '../../db/schema';

service CartService @(path: '/cart') {

    entity Orders as projection on my.Orders;
    @readonly entity Users as projection on my.Users;
    entity Cart as projection on my.Cart;
    entity Products as projection on my.Products;   

}