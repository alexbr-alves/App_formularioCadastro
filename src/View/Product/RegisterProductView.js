import { Picker } from '@react-native-picker/picker';
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { mask } from 'remask';

import CustomButton from '../../Component/customButton';
import CustomTextInput from "../../Component/customTextInput";
import CustomToolbar from "../../Component/customToolbar";

import styles from "../../Style/Product/RegisterProductStyle";
import CustonModal from "../RegisterCategoryView";

import RegisterProductViewModel from "../../ViewModel/Product/RegisterProductViewModel";

export default function RegisterProductView() {
    const navigation = useNavigation();
    const route = useRoute();

    const {
        register,
        checkImputEmpty,
        strings,
        statusError,
        mensagem,
        modalVisible,
        setModalVisible,
        supplier,
        category,
        product,
        setProduct,
        loadCategory,
    } = RegisterProductViewModel(route.params.email);

    function checkError() {
        if (checkImputEmpty()) {
            register({
                ProductName: product.ProductName,
                SupplierID: product.SupplierID,
                CategoryID: product.CategoryID,
                QuantityPerUnit: product.QuantityPerUnit,
                UnitPrice: product.UnitPrice,
                UnitsInStock: product.UnitsInStock,
                UnitsOnOrder: product.UnitsOnOrder,
                CompanyId: route.params.email
            });
            navigation.goBack();
        }
    }

    return (
        <>
            <KeyboardAvoidingView
                style={styles.container}
                keyboardVerticalOffset={30}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <CustomToolbar titulo={"Product Register"} />
                <ScrollView contentContainerStyle={styles.inputs}>

                    <CustomTextInput
                        value={product.ProductName}
                        label={strings.ProductName}
                        mode='outlined'
                        error={statusError === strings.ProductName}
                        mensagem={mensagem}
                        onChangeText={ProductName => setProduct(prevState => ({ ...prevState, ProductName }))}
                    />

                    <View style={styles.pickerInput_supplier}>
                        <Picker
                            selectedValue={product.SupplierID}
                            onValueChange={SupplierID => setProduct(prevState => ({ ...prevState, SupplierID }))}>
                            {supplier.map((item, index) => (
                                <Picker.Item key={index} label={item.CompanyName} value={item.SupplierID} />
                            ))}
                        </Picker>
                    </View>

                    <CustomTextInput
                        keyboardType={'numeric'}
                        value={product.QuantityPerUnit}
                        label={strings.QuantityPerUnit}
                        mode='outlined'
                        error={statusError === strings.QuantityPerUnit}
                        onChangeText={QuantityPerUnit => setProduct(prevState => ({ ...prevState, QuantityPerUnit }))}
                    />

                    <CustomTextInput
                        keyboardType={'numeric'}
                        value={product.UnitPrice}
                        label={strings.UnitPrice}
                        mode='outlined'
                        error={statusError === strings.UnitPrice}
                        onChangeText={UnitPrice => setProduct(prevState => ({ ...prevState, UnitPrice: mask(UnitPrice, "99999.99") }))}
                    />

                    <CustomTextInput
                        keyboardType={'numeric'}
                        value={product.UnitsInStock}
                        label={strings.UnitsInStock}
                        mode='outlined'
                        error={statusError === strings.UnitsInStock}
                        onChangeText={UnitsInStock => setProduct(prevState => ({ ...prevState, UnitsInStock }))}
                    />

                    <CustomTextInput
                        keyboardType={'numeric'}
                        value={product.UnitsOnOrder}
                        label={strings.UnitsOnOrder}
                        mode='outlined'
                        error={statusError === strings.UnitsOnOrder}
                        onChangeText={UnitsOnOrder => setProduct(prevState => ({ ...prevState, UnitsOnOrder }))}
                    />

                    <View style={styles.category}>
                        <View style={styles.pickerInput}>
                            <Picker
                                selectedValue={product.CategoryID}
                                onValueChange={CategoryID => setProduct(prevState => ({ ...prevState, CategoryID }))}>
                                {category.map((item, index) => (
                                    <Picker.Item key={index} label={item.CategoryName} value={item.CategoryID} />
                                ))}
                            </Picker>
                        </View>

                        <CustomButton
                            styleButton={styles.newCategory__botao}
                            styleText={styles.newCategory__text}
                            onPress={() => setModalVisible(true)}
                            text={"Add"}
                        />
                    </View>

                    <CustomButton
                        styleButton={styles.botao}
                        styleText={styles.botao__text}
                        onPress={checkError}
                        text={"Register"}
                    />

                </ScrollView>
            </KeyboardAvoidingView>
            <CustonModal
                onLoad={loadCategory}
                id={route.params.email}
                state={modalVisible}
                setState={setModalVisible} />
        </>
    )
}

