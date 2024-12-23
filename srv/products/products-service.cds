using ecommerce as my  from '../../db/schema';

service ProductsService @(path: '/products') {

    entity Products as projection on my.Products;

    action createProduct(name: String, price: Integer, category: String) returns String;
    
}