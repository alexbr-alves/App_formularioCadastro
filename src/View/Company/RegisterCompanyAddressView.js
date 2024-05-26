import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, KeyboardAvoidingView, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { mask } from 'remask';
import CustomButton from "../../Component/customButton";
import CustomTextInput from "../../Component/customTextInput";
import CustomToolbar from "../../Component/customToolbar";
import styles from "../../Style/Company/RegisterCompanyAddressStyle";
import RegisterCompanyAddressViewModel from "../../ViewModel/Company/RegisterCompanyAddressViewModel";
import { routeName } from "../../routes/route_name";

export default function RegisterCompanyAddressView({ navigation: { goBack } }) {
    const route = useRoute();
    const navigation = useNavigation();

    const {
        statusError,
        message,
        activeLoading,
        addressData,
        setAddressData,
        strings,
        checkimputEmpty,
        getCPF
    } = RegisterCompanyAddressViewModel()


    const HandleNext = () => {
        if (checkimputEmpty()) {
            navigation.navigate(routeName.create_login, {
                registrationData: route.params.registrationData,
                addressData
            })
        }
    }


    return (
        <KeyboardAvoidingView behavior={"height"}
            keyboardVerticalOffset={500} style={styles.container}>

            <CustomToolbar titulo={strings.title} />

            <View style={styles.espaco__input}>

                <View style={styles.buscaCPF}>
                    <TextInput
                        textColor='#923CFF'
                        style={styles.inputCPF}
                        keyboardType={'numeric'}
                        maxLength={9}
                        value={addressData.PostalCode}
                        label={strings.postalCodeLabel}
                        mode='outlined'
                        error={statusError === strings.postalCodeLabel}
                        onChangeText={PostalCode => setAddressData({ ...addressData, PostalCode: mask(PostalCode, [strings.cepMask]) })}
                    />
                    {activeLoading ? <ActivityIndicator size={'small'} color={'#923CFF'} /> : null}
                    <CustomButton
                        styleButton={styles.buscaCPF__botao}
                        styleText={styles.buscaCPF__text}
                        onPress={() => getCPF()}
                        text={strings.searchButtonText}
                    />
                </View>
                {statusError === strings.postalCodeLabel && <HelperText type="error" visible={statusError}>{message}</HelperText>}

                <CustomTextInput
                    value={addressData.City}
                    label={strings.cityLabel}
                    mode='outlined'
                    error={statusError === strings.cityLabel}
                    mensagem={message}
                    onChangeText={City => setAddressData(prevState => ({ ...prevState, City }))}
                />

                <CustomTextInput
                    value={addressData.Region}
                    label={strings.regionLabel}
                    mode='outlined'
                    error={statusError === strings.regionLabel}
                    mensagem={message}
                    onChangeText={Region => setAddressData(prevState => ({ ...prevState, Region }))}
                />

                <CustomTextInput
                    value={addressData.Address}
                    label={strings.addressLabel}
                    mode='outlined'
                    error={statusError === strings.addressLabel}
                    mensagem={message}
                    onChangeText={Address => setAddressData(prevState => ({ ...prevState, Address }))}
                />
                <CustomTextInput
                    value={addressData.Number}
                    label={strings.numberLabel}
                    mode='outlined'
                    keyboardType={"numeric"}
                    error={statusError === strings.numberLabel}
                    mensagem={message}
                    onChangeText={Number => setAddressData(prevState => ({ ...prevState, Number }))}
                />

            </View>

            <CustomButton
                styleButton={styles.botao}
                styleText={styles.botao__text}
                onPress={HandleNext}
                text={strings.nextButtonText}
            />

        </KeyboardAvoidingView>
    )
}
