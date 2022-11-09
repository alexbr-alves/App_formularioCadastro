import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Alert } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import api from '../../../../servicos/api'
import IconeGoBack from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function LoginPJ({ navigation: { goBack } }){
    const navigation = useNavigation();
    const route = useRoute()
    const [secureMode, setSecureMode] = useState(true);
    const [secureMode2, setSecureMode2] = useState(true);
    const [statusError, setStatusError] = useState('');
    const [Mensagem, SetMensagem] = useState('');

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
   

    function MensagenError(){
        if(email == ''){
            setStatusError("Email")
            SetMensagem("Digite o seu e-mail")
        }else if(senha == ''){
            setStatusError("Senha")
            SetMensagem("Digite a sua senha")
        }else if(confirmarSenha == ''){
            setStatusError("ConfirmarSenha")
            SetMensagem("repita a seu senha")
        }else if(confirmarSenha != senha ){
            setStatusError("ConfirmarSenha")
            SetMensagem("Senhas não correspondem")
        } else{
            api.post("/cadastros", {
                nomeEmpresarial: route.params.nomeEmpresarial,
                nomeFantasia: route.params.nomeFantasia,
                telefone: route.params.telefone,
                cnpj: route.params.cnpj,
                dataAbertura: route.params.dataAbertura,
                imagem: route.params.imagem,
                cep: route.params.cep,
                cidade: route.params.cidade,
                estado: route.params.estado,
                rua: route.params.rua,
                numero: route.params.numero,
                complemento: route.params.complemento,
                email: email,
                senha: senha,
                tipo: "PJ"              
            })
            navigation.navigate("Home", {
                nomeEmpresarial: route.params.nomeEmpresarial,
                nomeFantasia: route.params.nomeFantasia,
                telefone: route.params.telefone,
                cnpj: route.params.cnpj,
                dataAbertura: route.params.dataAbertura,
                cep: route.params.cep,
                cidade: route.params.cidade,
                estado: route.params.estado,
                rua: route.params.rua,
                numero: route.params.numero,
                complemento: route.params.complemento,
                email: email,
                senha: senha,
                tipo: "PJ"    
            })
        }
    }


   
    return (
        <ScrollView style={styles.container}>

            <TouchableOpacity style={styles.iconeBack} onPress={() => goBack()}>
                <IconeGoBack name="arrow-back" size={35} />
           </TouchableOpacity>
            <Text style={styles.titulo}>Preencha as informações abaixo</Text>
            
           <View style={styles.espaco__input}>
            <Text style={styles.tituloCategoria}>Dados para login</Text>
                <TextInput
                    value={email}
                    textColor='#923CFF'
                    style={styles.input}
                    label={'Email'}
                    mode="outlined"
                    onChangeText={email => setEmail(email)}
                    error={statusError == "Email"}
                />
                {statusError == "Email" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <TextInput
                    value={senha}
                    textColor='#923CFF'
                    style={styles.input}
                    label={"Senha"}
                    mode="outlined"
                    secureTextEntry={secureMode}
                    right={<TextInput.Icon 
                    icon={secureMode? "eye-off" : "eye"}
                    onPress={() => setSecureMode(!secureMode)}
                        />}            
                    onChangeText={senha => setSenha(senha)}
                    error={statusError == "Senha"}   
                />
                {statusError == "Senha" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}



                <TextInput
                    value={confirmarSenha}
                    textColor='#923CFF'
                    style={styles.input}
                    label={"Confirmar senha"}
                    mode="outlined"
                    secureTextEntry={secureMode2}
                    right={<TextInput.Icon 
                    icon={secureMode2? "eye-off" : "eye"}
                    onPress={() => setSecureMode2(!secureMode2)}
                    />}                    
                    onChangeText={confirmarSenha => setConfirmarSenha(confirmarSenha)}  
                    error={statusError == "ConfirmarSenha"}
                />
                {statusError == "ConfirmarSenha" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

            </View>

           <TouchableOpacity style={styles.botao} onPress={MensagenError}>
                <Text style={styles.botao__text}>Finalizar</Text>
           </TouchableOpacity>
           
        </ScrollView>
    )
}