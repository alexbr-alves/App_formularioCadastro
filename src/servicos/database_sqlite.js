import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('company_app.db');


export const criarTabelaUsuariosPJ = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS usuarios (CompanyId INTEGER PRIMARY KEY AUTOINCREMENT, CompanyName TEXT, ContactName TEXT, phoneNumber TEXT, ContactTitle TEXT, PostalCode TEXT, City TEXT, Region TEXT, Address TEXT, Number TEXT, email TEXT, senha TEXT);'
        );
    });
};

export const cadastrarUsuarioPJ = (usuario) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'INSERT INTO usuarios (CompanyName, ContactName, phoneNumber, ContactTitle, dataAbertura, PostalCode, City, Region, Address, Number, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    usuario.CompanyName, 
                    usuario.ContactName, 
                    usuario.phoneNumber, 
                    usuario.ContactTitle, 
                    usuario.dataAbertura, 
                    usuario.PostalCode, 
                    usuario.City, 
                    usuario.Region, 
                    usuario.Address, 
                    usuario.Number, 
                    usuario.email, 
                    usuario.senha],
                (_, { rowsAffected }) => {
                    if (rowsAffected > 0) {
                        console.log('Usuário cadastrado com sucesso!');
                    } else {
                        console.log('Erro ao cadastrar o usuário.');
                    }
                }
            );
        },
        error => console.error(error)
    );
};

export const fazerLoginPJ = (email, senha, callback) => {
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
