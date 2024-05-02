import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import styles from "./styles";
import { mask } from 'remask';
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import IconeAnexo from 'react-native-vector-icons/Entypo';
import IconeGoBack from 'react-native-vector-icons/Ionicons';

export default function DadosPessoaisPJ({ navigation: { goBack } }){

    const navigation = useNavigation();
    const [statusError, setStatusError] = useState('');
    const [Mensagem, SetMensagem] = useState('');
    const [registrationData, setRegistrationData] = useState({
        businessName: "",
        fantasyName: "",
        phoneNumber: "",
        cnpj: "",
        openDate: ""
    })
   

    function MensagenError(){
        if(registrationData.businessName === ''){
            setStatusError("businessName")
            SetMensagem("Digite o nome empresarial")
        }else if(registrationData.fantasyName === ''){
            setStatusError("fantasyName")
            SetMensagem("Digite o nome fantasia")
        }else if(registrationData.phoneNumber === ''){
            setStatusError("phoneNumber")
            SetMensagem("Digite o seu número de telefone")
        }else if(registrationData.cnpj === ''){
            setStatusError("cnpj")
            SetMensagem("Digite o CNPJ")
        }else if(registrationData.openDate === ''){
            setStatusError("openDate")
            SetMensagem("Digite a data de abertura")
        }else{
            navigation.navigate("EnderecoPJ", { registrationData})
        }
    }
    

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

  
     
    return (
        <View style={styles.container}>
           <TouchableOpacity style={styles.iconeBack} onPress={() => goBack()}>
                <IconeGoBack name="arrow-back" size={35} />
           </TouchableOpacity>
            <Text style={styles.titulo}>Preencha as informações abaixo</Text>
            <View style={styles.espaco__input}>
                <Text style={styles.tituloCategoria}>Dados Pessoais</Text>
                <TextInput
                value={registrationData.businessName}
                label={"Nome empresarial"}
                mode='outlined'
                error={statusError === "businessName"}
                onChangeText={businessName => setRegistrationData(prevState => ({ ...prevState, businessName }))}
                />
                {statusError === "businessName" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
                
                
                <TextInput
                value={registrationData.fantasyName}
                label={"Nome fantasia"}
                mode='outlined'
                error={statusError === "fantasyName"}
                onChangeText={fantasyName => setRegistrationData(prevState => ({ ...prevState, fantasyName }))}
                />
                {statusError === "fantasyName" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
                
                <TextInput
                keyboardType={'numeric'}
                maxLength={15}
                value={registrationData.phoneNumber}
                label={"phoneNumber"}
                mode='outlined'
                error={statusError === "phoneNumber"}
                onChangeText={phoneNumber => setRegistrationData(prevState => ({ ...prevState, phoneNumber: mask(phoneNumber, ["(99)99999-9999"]) }))}
                />
                {statusError === "phoneNumber" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}


                <TextInput
                keyboardType={'numeric'}
                maxLength={18}
                value={registrationData.cnpj}
                label={"CNPJ"}
                mode='outlined'
                error={statusError === "CNPF"}
                onChangeText={cnpj => setRegistrationData(prevState => ({ ...prevState, cnpj: mask(cnpj, ["99.999.999/9999-99"]) }))}
                />
                {statusError === "CNPF" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
                
                
                <TextInput
                maxLength={10}
                keyboardType={'numeric'}
                value={registrationData.openDate}
                label={"Data de abertura"}
                mode='outlined'
                error={statusError === "Data"}
                onChangeText={openDate => setRegistrationData(prevState => ({ ...prevState, openDate: mask(openDate, ["99/99/9999"]) }))}
                />
                {statusError === "Data" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
                <View style={styles.anexarDocumento}>
                    <Text style={styles.anexarDocumento__titulo}>Anexar foto</Text>
                    <TouchableOpacity style={styles.anexarDocumento__botao} onPress={pickImage}>
                        <IconeAnexo name="attachment" size={20}/>
                    </TouchableOpacity>
                </View>               
            </View>
           
           <TouchableOpacity style={styles.botao} onPress={MensagenError}>
                <Text style={styles.botao__text}>Próximo</Text>
           </TouchableOpacity>
           
        </View>
    )
}
