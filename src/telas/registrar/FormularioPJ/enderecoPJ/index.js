import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import styles from "./styles";
import { mask } from 'remask';
import numeroCep from 'cep-promise';
import { useNavigation, useRoute } from "@react-navigation/native";
import IconeGoBack from 'react-native-vector-icons/Ionicons';

export default function EnderecoPJ({ navigation: { goBack } }){
    const route = useRoute();
    const navigation = useNavigation();
    const [statusError, setStatusError] = useState('');
    const [Mensagem, SetMensagem] = useState('');
    const [activeLoading, setActiveLoading] = useState(false);
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

   

    function MensagenError(){
        if(cep == ''){
            setStatusError("CEP")
            SetMensagem("Digite o CEP da sua região")
        }else if(cidade == ''){
            setStatusError("Cidade")
            SetMensagem("Digite o nome da sua cidade")
        }else if(estado == ''){
            setStatusError("Estado")
            SetMensagem("Digite o nome de seu Estado")
        }else if(rua == ''){
            setStatusError("Rua")
            SetMensagem("Digite o nome de sua rua")
        }else if(numero == ''){
            setStatusError("Numero")
            SetMensagem("Digite o numero de sua residência")
        }else{
           navigation.navigate('LoginPJ', {
            nomeEmpresarial: route.params.nomeEmpresarial,
            nomeFantasia: route.params.nomeFantasia,
            telefone: route.params.telefone,
            cnpj: route.params.cnpj,
            dataAbertura: route.params.dataAbertura,
            imagem: route.params.imagem,
            cep: cep,
            cidade: cidade,
            estado: estado,
            rua: rua,
            numero: numero,
            complemento: complemento
           })
        }
    }


    function buscarCEP(){
        setActiveLoading(true)
        setCidade('')
        setEstado('')
        setRua('')
        if(cep.length == 9){
            numeroCep(cep)
            .then(data => {
            setCidade(data.city)
            setEstado(data.state)
            setRua(data.street)
            setActiveLoading(false)
            setStatusError('')
            SetMensagem('')
        })
        }else{
            setStatusError("CEP")
            SetMensagem("Digite o CEP da sua região")
            setActiveLoading(false)
        }
        
    }
    return (
        <KeyboardAvoidingView behavior={"padding"}
        keyboardVerticalOffset={500} style={styles.container}>

            <TouchableOpacity style={styles.iconeBack} onPress={() => goBack()}>
                <IconeGoBack name="arrow-back" size={35} />
           </TouchableOpacity>
            <Text style={styles.titulo}>Preencha as informações abaixo</Text>
            
           
            <View style={styles.espaco__input}>

                <Text style={styles.tituloCategoria}>Endereço residencial</Text>

                <View  style={styles.buscaCPF}>
                <TextInput
                textColor='#923CFF'
                style={styles.inputCPF}
                keyboardType={'numeric'}
                maxLength={9}
                value={cep}
                label={"CEP"}
                mode='outlined'
                error={statusError == "CEP"}
                onChangeText={cep => setCep(mask(cep, ["99999-999"]))}
                />
                {activeLoading ?  <ActivityIndicator size={'small'} color={'#923CFF'}/> : null}
                <TouchableOpacity style={styles.buscaCPF__botao} onPress={() => buscarCEP()}>
                    <Text style={styles.buscaCPF__text}>Buscar</Text>
                </TouchableOpacity>
                </View>
                {statusError  == "CEP" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

            
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                value={cidade}
                label={"Cidade"}
                mode='outlined'
                error={statusError == "Cidade"}
                onChangeText={cidade => setCidade(cidade)}
                />
                {statusError == 'Cidade' && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                
                
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                value={estado}
                label={"Estado"}
                mode='outlined'
                error={statusError == "Estado"}
                onChangeText={estado => setEstado(estado)}
                />
                {statusError == "Estado" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

            
            
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                value={rua}
                label={"Rua"}
                mode='outlined'
                error={statusError == "Rua"}
                onChangeText={rua => setRua(rua)}
                />
                {statusError == "Rua" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            
            
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                keyboardType={'number-pad'}
                value={numero}
                label={"Numero"}
                mode='outlined'
                error={statusError == "Numero"}
                onChangeText={numero => setNumero(numero)}
                />
                {statusError == "Numero" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            
            
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                value={complemento}
                label={"Complemento"}
                mode='outlined'
                onChangeText={complemento => setComplemento(complemento)}
                />
                {statusError == "Complemento" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            </View>

        
           <TouchableOpacity style={styles.botao} onPress={MensagenError}>
                <Text style={styles.botao__text}>Próximo</Text>
           </TouchableOpacity>
           
        </KeyboardAvoidingView>
    )
}