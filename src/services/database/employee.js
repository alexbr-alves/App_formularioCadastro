import * as SQLite from 'expo-sqlite';

const dbName = 'company_app.db';

const db = SQLite.openDatabase(dbName);

const createTableEmployees = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS employees (EmployeeId INTEGER PRIMARY KEY AUTOINCREMENT, CompanyId INTEGER, LastName TEXT, FirstName TEXT, Title TEXT, BirthDate TEXT, HireDate TEXT, Address TEXT, City TEXT, Region TEXT, PostalCode TEXT, Country TEXT, HomePhone TEXT, Extension TEXT);'
        );
    });
};

export const registerEmployeeDB = (employee) => {
    createTableEmployees()
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM employees WHERE CompanyId = ? AND FirstName = ? AND LastName = ? AND Title = ?',
                [employee.CompanyId, employee.FirstName, employee.LastName, employee.Title],
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

export const getEmployeesDB = (companyId, callback) => {
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
                    if (employees.length === 0) {
                        console.log("Não existe funcionario associado a compania")
                    }
                }
            );
        },
        error => console.error('Erro ao obter funcionários da empresa:', error)
    );
};

export const deleteEmployeeDB = (employeeId) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'DELETE FROM employees WHERE EmployeeId = ?',
                [employeeId],
                (_, { rowsAffected }) => {
                    if (rowsAffected > 0) {
                        console.log('Funcionário deletado com sucesso!');
                    } else {
                        console.log('Erro: Funcionário não encontrado.');
                    }
                }
            );
        },
        error => console.error('Erro ao deletar funcionário:', error)
    );
};