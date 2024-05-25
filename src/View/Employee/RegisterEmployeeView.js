import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { mask } from 'remask';
import CustomButton from "../../Component/customButton";
import CustomTextInput from "../../Component/customTextInput";
import CustomToolbar from "../../Component/customToolbar";
import styles from "../../Style/Employee/RegisterEmployeeStyle";
import RegisterEmployeeViewModel from "../../ViewModel/Employee/RegisterEmployeeViewModel";

export default function RegisterEmployeeView() {
    const navigation = useNavigation();
    const route = useRoute();

    const {
        getCep,
        registerEmployee,
        checkImputEmpty,
        employee, setEmployee,
        statusError,
        message,
        activeLoading,
        strings } = RegisterEmployeeViewModel();


    function checkError() {
        if (checkImputEmpty()) {
            registerEmployee({
                CompanyId: route.params.email,
                LastName: employee.LastName,
                FirstName: employee.FirstName,
                Title: employee.Title,
                BirthDate: employee.BirthDate,
                HireDate: employee.HireDate,
                Address: employee.Address,
                City: employee.City,
                Region: employee.Region,
                PostalCode: employee.PostalCode,
                Country: employee.Country,
                HomePhone: employee.HomePhone,
                Extension: employee.Extension
            });
            navigation.goBack()
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            keyboardVerticalOffset={30}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <CustomToolbar titulo={"Employee Register"} />
            <ScrollView contentContainerStyle={styles.imputs}>

                <CustomTextInput
                    value={employee.FirstName}
                    label={strings.FirstName}
                    mode='outlined'
                    error={statusError === strings.FirstName}
                    mensagem={message}
                    onChangeText={FirstName => setEmployee(prevState => ({ ...prevState, FirstName }))}
                />

                <CustomTextInput
                    value={employee.LastName}
                    label={strings.LastName}
                    mode='outlined'
                    error={statusError === strings.LastName}
                    onChangeText={LastName => setEmployee(prevState => ({ ...prevState, LastName }))}
                />

                <CustomTextInput
                    value={employee.Title}
                    label={strings.Title}
                    mode='outlined'
                    error={statusError === strings.Title}
                    onChangeText={Title => setEmployee(prevState => ({ ...prevState, Title }))}
                />

                <CustomTextInput
                    keyboardType={'numeric'}
                    maxLength={10}
                    value={employee.BirthDate}
                    label={strings.BirthDate}
                    mode='outlined'
                    error={statusError === strings.BirthDate}
                    onChangeText={BirthDate => setEmployee(prevState => ({ ...prevState, BirthDate: mask(BirthDate, ["99/99/9999"]) }))}
                />

                <CustomTextInput
                    keyboardType={'numeric'}
                    maxLength={10}
                    value={employee.HireDate}
                    label={strings.HireDate}
                    mode='outlined'
                    error={statusError === strings.HireDate}
                    onChangeText={HireDate => setEmployee(prevState => ({ ...prevState, HireDate: mask(HireDate, ["99/99/9999"]) }))}
                />

                <View style={styles.buscaCEP}>
                    <CustomTextInput
                        textColor='#923CFF'
                        style={styles.inputCep}
                        keyboardType={'numeric'}
                        maxLength={9}
                        value={employee.PostalCode}
                        label={strings.PostalCode}
                        mode='outlined'
                        error={statusError === strings.PostalCode}
                        onChangeText={PostalCode => setEmployee({ ...employee, PostalCode: mask(PostalCode, ["99999-999"]) })}
                    />
                    {activeLoading ? <ActivityIndicator size={'small'} color={'#923CFF'} /> : null}
                    <CustomButton
                        styleButton={styles.buscaCep__botao}
                        onPress={() => getCep()}
                        styleText={styles.buscaCep__text}
                        text={"Buscar"}
                    />
                </View>

                <CustomTextInput
                    value={employee.Address}
                    label={strings.Address}
                    mode='outlined'
                    editable={false}
                    error={statusError === strings.Address}
                    onChangeText={Address => setEmployee(prevState => ({ ...prevState, Address }))}
                />

                <CustomTextInput
                    value={employee.City}
                    label={strings.City}
                    mode='outlined'
                    editable={false}
                    error={statusError === strings.City}
                    onChangeText={City => setEmployee(prevState => ({ ...prevState, City }))}
                />

                <CustomTextInput
                    value={employee.Region}
                    label={strings.Region}
                    mode='outlined'
                    editable={false}
                    error={statusError === strings.Region}
                    onChangeText={Region => setEmployee(prevState => ({ ...prevState, Region }))}
                />

                <CustomTextInput
                    value={employee.Country}
                    label={strings.Country}
                    mode='outlined'
                    editable={false}
                    error={statusError === strings.Country}
                    onChangeText={Country => setEmployee(prevState => ({ ...prevState, Country }))}
                />

                <CustomTextInput
                    keyboardType={'numeric'}
                    maxLength={15}
                    value={employee.HomePhone}
                    label={"Home Phone"}
                    mode='outlined'
                    error={statusError === "HomePhone"}
                    onChangeText={HomePhone => setEmployee(prevState => ({ ...prevState, HomePhone: mask(HomePhone, ["(99)99999-9999"]) }))}
                />

                <CustomTextInput
                    keyboardType={'numeric'}
                    value={employee.Extension}
                    label={"Extension"}
                    mode='outlined'
                    error={statusError === "Extension"}
                    onChangeText={Extension => setEmployee(prevState => ({ ...prevState, Extension }))}
                />

                <CustomButton
                    styleButton={styles.botao}
                    onPress={checkError}
                    styleText={styles.botao__text}
                    text={"Próximo"}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}



