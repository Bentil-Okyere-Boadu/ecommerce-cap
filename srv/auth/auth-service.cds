using ecommerce as my  from '../../db/schema';

service AuthService @(path: '/auth') {
    entity Users as projection on my.Users;

    action login(email : String, password : String) returns String;
}