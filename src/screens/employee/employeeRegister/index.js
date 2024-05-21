import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import Toolbar from "../../componenetes/toolbar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mask } from 'remask';
import numeroCep from 'cep-promise';
import styles from "./styles"
import { registerEmployee } from "../../repository/databaseRepository";
import CustomTextInput from "../../componenetes/textImput";

export default function EmployeeRegister() {
    const navigation = useNavigation();
    const [statusError, setStatusError] = useState('');
    const [Mensagem, SetMensagem] = useState('');
    const [activeLoading, setActiveLoading] = useState(false);
    const route = useRoute();
    const [employee, setEmployee] = useState({
        CompanyId: '',
        LastName: '',
        FirstName: '',
        Title: '',
        BirthDate: '',
        HireDate: '',
        Address: '',
        City: '',
        Region: '',
        PostalCode: '',
        Country: '',
        HomePhone: '',
        Extension: ''
    });

    function buscarCEP() {
        setActiveLoading(true)
        setEmployee({ ...employee, City: '', Region: '', Address: '', Country: '' })
        if (employee.PostalCode.length === 9) {
            numeroCep(employee.PostalCode)
                .then(data => {
                    setEmployee({
                        ...employee,
                        City: data.city,
                        Region: data.state,
                        Address: data.street,
                        Country: "Brasil"
                    });
                    setActiveLoading(false)
                    setStatusError('')
                    SetMensagem('')
                })
        } else {
            setStatusError("PostalCode")
            SetMensagem("Enter Postal Code")
            setActiveLoading(false)
        }
    }

    function checkError() {
        if (employee.FirstName === '') {
            setStatusError(tags.FirstName)
            SetMensagem("Enter the First name")
        } else if (employee.LastName === '') {
            setStatusError(tags.LastName)
            SetMensagem("Enter the Last name")
        } else if (employee.Title === '') {
            setStatusError(tags.Title)
            SetMensagem("Title")
        } else if (employee.BirthDate === '') {
            setStatusError(tags.BirthDate)
            SetMensagem("Enter the Birth date")
        } else if (employee.HireDate === '') {
            setStatusError(tags.HireDate)
            SetMensagem("Enter the Hire date")
        } else if (employee.HomePhone === '') {
            setStatusError(tags.HomePhone)
            SetMensagem("Enter the Home phone")
        } else if (employee.Extension === '') {
            setStatusError(tags.Extension)
            SetMensagem("Enter the Extension")
        } else {
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
            <Toolbar titulo={"Employee Register"} />
            <ScrollView contentContainerStyle={styles.imputs}>

                <CustomTextInput
                    value={employee.FirstName}
                    label={tags.FirstName}
                    mode='outlined'
                    error={statusError === tags.FirstName}
                    mensagem={Mensagem}
                    onChangeText={FirstName => setEmployee(prevState => ({ ...prevState, FirstName }))}
                />

                <CustomTextInput
                    value={employee.LastName}
                    label={tags.LastName}
                    mode='outlined'
                    error={statusError === tags.LastName}
                    onChangeText={LastName => setEmployee(prevState => ({ ...prevState, LastName }))}
                />

                <CustomTextInput
                    value={employee.Title}
                    label={tags.Title}
                    mode='outlined'
                    error={statusError === tags.Title}
                    onChangeText={Title => setEmployee(prevState => ({ ...prevState, Title }))}
                />

                <CustomTextInput
                    keyboardType={'numeric'}
                    maxLength={10}
                    value={employee.BirthDate}
                    label={tags.BirthDate}
                    mode='outlined'
                    error={statusError === tags.BirthDate}
                    onChangeText={BirthDate => setEmployee(prevState => ({ ...prevState, BirthDate: mask(BirthDate, ["99/99/9999"]) }))}
                />

                <CustomTextInput
                    keyboardType={'numeric'}
                    maxLength={10}
                    value={employee.HireDate}
                    label={tags.HireDate}
                    mode='outlined'
                    error={statusError === tags.HireDate}
                    onChangeText={HireDate => setEmployee(prevState => ({ ...prevState, HireDate: mask(HireDate, ["99/99/9999"]) }))}
                />

                <View style={styles.buscaCEP}>
                    <CustomTextInput
                        textColor='#923CFF'
                        style={styles.inputCep}
                        keyboardType={'numeric'}
                        maxLength={9}
                        value={employee.PostalCode}
                        label={tags.PostalCode}
                        mode='outlined'
                        error={statusError === tags.PostalCode}
                        onChangeText={PostalCode => setEmployee({ ...employee, PostalCode: mask(PostalCode, ["99999-999"]) })}
                    />
                    {activeLoading ? <ActivityIndicator size={'small'} color={'#923CFF'} /> : null}
                    <TouchableOpacity style={styles.buscaCep__botao} onPress={() => buscarCEP()}>
                        <Text style={styles.buscaCep__text}>Buscar</Text>
                    </TouchableOpacity>
                </View>

                <CustomTextInput
                    value={employee.Address}
                    label={tags.Address}
                    mode='outlined'
                    editable={false}
                    error={statusError === tags.Address}
                    onChangeText={Address => setEmployee(prevState => ({ ...prevState, Address }))}
                />

                <CustomTextInput
                    value={employee.City}
                    label={tags.City}
                    mode='outlined'
                    editable={false}
                    error={statusError === tags.City}
                    onChangeText={City => setEmployee(prevState => ({ ...prevState, City }))}
                />

                <CustomTextInput
                    value={employee.Region}
                    label={tags.Region}
                    mode='outlined'
                    editable={false}
                    error={statusError === tags.Region}
                    onChangeText={Region => setEmployee(prevState => ({ ...prevState, Region }))}
                />

                <CustomTextInput
                    value={employee.Country}
                    label={tags.Country}
                    mode='outlined'
                    editable={false}
                    error={statusError === tags.Country}
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

                <TouchableOpacity style={styles.botao} onPress={checkError}>
                    <Text style={styles.botao__text}>Próximo</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const tags = {
    FirstName: "First name",
    LastName: "Last name",
    Title: "Title",
    BirthDate: "Birth date",
    HireDate: "Hire date",
    Address: "Address",
    City: "City",
    Region: "Region",
    PostalCode: "Postal code",
    Country: "Country",
    HomePhone: "Home hhone",
    Extension: "Extension"
}

