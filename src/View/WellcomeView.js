import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import CategoryMock from "../mock/CategoryMock";
import EmployeeMock from "../mock/EmployeeMock";
import ProductMock from "../mock/ProductMock";
import SupplierMock from "../mock/SupplierMock";

import { login, registerCompany } from "../Repository/databaseRepository";

import { routeName } from "../routes/route_name";

import CustomButton from "../Component/customButton";
import CustomTopoWelcome from "../Component/customTopoWelcome/index";
import styles from "../Style/WellcomeStyle";

export default function WelcomeView() {
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

    useEffect(() => {
        ProductMock()
        SupplierMock()
        CategoryMock()
        EmployeeMock()
        registerCompany(usuarioTeste);
    }, []);

    function Logar() {
        if (email == '' || senha == '') {
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

    return (
        <View style={styles.container}>
            <CustomTopoWelcome />
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
                        icon={secureMode ? "eye-off" : "eye"}
                        onPress={() => setSecureMode(!secureMode)}
                    />}
                    value={senha}
                    onChangeText={senha => setSenha(senha)}
                    error={statusError == "error"}

                />
                {statusError == "error" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <CustomButton
                    styleButton={styles.esqueceuSenha}
                    styleText={styles.esqueceuSenha__text}
                    text={"Esqueceu sua senha?"}
                />

            </View>

            <CustomButton
                styleButton={styles.botao}
                styleText={styles.botao__text}
                onPress={() => Logar()}
                text={"Login"}
            />

            <Text style={styles.semConta}>Ainda não tem conta?</Text>

            <CustomButton
                styleButton={styles.botao}
                styleText={styles.botao__text}
                onPress={() => { navigation.navigate(routeName.register_company_info) }}
                text={"Register"}
            />

        </View>
    )
}

