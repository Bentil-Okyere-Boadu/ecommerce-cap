using ecommerce as my  from '../../db/schema';

service UserService @(path: '/users') {

    entity Users as projection on my.Users;

    action login(email : String, password : String) returns String;
   
}