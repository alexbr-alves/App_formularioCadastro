import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { login, registerCompanyRepository } from "../Repository/databaseRepository";
import { routeName } from "../routes/route_name";

const WelcomeViewModel = () => {
    const navigation = useNavigation()
    const [secureMode, setSecureMode] = useState(true);
    const [statusError, setStatusError] = useState('');
    const [message, setMessage] = useState('');
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
        registerCompanyRepository(usuarioTeste);
    }, []);

    const Logar = () => {
        if (email == '' || senha == '') {
            setStatusError("error")
            setMessage("Digite o seu email e senha")
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
                    setMessage("Email ou senha incorretos")
                }
            });
        }
    }

    return {
        Logar,
        secureMode, setSecureMode,
        statusError, setStatusError,
        message, setMessage,
        email, setEmail,
        senha, setSenha
    }
}

export default WelcomeViewModel;