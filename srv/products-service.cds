using ecommerce as my  from '../db/schema';

service ProductsService @(path: '/products') {

    entity Products as projection on my.Products;
    
}