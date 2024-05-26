import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import CustomButton from "../Component/customButton";
import CustomTopoWelcome from "../Component/customTopoWelcome/index";
import styles from "../Style/WellcomeStyle";
import WelcomeViewModel from "../ViewModel/WellcomeViewModel";
import { routeName } from "../routes/route_name";

export default function WelcomeView() {
    const navigation = useNavigation()

    const {
        Logar,
        secureMode, setSecureMode,
        statusError, setStatusError,
        message, setMessage,
        email, setEmail,
        senha, setSenha
    } = WelcomeViewModel()

    return (
        <View style={styles.container}>
            <CustomTopoWelcome />
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
                        icon={secureMode ? "eye-off" : "eye"}
                        onPress={() => setSecureMode(!secureMode)}
                    />}
                    value={senha}
                    onChangeText={senha => setSenha(senha)}
                    error={statusError == "error"}

                />
                {statusError == "error" && <HelperText type="error" visible={statusError}>{message}</HelperText>}

                <CustomButton
                    styleButton={styles.esqueceuSenha}
                    styleText={styles.esqueceuSenha__text}
                    text={"Esqueceu sua senha?"}
                />

            </View>

            <CustomButton
                styleButton={styles.botao}
                styleText={styles.botao__text}
                onPress={Logar}
                text={"Login"}
            />

            <Text style={styles.semConta}>Ainda não tem conta?</Text>

            <CustomButton
                styleButton={styles.botao}
                styleText={styles.botao__text}
                onPress={() => { navigation.navigate(routeName.register_company_info) }}
                text={"Register"}
            />

        </View>
    )
}

