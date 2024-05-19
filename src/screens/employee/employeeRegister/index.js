import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import Toolbar from "../../componenetes/toolbar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mask } from 'remask';
import numeroCep from 'cep-promise';
import styles from "./styles"
import { registerEmployee } from "../../../services/database_sqlite";

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

                <TextInput
                    value={employee.FirstName}
                    label={tags.FirstName}
                    mode='outlined'
                    error={statusError === tags.FirstName}
                    onChangeText={FirstName => setEmployee(prevState => ({ ...prevState, FirstName }))}
                />
                {statusError === tags.FirstName && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}


                <TextInput
                    value={employee.LastName}
                    label={tags.LastName}
                    mode='outlined'
                    error={statusError === tags.LastName}
                    onChangeText={LastName => setEmployee(prevState => ({ ...prevState, LastName }))}
                />
                {statusError === tags.LastName && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <TextInput
                    value={employee.Title}
                    label={tags.Title}
                    mode='outlined'
                    error={statusError === tags.Title}
                    onChangeText={Title => setEmployee(prevState => ({ ...prevState, Title }))}
                />
                {statusError === tags.Title && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <TextInput
                    keyboardType={'numeric'}
                    maxLength={10}
                    value={employee.BirthDate}
                    label={tags.BirthDate}
                    mode='outlined'
                    error={statusError === tags.BirthDate}
                    onChangeText={BirthDate => setEmployee(prevState => ({ ...prevState, BirthDate: mask(BirthDate, ["99/99/9999"]) }))}
                />
                {statusError === tags.BirthDate && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <TextInput
                    keyboardType={'numeric'}
                    maxLength={10}
                    value={employee.HireDate}
                    label={tags.HireDate}
                    mode='outlined'
                    error={statusError === tags.HireDate}
                    onChangeText={HireDate => setEmployee(prevState => ({ ...prevState, HireDate: mask(HireDate, ["99/99/9999"]) }))}
                />
                {statusError === tags.HireDate && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <View style={styles.buscaCEP}>
                    <TextInput
                        textColor='#923CFF'
                        style={styles.inputCep}
                        keyboardType={'numeric'}
                        maxLength={9}
                        value={employee.PostalCode}
                        label={"Postal code"}
                        mode='outlined'
                        editable={true}
                        error={statusError === "PostalCode"}
                        onChangeText={PostalCode => setEmployee({ ...employee, PostalCode: mask(PostalCode, ["99999-999"]) })}
                    />
                    {activeLoading ? <ActivityIndicator size={'small'} color={'#923CFF'} /> : null}
                    <TouchableOpacity style={styles.buscaCep__botao} onPress={() => buscarCEP()}>
                        <Text style={styles.buscaCep__text}>Buscar</Text>
                    </TouchableOpacity>
                </View>
                {statusError === "PostalCode" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <TextInput
                    value={employee.Address}
                    label={tags.Address}
                    mode='outlined'
                    error={statusError === tags.Address}
                    onChangeText={Address => setEmployee(prevState => ({ ...prevState, Address }))}
                />
                {statusError === tags.Address && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <TextInput
                    value={employee.City}
                    label={tags.City}
                    mode='outlined'
                    error={statusError === tags.City}
                    onChangeText={City => setEmployee(prevState => ({ ...prevState, City }))}
                />
                {statusError === tags.City && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <TextInput
                    value={employee.Region}
                    label={tags.Region}
                    mode='outlined'
                    error={statusError === tags.Region}
                    onChangeText={Region => setEmployee(prevState => ({ ...prevState, Region }))}
                />
                {statusError === tags.Region && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <TextInput
                    value={employee.Country}
                    label={tags.Country}
                    mode='outlined'
                    error={statusError === tags.Country}
                    onChangeText={Country => setEmployee(prevState => ({ ...prevState, Country }))}
                />
                {statusError === tags.Region && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <TextInput
                    keyboardType={'numeric'}
                    maxLength={15}
                    value={employee.HomePhone}
                    label={"Home Phone"}
                    mode='outlined'
                    error={statusError === "HomePhone"}
                    onChangeText={HomePhone => setEmployee(prevState => ({ ...prevState, HomePhone: mask(HomePhone, ["(99)99999-9999"]) }))}
                />
                {statusError === "HomePhone" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

                <TextInput
                    keyboardType={'numeric'}
                    value={employee.Extension}
                    label={"Extension"}
                    mode='outlined'
                    error={statusError === "Extension"}
                    onChangeText={Extension => setEmployee(prevState => ({ ...prevState, Extension }))}
                />
                {statusError === "Extension" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

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

