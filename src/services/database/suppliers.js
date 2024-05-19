import * as SQLite from 'expo-sqlite';

const dbName = 'company_app.db';

const db = SQLite.openDatabase(dbName);

const createTableSuppliers = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS suppliers (SupplierID INTEGER PRIMARY KEY AUTOINCREMENT, CompanyName TEXT, ContactName TEXT, ContactTitle TEXT, Address TEXT, City TEXT, Region TEXT, PostalCode TEXT, Country TEXT, Phone TEXT, CompanyId INTEGER);'
        );
    });
};

export const registerSupplier = (supplier) => {
    createTableSuppliers()
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM suppliers WHERE CompanyName = ? AND ContactName = ? AND ContactTitle = ?',
                [supplier.CompanyName, supplier.ContactName, supplier.ContactTitle],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        console.log('Fornecedor já cadastrado!');
                    } else {
                        tx.executeSql(
                            'INSERT INTO suppliers (SupplierID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, CompanyId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                            [
                                supplier.SupplierID,
                                supplier.CompanyName,
                                supplier.ContactName,
                                supplier.ContactTitle,
                                supplier.Address,
                                supplier.City,
                                supplier.Region,
                                supplier.PostalCode,
                                supplier.Country,
                                supplier.Phone,
                                supplier.CompanyId
                            ],
                            (_, { rowsAffected }) => {
                                if (rowsAffected > 0) {
                                    console.log('Fornecedor cadastrado com sucesso!');
                                } else {
                                    console.log('Erro ao cadastrar o fornecedor.');
                                }
                            }
                        );
                    }
                }
            );
        },
        error => console.error(error)
    );
};

export const getSuppliers = (companyId, callback) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM suppliers WHERE CompanyId = ?',
                [companyId],
                (_, { rows }) => {
                    const suppliers = [];
                    for (let i = 0; i < rows.length; ++i) {
                        suppliers.push(rows.item(i));
                    }
                    callback(suppliers);
                }
            );
        },
        error => console.error('Erro ao obter fornecedores da empresa:', error)
    );
};