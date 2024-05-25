import { Picker } from '@react-native-picker/picker';
import React, { useCallback, useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { mask } from 'remask';

import CustomButton from '../../Component/customButton';
import CustomTextInput from "../../Component/customTextInput";
import CustomToolbar from "../../Component/customToolbar";

import {
    getCategories,
    getSuppliers,
    registerProduct
} from "../../Repository/databaseRepository";

import styles from "../../Style/Product/RegisterProductStyle";
import { ProductModel } from '../../model/productModel';
import CustonModal from "../RegisterCategoryView";

export default function RegisterProductView() {
    const navigation = useNavigation();
    const [statusError, setStatusError] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const route = useRoute();
    const [supplier, setSupplier] = useState([])
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState(ProductModel);

    const loadCategory = useCallback(() => {
        getCategories(route.params.email, (category) => {
            setCategory(category)
        })
    }, [route.params.email]);

    const loadSupplier = useCallback(() => {
        getSuppliers(route.params.email, (supplier) => {
            setSupplier(supplier)
        })
    }, [route.params.email])

    useEffect(() => {
        loadCategory()
        loadSupplier()
    }, [loadCategory, loadSupplier]);

    useFocusEffect(
        useCallback(() => {
            loadCategory()
            loadSupplier()
        }, [loadCategory, loadSupplier])
    )

    function checkError() {
        if (product.ProductName === '') {
            setStatusError(tags.ProductName);
            setMensagem("Enter the Product Name");
        } else if (product.SupplierID === '') {
            setStatusError(tags.SupplierID);
            setMensagem("Enter the Supplier ID");
        } else if (product.CategoryID === '') {
            setStatusError(tags.CategoryID);
            setMensagem("Enter the Category ID");
        } else if (product.QuantityPerUnit === '') {
            setStatusError(tags.QuantityPerUnit);
            setMensagem("Enter the Quantity Per Unit");
        } else if (product.UnitPrice === '') {
            setStatusError(tags.UnitPrice);
            setMensagem("Enter the Unit Price");
        } else {
            registerProduct({
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
                        label={tags.ProductName}
                        mode='outlined'
                        error={statusError === tags.ProductName}
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
                        value={product.QuantityPerUnit}
                        label={tags.QuantityPerUnit}
                        mode='outlined'
                        error={statusError === tags.QuantityPerUnit}
                        onChangeText={QuantityPerUnit => setProduct(prevState => ({ ...prevState, QuantityPerUnit }))}
                    />

                    <CustomTextInput
                        keyboardType={'numeric'}
                        value={product.UnitPrice}
                        label={tags.UnitPrice}
                        mode='outlined'
                        error={statusError === tags.UnitPrice}
                        onChangeText={UnitPrice => setProduct(prevState => ({ ...prevState, UnitPrice: mask(UnitPrice, "99999.99") }))}
                    />

                    <CustomTextInput
                        keyboardType={'numeric'}
                        value={product.UnitsInStock}
                        label={tags.UnitsInStock}
                        mode='outlined'
                        error={statusError === tags.UnitsInStock}
                        onChangeText={UnitsInStock => setProduct(prevState => ({ ...prevState, UnitsInStock }))}
                    />

                    <CustomTextInput
                        keyboardType={'numeric'}
                        value={product.UnitsOnOrder}
                        label={tags.UnitsOnOrder}
                        mode='outlined'
                        error={statusError === tags.UnitsOnOrder}
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

const tags = {
    ProductName: "Product Name",
    SupplierID: "Supplier ID",
    CategoryID: "Category ID",
    QuantityPerUnit: "Quantity Per Unit",
    UnitPrice: "Unit Price",
    UnitsInStock: "Units In Stock",
    UnitsOnOrder: "Units On Order"
}
