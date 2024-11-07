using ecommerce as my  from '../../db/schema';

service UserService @(path: '/users') {

    entity Users as projection on my.Users;
    entity Orders as projection on my.Orders;

    action login(email : String, password : String) returns String;
    action createUser(firstName : String, lastName : String, email : String, password: String, role : my.Roles) returns String;
    action deleteUser(ID: String) returns String;
    action updateUser(ID: String, firstName : String, lastName : String, email : String, role : my.Roles) returns String;
}