import * as SQLite from 'expo-sqlite';

const dbName = 'company_app.db';

const db = SQLite.openDatabase(dbName);

const createTableProducts = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS products (
                ProductID INTEGER PRIMARY KEY AUTOINCREMENT,
                ProductName TEXT,
                SupplierID INTEGER,
                CategoryID INTEGER,
                QuantityPerUnit INTEGER,
                UnitPrice REAL,
                UnitsInStock INTEGER,
                UnitsOnOrder INTEGER,
                CompanyId TEXT
            );`
        );
    });
};

export const registerProductDB = (product) => {
    createTableProducts()
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM products WHERE ProductName = ? AND SupplierID = ? AND CompanyId = ?',
                [product.ProductName, product.SupplierID, product.CompanyId],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        console.log('Produto já cadastrado!');
                    } else {
                        tx.executeSql(
                            'INSERT INTO products (ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, CompanyId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                            [
                                product.ProductName,
                                product.SupplierID,
                                product.CategoryID,
                                product.QuantityPerUnit,
                                product.UnitPrice,
                                product.UnitsInStock,
                                product.UnitsOnOrder,
                                product.CompanyId
                            ],
                            (_, { rowsAffected }) => {
                                if (rowsAffected > 0) {
                                    console.log('Produto cadastrado com sucesso!');
                                } else {
                                    console.log('Erro ao cadastrar o produto.');
                                }
                            }
                        );
                    }
                }
            );
        },
        error => console.error('Erro ao cadastrar o produto:', error, product)
    );
};

export const getProductsDB = (companyId, callback) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM products WHERE CompanyId = ?',
                [companyId],
                (_, { rows }) => {
                    const products = [];
                    for (let i = 0; i < rows.length; ++i) {
                        products.push(rows.item(i));
                    }
                    callback(products);
                }
            );
        },
        error => console.error('Erro ao obter produtos do fornecedor:', error)
    );
};