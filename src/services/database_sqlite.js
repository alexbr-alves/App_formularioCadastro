import * as SQLite from 'expo-sqlite';

const dbName = 'company_app.db';

const db = SQLite.openDatabase(dbName);

// COMPANY

export const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS usuarios (CompanyId INTEGER PRIMARY KEY AUTOINCREMENT, CompanyName TEXT, ContactName TEXT, phoneNumber TEXT, ContactTitle TEXT, PostalCode TEXT, City TEXT, Region TEXT, Address TEXT, Number TEXT, email TEXT, senha TEXT);'
        );
    });
};

export const registerCompany = (usuario) => {
    // Verifica se o usuário já existe antes de cadastrar
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM usuarios WHERE email = ?',
                [usuario.email],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        console.log('Usuário já cadastrado!');
                    } else {
                        // Se o usuário não existir, faz a inserção
                        tx.executeSql(
                            'INSERT INTO usuarios (CompanyName, ContactName, phoneNumber, ContactTitle, PostalCode, City, Region, Address, Number, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                            [
                                usuario.CompanyName, 
                                usuario.ContactName, 
                                usuario.phoneNumber, 
                                usuario.ContactTitle, 
                                usuario.PostalCode, 
                                usuario.City, 
                                usuario.Region, 
                                usuario.Address, 
                                usuario.Number, 
                                usuario.email, 
                                usuario.senha
                            ],
                            (_, { rowsAffected }) => {
                                if (rowsAffected > 0) {
                                    console.log('Usuário cadastrado com sucesso!');
                                } else {
                                    console.log('Erro ao cadastrar o usuário.');
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

export const login = (email, senha, callback) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM usuarios WHERE email = ? AND senha = ?',
                [email, senha],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        const usuario = rows.item(0);
                        callback(usuario);
                    } else {
                        callback(null);
                    }
                }
            );
        },
        error => console.error('Erro ao fazer login:', error)
    );
};

export const getUser = (email, callback) => {
    if (!email) {
        console.error('Erro ao fazer login: email é nulo ou indefinido');
        callback(null);
        return;
    }

    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM usuarios WHERE email = ?',
                [email],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        const usuario = rows.item(0);
                        callback(usuario);
                    } else {
                        callback(null);
                    }
                }
            );
        },
        error => console.error('Erro ao fazer login:', error)
    );
};

// EMPLOYEES

export const createTableEmployees = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS employees (EmployeeId INTEGER PRIMARY KEY AUTOINCREMENT, CompanyId INTEGER, LastName TEXT, FirstName TEXT, Title TEXT, BirthDate TEXT, HireDate TEXT, Address TEXT, City TEXT, Region TEXT, PostalCode TEXT, Country TEXT, HomePhone TEXT, Extension TEXT);'
        );
    });
};

export const registerEmployee = (employee) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM employees WHERE FirstName = ? AND LastName = ? AND Title = ?',
                [employee.FirstName, employee.LastName, employee.Title],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        console.log('Funcionário já cadastrado!');
                    } else {
                        tx.executeSql(
                            'INSERT INTO employees (CompanyId, LastName, FirstName, Title, BirthDate, HireDate, Address, City, Region, PostalCode, Country, HomePhone, Extension) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                            [
                                employee.CompanyId,
                                employee.LastName,
                                employee.FirstName,
                                employee.Title,
                                employee.BirthDate,
                                employee.HireDate,
                                employee.Address,
                                employee.City,
                                employee.Region,
                                employee.PostalCode,
                                employee.Country,
                                employee.HomePhone,
                                employee.Extension
                            ],
                            (_, { rowsAffected }) => {
                                if (rowsAffected > 0) {
                                    console.log('Funcionário cadastrado com sucesso!');
                                } else {
                                    console.log('Erro ao cadastrar o funcionário.');
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

export const getEmployees = (companyId, callback) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM employees WHERE CompanyId = ?',
                [companyId],
                (_, { rows }) => {
                    const employees = [];
                    for (let i = 0; i < rows.length; ++i) {
                        employees.push(rows.item(i));
                    }
                    callback(employees);
                }
            );
        },
        error => console.error('Erro ao obter funcionários da empresa:', error)
    );
};

// SUPPLIERS

export const createTableSuppliers = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS suppliers (SupplierID INTEGER PRIMARY KEY AUTOINCREMENT, CompanyName TEXT, ContactName TEXT, ContactTitle TEXT, Address TEXT, City TEXT, Region TEXT, PostalCode TEXT, Country TEXT, Phone TEXT, CompanyId INTEGER);'
        );
    });
};

export const registerSupplier = (supplier) => {
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

//PRODUCTS

export const createTableProducts = () => {
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

export const registerProduct = (product) => {
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

export const getProducts = (companyId, callback) => {
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



