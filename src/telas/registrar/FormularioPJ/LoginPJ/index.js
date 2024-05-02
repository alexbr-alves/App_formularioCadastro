import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Alert } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import IconeGoBack from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { cadastrarUsuarioPJ } from "../../../../servicos/database_sqlite";

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
        if(email === ''){
            setStatusError("Email")
            SetMensagem("Digite o seu e-mail")
        }else if(senha === ''){
            setStatusError("Senha")
            SetMensagem("Digite a sua senha")
        }else if(confirmarSenha === ''){
            setStatusError("ConfirmarSenha")
            SetMensagem("Repita a sua senha")
        }else if(confirmarSenha !== senha ){
            setStatusError("ConfirmarSenha")
            SetMensagem("As senhas não correspondem")
        }else{
            cadastrarUsuarioPJ({
                nomeEmpresarial: route.params.registrationData.businessName,
                nomeFantasia: route.params.registrationData.fantasyName,
                telefone: route.params.registrationData.phoneNumber,
                cnpj: route.params.registrationData.cnpj,
                dataAbertura: route.params.registrationData.openDate,
                cep: route.params.addressData.cep,
                cidade: route.params.addressData.cidade,
                estado: route.params.addressData.estado,
                rua: route.params.addressData.rua,
                numero: route.params.addressData.numero,
                complemento: route.params.addressData.complemento,
                email: email,
                senha: senha  
            });
            navigation.navigate("Welcome")
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