import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import CustomButton from "../../Component/customButton";
import CustonToolbar from "../../Component/customToolbar";
import styles from "../../Style/Company/RegisterCompanyLoginStyle";
import RegisterCompanyLoginViewModel from "../../ViewModel/Company/RegisterCompanyLoginViewModel";

export default function RegisterCompanyLoginView() {
    const navigation = useNavigation();
    const route = useRoute()

    const {
        registerCompany,
        secureMode, setSecureMode,
        secureMode2, setSecureMode2,
        statusError,
        message,
        email, setEmail,
        senha, setSenha,
        confirmarSenha, setConfirmarSenha,
        strings, checkImputEmpty,
    } = RegisterCompanyLoginViewModel()



    const finish = () => {
        if (checkImputEmpty()) {
            registerCompany({
                CompanyName: route.params.registrationData.CompanyName,
                ContactName: route.params.registrationData.ContactName,
                phoneNumber: route.params.registrationData.phoneNumber,
                ContactTitle: route.params.registrationData.ContactTitle,
                PostalCode: route.params.addressData.PostalCode,
                City: route.params.addressData.City,
                Region: route.params.addressData.Region,
                Address: route.params.addressData.Address,
                Number: route.params.addressData.Number,
                email: email,
                senha: senha
            });
            navigation.navigate("Welcome")
        }
    }



    return (
        <ScrollView style={styles.container}>
            <CustonToolbar titulo={strings.registerLoginTitle} />
            <View style={styles.espaco__input}>
                <TextInput
                    value={email}
                    textColor='#923CFF'
                    style={styles.input}
                    label={strings.emailLabel}
                    mode="outlined"
                    onChangeText={email => setEmail(email)}
                    error={statusError === strings.emailLabel}
                />
                {statusError === strings.emailLabel && <HelperText type="error" visible={statusError}>{message}</HelperText>}

                <TextInput
                    value={senha}
                    textColor='#923CFF'
                    style={styles.input}
                    label={strings.passwordLabel}
                    mode="outlined"
                    secureTextEntry={secureMode}
                    right={<TextInput.Icon
                        icon={secureMode ? "eye-off" : "eye"}
                        onPress={() => setSecureMode(!secureMode)}
                    />}
                    onChangeText={senha => setSenha(senha)}
                    error={statusError === strings.passwordLabel}
                />
                {statusError === strings.passwordLabel && <HelperText type="error" visible={statusError}>{message}</HelperText>}

                <TextInput
                    value={confirmarSenha}
                    textColor='#923CFF'
                    style={styles.input}
                    label={strings.confirmPasswordLabel}
                    mode="outlined"
                    secureTextEntry={secureMode2}
                    right={<TextInput.Icon
                        icon={secureMode2 ? "eye-off" : "eye"}
                        onPress={() => setSecureMode2(!secureMode2)}
                    />}
                    onChangeText={confirmarSenha => setConfirmarSenha(confirmarSenha)}
                    error={statusError === strings.confirmPasswordLabel}
                />
                {statusError === strings.confirmPasswordLabel && <HelperText type="error" visible={statusError}>{message}</HelperText>}

            </View>

            <CustomButton
                styleButton={styles.botao}
                styleText={styles.botao__text}
                onPress={finish}
                text={strings.finishButton}
            />
        </ScrollView>
    )
}