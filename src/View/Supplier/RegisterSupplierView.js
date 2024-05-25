import { useNavigation, useRoute } from "@react-navigation/native";
import numeroCep from 'cep-promise';
import React, { useState } from "react";
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { mask } from 'remask';
import CustomButton from "../../Component/customButton";
import CustomTextInput from "../../Component/customTextInput";
import CustomToolbar from "../../Component/customToolbar";
import { registerSupplier } from "../../Repository/databaseRepository";
import styles from "../../Style/Supplier/RegisterSupplierStyle";
import { SupplierModel } from "../../model/SupplierModel";

export default function RegisterSupplierView() {
    const navigation = useNavigation();
    const [statusError, setStatusError] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [activeLoading, setActiveLoading] = useState(false);
    const route = useRoute();
    const [supplier, setSupplier] = useState(SupplierModel);

    function buscarCEP() {
        setActiveLoading(true);
        setSupplier({ ...supplier, City: '', Region: '', Address: '', Country: '' });
        if (supplier.PostalCode.length === 9) {
            numeroCep(supplier.PostalCode)
                .then(data => {
                    setSupplier({
                        ...supplier,
                        City: data.city,
                        Region: data.state,
                        Address: data.street,
                        Country: "Brasil"
                    });
                    setActiveLoading(false);
                    setStatusError('');
                    setMensagem('');
                })
                .catch(error => {
                    setStatusError("PostalCode");
                    setMensagem("CEP não encontrado");
                    setActiveLoading(false);
                });
        } else {
            setStatusError("PostalCode");
            setMensagem("Insira um CEP válido");
            setActiveLoading(false);
        }
    }

    function checkError() {
        if (supplier.CompanyName === '') {
            setStatusError(tags.CompanyName);
            setMessage("Enter the Company Name");
        } else if (supplier.ContactName === '') {
            setStatusError(tags.ContactName);
            setMessage("Enter the Contact Name");
        } else if (supplier.ContactTitle === '') {
            setStatusError(tags.ContactTitle);
            setMessage("Enter the Contact Title");
        } else if (supplier.Phone === '') {
            setStatusError(tags.Phone);
            setMessage("Enter the Phone number");
        } else {
            registerSupplier({
                CompanyName: supplier.CompanyName,
                ContactName: supplier.ContactName,
                ContactTitle: supplier.ContactTitle,
                Address: supplier.Address,
                City: supplier.City,
                Region: supplier.Region,
                PostalCode: supplier.PostalCode,
                Country: supplier.Country,
                Phone: supplier.Phone,
                CompanyId: route.params.email
            });
            navigation.goBack();
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            keyboardVerticalOffset={30}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <CustomToolbar titulo={"Supplier Register"} />
            <ScrollView contentContainerStyle={styles.inputs}>
                <CustomTextInput
                    value={supplier.CompanyName}
                    label={tags.CompanyName}
                    mode='outlined'
                    error={statusError === tags.CompanyName}
                    mensagem={mensagem}
                    onChangeText={CompanyName => setSupplier(prevState => ({ ...prevState, CompanyName }))}
                />

                <CustomTextInput
                    value={supplier.ContactName}
                    label={tags.ContactName}
                    mode='outlined'
                    error={statusError === tags.ContactName}
                    onChangeText={ContactName => setSupplier(prevState => ({ ...prevState, ContactName }))}
                />

                <CustomTextInput
                    value={supplier.ContactTitle}
                    label={tags.ContactTitle}
                    mode='outlined'
                    error={statusError === tags.ContactTitle}
                    onChangeText={ContactTitle => setSupplier(prevState => ({ ...prevState, ContactTitle }))}
                />

                <View style={styles.buscaCEP}>
                    <CustomTextInput
                        textColor='#923CFF'
                        style={styles.inputCep}
                        keyboardType={'numeric'}
                        maxLength={9}
                        value={supplier.PostalCode}
                        label={tags.PostalCode}
                        mode='outlined'
                        error={statusError === tags.PostalCode}
                        onChangeText={PostalCode => setSupplier({ ...supplier, PostalCode: mask(PostalCode, ["99999-999"]) })}
                    />
                    {activeLoading ? <ActivityIndicator size={'small'} color={'#923CFF'} /> : null}

                    <CustomButton
                        styleButton={styles.buscaCep__botao}
                        styleText={styles.buscaCep__text}
                        onPress={() => buscarCEP()}
                        text={"Buscar"}
                    />

                </View>

                <CustomTextInput
                    value={supplier.Address}
                    label={tags.Address}
                    mode='outlined'
                    editable={false}
                    error={statusError === tags.Address}
                    onChangeText={Address => setSupplier(prevState => ({ ...prevState, Address }))}
                />

                <CustomTextInput
                    value={supplier.City}
                    label={tags.City}
                    mode='outlined'
                    editable={false}
                    error={statusError === tags.City}
                    onChangeText={City => setSupplier(prevState => ({ ...prevState, City }))}
                />

                <CustomTextInput
                    value={supplier.Region}
                    label={tags.Region}
                    mode='outlined'
                    editable={false}
                    error={statusError === tags.Region}
                    onChangeText={Region => setSupplier(prevState => ({ ...prevState, Region }))}
                />

                <CustomTextInput
                    value={supplier.Country}
                    label={tags.Country}
                    mode='outlined'
                    editable={false}
                    error={statusError === tags.Country}
                    onChangeText={Country => setSupplier(prevState => ({ ...prevState, Country }))}
                />

                <CustomTextInput
                    keyboardType={'numeric'}
                    maxLength={15}
                    value={supplier.Phone}
                    label={tags.Phone}
                    mode='outlined'
                    error={statusError === tags.Phone}
                    onChangeText={Phone => setSupplier(prevState => ({ ...prevState, Phone: mask(Phone, ["(99)99999-9999"]) }))}
                />

                <CustomButton
                    styleButton={styles.botao}
                    styleText={styles.botao__text}
                    onPress={checkError}
                    text={"Registrar"}
                />

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const tags = {
    CompanyName: "Company Name",
    ContactName: "Contact Name",
    ContactTitle: "Contact Title",
    Address: "Address",
    City: "City",
    Region: "Region",
    PostalCode: "Postal Code",
    Country: "Country",
    Phone: "Phone"
}
