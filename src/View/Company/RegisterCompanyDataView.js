import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import CustomButton from "../../Component/customButton";
import CustomTextInput from "../../Component/customTextInput";
import CustomToolbar from "../../Component/customToolbar";
import styles from "../../Style/Company/RegisterCompanyDataStyle";
import RegisterCompanyDataViewModel from "../../ViewModel/Company/RegisterCompanyDataViewModel";
import { routeName } from "../../routes/route_name";


export default function RegisterCompanyDataView({ navigation: { goBack } }) {
    const navigation = useNavigation();
    const { statusError,
        message,
        strings,
        registrationData,
        setRegistrationData,
        checkInputEmpty } = RegisterCompanyDataViewModel();


    const handleNext = () => {
        if (checkInputEmpty()) {
            navigation.navigate(routeName.register_company_address, { registrationData })
        }
    }

    return (
        <View style={styles.container}>
            <CustomToolbar titulo={strings.title} />
            <View style={styles.espaco__input}>

                <CustomTextInput
                    value={registrationData.CompanyName}
                    label={strings.companyNameLabel}
                    mode='outlined'
                    error={statusError === strings.companyNameLabel}
                    mensagem={message}
                    onChangeText={CompanyName => setRegistrationData(prevState => ({ ...prevState, CompanyName }))}
                />

                <CustomTextInput
                    value={registrationData.ContactName}
                    label={strings.contactNameLabel}
                    mode='outlined'
                    error={statusError === strings.contactNameLabel}
                    mensagem={message}
                    onChangeText={ContactName => setRegistrationData(prevState => ({ ...prevState, ContactName }))}
                />

                <CustomTextInput
                    value={registrationData.ContactTitle}
                    label={strings.contactTitleLabel}
                    mode='outlined'
                    error={statusError === strings.contactTitleLabel}
                    mensagem={message}
                    onChangeText={ContactTitle => setRegistrationData(prevState => ({ ...prevState, ContactTitle }))}
                />

                <CustomTextInput
                    value={registrationData.phoneNumber}
                    label={strings.phoneNumberLabel}
                    mode='outlined'
                    keyboardType={"numeric"}
                    error={statusError === strings.phoneNumberLabel}
                    mensagem={message}
                    onChangeText={phoneNumber => setRegistrationData(prevState => ({ ...prevState, phoneNumber }))}
                />
            </View>

            <CustomButton
                styleButton={styles.botao}
                styleText={styles.botao__text}
                onPress={handleNext}
                text={strings.nextButton}
            />
        </View>

    )
}