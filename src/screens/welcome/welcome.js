import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { registerCompany, login, createTable } from "../../services/database_sqlite";

import { routeName } from "../../routes/route_name";

import styles from "./styles";
import Topo from "../componenetes/topo/index"

export default function Welcome(){
    const navigation = useNavigation()
    const [secureMode, setSecureMode] = useState(true);
    const [statusError, setStatusError] = useState('');
    const [Mensagem, SetMensagem] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const usuarioTeste = {
        CompanyName: 'Empresa Teste',
        ContactName: 'Contato Teste',
        phoneNumber: '79 991075815',
        ContactTitle: 'CEO',
        PostalCode: '12345-678',
        City: 'Cidade Teste',
        Region: 'Estado Teste',
        Address: 'Rua Teste',
        Number: '123',
        email: 'Q',
        senha: 'Q'
    };
    

    registerCompany(usuarioTeste);

    useEffect(() => {
        createTable();
    }, []);

    function Logar(){
        if(email == '' || senha == ''){
            setStatusError("error")
            SetMensagem("Digite o seu email e senha")
        } else {
            login(email, senha, (usuario) => {
                if (usuario) {
                    navigation.navigate(routeName.home_logged, {
                        email: email,
                    });
                    setEmail('');
                    setSenha('');
                } else {
                    setStatusError("error")
                    SetMensagem("Email ou senha incorretos")
                }
            });
        }
    }

    return(
        <View style={styles.container}>
            <Topo/>
            <View style={styles.areaInput}>

                <TextInput
                style={styles.input_email}
                label={'Email'}
                mode="outlined"
                value={email}
                onChangeText={email => setEmail(email)}
                error={statusError == "error"}
                />

                <TextInput
                style={styles.input_senha}
                label={"Senha"}
                mode="outlined"
                secureTextEntry={secureMode}
                right={<TextInput.Icon 
                    icon={secureMode? "eye-off" : "eye"}
                    onPress={() => setSecureMode(!secureMode)}
                    />}
                value={senha}
                onChangeText={senha => setSenha(senha)}
                error={statusError == "error"}
                
                />
                {statusError == "error" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
                <TouchableOpacity style={styles.esqueceuSenha}>
                    <Text style={styles.esqueceuSenha__text}>Esqueceu sua senha?</Text>
                </TouchableOpacity>

            </View>
           
            <TouchableOpacity style={styles.botao} onPress={() => Logar()}>
                <Text style={styles.botao__text}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.semConta}>Ainda não tem conta?</Text>

            <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate(routeName.register_company_info)}}>
                <Text style={styles.botao__text}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}
