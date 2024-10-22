using { managed } from '@sap/cds/common';
namespace ecommerce;

 type OrderStatus : String enum  {
    Active = 'Active';
    Complete = 'Completed';
    Canceled = 'Canceled';
    InProcess = 'In-Process';
    New = 'New';
}

type Roles: String enum {
    Admin = 'admin';
    Vendor = 'vendor';
    User = 'user';
}

// creating entities with authorization
entity Products @(restrict: [
    { grant: 'READ', to: 'any' },
    { grant: '*', to: Roles.Admin }
]): managed {
    key ID : UUID;
    name: String(100);
    price: Integer;
    category: String(40) null;
}

entity Users @(restrict: [
    { grant: ['READ', 'UPDATE', 'WRITE'], to: Roles.User },
    { grant: '*', to: Roles.Admin }
]): managed {
    key ID: UUID;
    firstName: String(50);
    lastName: String(50);
    email: String @unique;
    password: String;
    role: Roles;
    orders: Association to many Orders on orders.user = $self;
}

entity Orders @(restrict: [
    { grant: 'READ', to: Roles.Admin }, 
    { grant: ['READ', 'UPDATE'], where: 'createdBy = $user' }
    ])
    : managed  {
    key ID: UUID;
    user: Association to Users;
    status: OrderStatus;
}

entity Cart @(restrict: [
    { grant: ['READ', 'UPDATE'], where: 'createdBy = $user' } 
    ])
   {
    key order: Association to Orders;
    key product: Composition of many Products;
    quantity: Integer;
}

