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

    const [addressData, setAddressData] = useState({
        cep: "",
        cidade: "",
        estado: "",
        rua: "",
        numero: "",
        complemento: ""
    })

   

    function MensagenError(){
        if(addressData.cep === ''){
            setStatusError("CEP")
            SetMensagem("Digite o CEP da sua região")
        }else if(addressData.cidade === ''){
            setStatusError("Cidade")
            SetMensagem("Digite o nome da sua cidade")
        }else if(addressData.estado === ''){
            setStatusError("Estado")
            SetMensagem("Digite o nome de seu Estado")
        }else if(addressData.rua === ''){
            setStatusError("Rua")
            SetMensagem("Digite o nome de sua rua")
        }else if(addressData.numero === ''){
            setStatusError("Numero")
            SetMensagem("Digite o numero de sua residência")
        }else{
            navigation.navigate('LoginPJ', {
                registrationData: route.params.registrationData,
                addressData
            })
            console.log(route.params.registrationData)
            console.log(addressData)
        }
    }
    


    function buscarCEP(){
        setActiveLoading(true)
        setAddressData({ ...addressData, cidade: '', estado: '', rua: '' })
        if(addressData.cep.length === 9){
            numeroCep(addressData.cep)
            .then(data => {
                setAddressData({
                    ...addressData,
                    cidade: data.city,
                    estado: data.state,
                    rua: data.street
                });
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
        <KeyboardAvoidingView behavior={"height"}
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
                value={addressData.cep}
                label={"CEP"}
                mode='outlined'
                error={statusError === "CEP"}
                onChangeText={cep => setAddressData({ ...addressData, cep: mask(cep, ["99999-999"]) })}
                />
                {activeLoading ?  <ActivityIndicator size={'small'} color={'#923CFF'}/> : null}
                <TouchableOpacity style={styles.buscaCPF__botao} onPress={() => buscarCEP()}>
                    <Text style={styles.buscaCPF__text}>Buscar</Text>
                </TouchableOpacity>
                </View>
                {statusError === "CEP" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

            
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                value={addressData.cidade}
                label={"Cidade"}
                mode='outlined'
                error={statusError === "Cidade"}
                onChangeText={cidade => setAddressData({ ...addressData, cidade })}
                />
                {statusError === 'Cidade' && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                
                
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                value={addressData.estado}
                label={"Estado"}
                mode='outlined'
                error={statusError === "Estado"}
                onChangeText={estado => setAddressData({ ...addressData, estado })}
                />
                {statusError === "Estado" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

            
            
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                value={addressData.rua}
                label={"Rua"}
                mode='outlined'
                error={statusError === "Rua"}
                onChangeText={rua => setAddressData({ ...addressData, rua })}
                />
                {statusError === "Rua" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            
            
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                keyboardType={'number-pad'}
                value={addressData.numero}
                label={"Numero"}
                mode='outlined'
                error={statusError === "Numero"}
                onChangeText={numero => setAddressData({ ...addressData, numero })}
                />
                {statusError === "Numero" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            
            
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                value={addressData.complemento}
                label={"Complemento"}
                mode='outlined'
                onChangeText={complemento => setAddressData({ ...addressData, complemento })}
                />
                {statusError === "Complemento" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            </View>

        
           <TouchableOpacity style={styles.botao} onPress={MensagenError}>
                <Text style={styles.botao__text}>Próximo</Text>
           </TouchableOpacity>
           
        </KeyboardAvoidingView>
    )
}
