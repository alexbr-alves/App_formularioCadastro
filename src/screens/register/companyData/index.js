import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import IconeGoBack from 'react-native-vector-icons/Ionicons';
import { mask } from 'remask';
import { routeName } from "../../../routes/route_name";
import CustomButton from "../../component/customButton";
import styles from "./styles";


export default function DadosPessoaisPJ({ navigation: { goBack } }) {

    const navigation = useNavigation();
    const [statusError, setStatusError] = useState('');
    const [Mensagem, SetMensagem] = useState('');
    const [registrationData, setRegistrationData] = useState({
        CompanyName: "",
        ContactName: "",
        phoneNumber: "",
        ContactTitle: "",
    })


    function MensagenError() {
        if (registrationData.CompanyName === '') {
            setStatusError("CompanyName")
            SetMensagem("Enter Company Name")
        } else if (registrationData.ContactName === '') {
            setStatusError("ContactName")
            SetMensagem("Enter ContactName")
        } else if (registrationData.phoneNumber === '') {
            setStatusError("phoneNumber")
            SetMensagem("Enter Phone Number")
        } else if (registrationData.ContactTitle === '') {
            setStatusError("ContactTitle")
            SetMensagem("Enter Contact title")
        } else {
            navigation.navigate(routeName.register_company_address, { registrationData })
        }
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconeBack} onPress={() => goBack()}>
                <IconeGoBack name="arrow-back" size={35} />
            </TouchableOpacity>
            <Text style={styles.titulo}>Preencha as informações abaixo</Text>
            <View style={styles.espaco__input}>
                <Text style={styles.tituloCategoria}>Registration Data</Text>
                <TextInput
                    value={registrationData.CompanyName}
                    label={"Company name"}
                    mode='outlined'
                    error={statusError === "CompanyName"}
                    onChangeText={CompanyName => setRegistrationData(prevState => ({ ...prevState, CompanyName }))}
                />
                {statusError === "CompanyName" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}


                <TextInput
                    value={registrationData.ContactName}
                    label={"Contact name"}
                    mode='outlined'
                    error={statusError === "ContactName"}
                    onChangeText={ContactName => setRegistrationData(prevState => ({ ...prevState, ContactName }))}
                />
                {statusError === "ContactName" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <TextInput
                    maxLength={18}
                    value={registrationData.ContactTitle}
                    label={"Contact Title"}
                    mode='outlined'
                    error={statusError === "ContactTitle"}
                    onChangeText={ContactTitle => setRegistrationData(prevState => ({ ...prevState, ContactTitle }))}
                />
                {statusError === "ContactTitle" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <TextInput
                    keyboardType={'numeric'}
                    maxLength={15}
                    value={registrationData.phoneNumber}
                    label={"Phone Number"}
                    mode='outlined'
                    error={statusError === "phoneNumber"}
                    onChangeText={phoneNumber => setRegistrationData(prevState => ({ ...prevState, phoneNumber: mask(phoneNumber, ["(99)99999-9999"]) }))}
                />
                {statusError === "phoneNumber" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

            </View>

            <CustomButton
                styleButton={styles.botao}
                styleText={styles.botao__text}
                onPress={MensagenError}
                text={"Próximo"}
            />

        </View>
    )
}
