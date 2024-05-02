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
        PostalCode: "",
        City: "",
        Region: "",
        Address: "",
        Number: ""
    })

    function MensagenError(){
        if(addressData.PostalCode === ''){
            setStatusError("PostalCode")
            SetMensagem("Enter Postal Code")
        }else if(addressData.City === ''){
            setStatusError("City")
            SetMensagem("Enter City")
        }else if(addressData.Region === ''){
            setStatusError("Region")
            SetMensagem("Enter Region")
        }else if(addressData.Address === ''){
            setStatusError("Address")
            SetMensagem("Enter Address")
        }else if(addressData.Number === ''){
            setStatusError("Number")
            SetMensagem("Enter Number")
        }else{
            navigation.navigate('LoginPJ', {
                registrationData: route.params.registrationData,
                addressData
            })
            
        
        }
    }
    


    function buscarCEP(){
        setActiveLoading(true)
        setAddressData({ ...addressData, City: '', Region: '', Address: '' })
        if(addressData.PostalCode.length === 9){
            numeroCep(addressData.PostalCode)
            .then(data => {
                setAddressData({
                    ...addressData,
                    City: data.city,
                    Region: data.state,
                    Address: data.street
                });
                setActiveLoading(false)
                setStatusError('')
                SetMensagem('')
            })
        }else{
            setStatusError("PostalCode")
            SetMensagem("Enter Postal Code")
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

                <Text style={styles.tituloCategoria}>Data Address</Text>

                <View  style={styles.buscaCPF}>
                <TextInput
                textColor='#923CFF'
                style={styles.inputCPF}
                keyboardType={'numeric'}
                maxLength={9}
                value={addressData.PostalCode}
                label={"Postal Code"}
                mode='outlined'
                error={statusError === "PostalCode"}
                onChangeText={PostalCode => setAddressData({ ...addressData, PostalCode: mask(PostalCode, ["99999-999"]) })}
                />
                {activeLoading ?  <ActivityIndicator size={'small'} color={'#923CFF'}/> : null}
                <TouchableOpacity style={styles.buscaCPF__botao} onPress={() => buscarCEP()}>
                    <Text style={styles.buscaCPF__text}>Buscar</Text>
                </TouchableOpacity>
                </View>
                {statusError === "PostalCode" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

            
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                value={addressData.City}
                label={"City"}
                mode='outlined'
                error={statusError === "City"}
                onChangeText={City => setAddressData({ ...addressData, City })}
                />
                {statusError === 'City' && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                
                
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                value={addressData.Region}
                label={"Region"}
                mode='outlined'
                error={statusError === "Region"}
                onChangeText={Region => setAddressData({ ...addressData, Region })}
                />
                {statusError === "Region" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

            
            
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                value={addressData.Address}
                label={"Address"}
                mode='outlined'
                error={statusError === "Address"}
                onChangeText={Address => setAddressData({ ...addressData, Address })}
                />
                {statusError === "Address" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            
            
                <TextInput
                textColor='#923CFF'
                style={styles.input}
                keyboardType={'number-pad'}
                value={addressData.Number}
                label={"Number"}
                mode='outlined'
                error={statusError === "Number"}
                onChangeText={Number => setAddressData({ ...addressData, Number })}
                />
                {statusError === "Number" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            
            </View>

        
           <TouchableOpacity style={styles.botao} onPress={MensagenError}>
                <Text style={styles.botao__text}>Próximo</Text>
           </TouchableOpacity>
           
        </KeyboardAvoidingView>
    )
}
