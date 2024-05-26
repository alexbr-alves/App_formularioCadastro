import { useNavigation, useRoute } from "@react-navigation/native";

import React from "react";
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { mask } from 'remask';
import CustomButton from "../../Component/customButton";
import CustomTextInput from "../../Component/customTextInput";
import CustomToolbar from "../../Component/customToolbar";
import styles from "../../Style/Supplier/RegisterSupplierStyle";
import RegisterSupplierViewModel from "../../ViewModel/Supplier/RegisterSupplierViewModel";


export default function RegisterSupplierView() {
    const navigation = useNavigation();
    const route = useRoute();

    const {
        strings,
        checkImputEmpty,
        register,
        getCpf,
        statusError,
        message,
        activeLoading,
        supplier,
        setSupplier
    } = RegisterSupplierViewModel()



    function finishRegister() {
        if (checkImputEmpty()) {
            register({
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
                    label={strings.CompanyName}
                    mode='outlined'
                    error={statusError === strings.CompanyName}
                    mensagem={message}
                    onChangeText={CompanyName => setSupplier(prevState => ({ ...prevState, CompanyName }))}
                />

                <CustomTextInput
                    value={supplier.ContactName}
                    label={strings.ContactName}
                    mode='outlined'
                    error={statusError === strings.ContactName}
                    mensagem={message}
                    onChangeText={ContactName => setSupplier(prevState => ({ ...prevState, ContactName }))}
                />

                <CustomTextInput
                    value={supplier.ContactTitle}
                    label={strings.ContactTitle}
                    mode='outlined'
                    error={statusError === strings.ContactTitle}
                    mensagem={message}
                    onChangeText={ContactTitle => setSupplier(prevState => ({ ...prevState, ContactTitle }))}
                />

                <View style={styles.buscaCEP}>
                    <CustomTextInput
                        textColor='#923CFF'
                        style={styles.inputCep}
                        keyboardType={'numeric'}
                        maxLength={9}
                        value={supplier.PostalCode}
                        label={strings.PostalCode}
                        mode='outlined'
                        mensagem={message}
                        error={statusError === strings.PostalCode}
                        onChangeText={PostalCode => setSupplier({ ...supplier, PostalCode: mask(PostalCode, ["99999-999"]) })}
                    />
                    {activeLoading ? <ActivityIndicator size={'small'} color={'#923CFF'} /> : null}

                    <CustomButton
                        styleButton={styles.buscaCep__botao}
                        styleText={styles.buscaCep__text}
                        onPress={() => getCpf()}
                        text={"Buscar"}
                    />

                </View>

                <CustomTextInput
                    value={supplier.Address}
                    label={strings.Address}
                    mode='outlined'
                    editable={false}
                    error={statusError === strings.Address}
                    mensagem={message}
                    onChangeText={Address => setSupplier(prevState => ({ ...prevState, Address }))}
                />

                <CustomTextInput
                    value={supplier.City}
                    label={strings.City}
                    mode='outlined'
                    editable={false}
                    error={statusError === strings.City}
                    mensagem={message}
                    onChangeText={City => setSupplier(prevState => ({ ...prevState, City }))}
                />

                <CustomTextInput
                    value={supplier.Region}
                    label={strings.Region}
                    mode='outlined'
                    editable={false}
                    error={statusError === strings.Region}
                    mensagem={message}
                    onChangeText={Region => setSupplier(prevState => ({ ...prevState, Region }))}
                />

                <CustomTextInput
                    value={supplier.Country}
                    label={strings.Country}
                    mode='outlined'
                    editable={false}
                    error={statusError === strings.Country}
                    mensagem={message}
                    onChangeText={Country => setSupplier(prevState => ({ ...prevState, Country }))}
                />

                <CustomTextInput
                    keyboardType={'numeric'}
                    maxLength={15}
                    value={supplier.Phone}
                    label={strings.Phone}
                    mode='outlined'
                    error={statusError === strings.Phone}
                    mensagem={message}
                    onChangeText={Phone => setSupplier(prevState => ({ ...prevState, Phone: mask(Phone, ["(99)99999-9999"]) }))}
                />

                <CustomButton
                    styleButton={styles.botao}
                    styleText={styles.botao__text}
                    onPress={finishRegister}
                    text={"Registrar"}
                />

            </ScrollView>
        </KeyboardAvoidingView>
    )
}


