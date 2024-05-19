import { registerProduct } from "../services/database_sqlite";

const product1 = {
    ProductName: 'Product A',
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: 10,
    UnitPrice: 20.5,
    UnitsInStock: 100,
    UnitsOnOrder: 50,
    CompanyId: 'Q'
};

const product2 = {
    ProductName: 'Product B',
    SupplierID: 2,
    CategoryID: 2,
    QuantityPerUnit: 20,
    UnitPrice: 15.0,
    UnitsInStock: 150,
    UnitsOnOrder: 30,
    CompanyId: 'Q'
};

const product3 = {
    ProductName: 'Product C',
    SupplierID: 3,
    CategoryID: 1,
    QuantityPerUnit: 5,
    UnitPrice: 25.0,
    UnitsInStock: 50,
    UnitsOnOrder: 20,
    CompanyId: 'Q'
};

const product4 = {
    ProductName: 'Product D',
    SupplierID: 4,
    CategoryID: 3,
    QuantityPerUnit: 8,
    UnitPrice: 10.0,
    UnitsInStock: 80,
    UnitsOnOrder: 10,
    CompanyId: 'Q'
};

const product5 = {
    ProductName: 'Product E',
    SupplierID: 5,
    CategoryID: 1,
    QuantityPerUnit: 12,
    UnitPrice: 30.0,
    UnitsInStock: 60,
    UnitsOnOrder: 15,
    CompanyId: 'Q'
};

const product6 = {
    ProductName: 'Product F',
    SupplierID: 6,
    CategoryID: 2,
    QuantityPerUnit: 7,
    UnitPrice: 22.0,
    UnitsInStock: 90,
    UnitsOnOrder: 25,
    CompanyId: 'Q'
};

const product7 = {
    ProductName: 'Product G',
    SupplierID: 7,
    CategoryID: 3,
    QuantityPerUnit: 15,
    UnitPrice: 18.5,
    UnitsInStock: 70,
    UnitsOnOrder: 35,
    CompanyId: 'Q'
};

const product8 = {
    ProductName: 'Product H',
    SupplierID: 8,
    CategoryID: 1,
    QuantityPerUnit: 6,
    UnitPrice: 24.5,
    UnitsInStock: 40,
    UnitsOnOrder: 20,
    CompanyId: 'Q'
};

const product9 = {
    ProductName: 'Product I',
    SupplierID: 9,
    CategoryID: 2,
    QuantityPerUnit: 11,
    UnitPrice: 12.0,
    UnitsInStock: 130,
    UnitsOnOrder: 40,
    CompanyId: 'Q'
};

const product10 = {
    ProductName: 'Product J',
    SupplierID: 10,
    CategoryID: 3,
    QuantityPerUnit: 9,
    UnitPrice: 16.5,
    UnitsInStock: 120,
    UnitsOnOrder: 45,
    CompanyId: 'Q'
};

export default function ProductMock() {
    registerProduct(product1);
    registerProduct(product2);
    registerProduct(product3);
    registerProduct(product4);
    registerProduct(product5);
    registerProduct(product6);
    registerProduct(product7);
    registerProduct(product8);
    registerProduct(product9);
    registerProduct(product10);
}
