import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import api from "../../servicos/api";

import styles from "./styles";

import Topo from "./componenetes/topo";


export default function Welcome(){
    const navigation = useNavigation()
    const [secureMode, setSecureMode] = useState(true);
    const [statusError, setStatusError] = useState('');
    const [Mensagem, SetMensagem] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dados, setDados] = useState([])

    useEffect(() => {
        api.get("/cadastros")
        .then(res => {
            setDados(res.data)
        })
    }, []);
   
    function Logar(){
        let count = 0;
        for(let i = 0; i < dados.length; i ++){
            if(email == dados[i].email && senha == dados[i].senha){
                navigation.navigate("Home", {
                    email: email,
                    nome: dados[i].nome,
                    sobrenome: dados[i].sobrenome,
                    telefone: dados[i].telefone,
                    data_de_aniversario: dados[i].data_de_aniversario,
                    cpf: dados[i].cpf,
                    cep: dados[i].cep,
                    cidade: dados[i].cidade,
                    estado: dados[i].estado,
                    rua: dados[i].rua,
                    numero: dados[i].numero,
                    complemento: dados[i].complemento,
                    tipo: dados[i].tipo,

                })
                setEmail(''),
                setSenha('')
            }else if(email != dados[i].email || senha != dados[i].senha){  
                count++            
                if(count == dados.length){
                   setStatusError("error")
                   SetMensagem("Email ou senha incorretos")
                   }
                
            }
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
           
            <TouchableOpacity style={styles.botao} onPress={() => Logar(email, senha)}>
                <Text style={styles.botao__text}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.semConta}>Ainda não tem conta?</Text>

            <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate('Registrar')}}>
                <Text style={styles.botao__text}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}