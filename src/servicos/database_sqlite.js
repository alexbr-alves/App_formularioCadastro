import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('meu_banco_de_dados.db');

export const criarTabelaUsuariosPJ = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS usuarios_pj (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeEmpresarial TEXT, nomeFantasia TEXT, telefone TEXT, cnpj TEXT, dataAbertura TEXT, cep TEXT, cidade TEXT, estado TEXT, rua TEXT, numero TEXT, complemento TEXT, email TEXT, senha TEXT);'
        );
    });
};

export const cadastrarUsuarioPJ = (usuario) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'INSERT INTO usuarios_pj (nomeEmpresarial, nomeFantasia, telefone, cnpj, dataAbertura, cep, cidade, estado, rua, numero, complemento, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [usuario.nomeEmpresarial, usuario.nomeFantasia, usuario.telefone, usuario.cnpj, usuario.dataAbertura, usuario.cep, usuario.cidade, usuario.estado, usuario.rua, usuario.numero, usuario.complemento, usuario.email, usuario.senha],
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
                'SELECT * FROM usuarios_pj WHERE email = ? AND senha = ?',
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
