import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "./styles";

import Topo from "./componenetes/topo";


export default function Welcome(){
    const navigation = useNavigation()
    const [secureMode, setSecureMode] = useState(true);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
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
                
                />

                <TouchableOpacity style={styles.esqueceuSenha}>
                    <Text style={styles.esqueceuSenha__text}>Esqueceu sua senha?</Text>
                </TouchableOpacity>

            </View>
           
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botao__text}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.semConta}>Ainda não tem conta?</Text>

            <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate('Registrar')}}>
                <Text style={styles.botao__text}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}