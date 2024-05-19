import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import styles from "./styles";

import { getProducts, createTableProducts } from "../../../services/database_sqlite";
import ProductMock from "../../../mock/ProductMock";
import LimitText from "../../../utils/limitText";
import Toolbar from "../../componenetes/toolbar";
import arrowDown from "../../../../assets/imagens/arrow_down.png";
import arrowRight from "../../../../assets/imagens/arrow_right.png";
import { routeName } from "../../../routes/route_name";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();

    const loadProducts = useCallback(() => {
        getProducts(route.params.email, (products) => {
            setProducts(products);
        });
    }, [route.params.email]);

    useEffect(() => {
        createTableProducts();
        ProductMock();
        loadProducts();
    }, [loadProducts]);

    useFocusEffect(
        useCallback(() => {
            loadProducts();
        }, [loadProducts])
    );

    return (
        <View style={styles.container}>
            <Toolbar titulo={"Product List"} />
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(
                routeName.product_register, {
                    email: route.params.email
            })}>
                <Text style={styles.botao__text}>New</Text>
            </TouchableOpacity>

            <FlatList
                style={styles.flatlist}
                data={products}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.ProductID.toString()}
                renderItem={({ item }) => (
                    <FlatlistComponent item={item} />
                )}
            />
        </View>
    );

    function FlatlistComponent({ item }) {
        const [expandedItemId, setExpandedItemId] = useState(null);

        const handlePress = (itemId) => {
            setExpandedItemId(itemId === expandedItemId ? null : itemId);
        };

        return (
            <>
                <TouchableOpacity
                    style={styles.container_flatlist}
                    key={item.ProductID.toString()}
                    onPress={() => handlePress(item.ProductID)}
                >
                    <Image style={styles.container_flatlist_icon} source={expandedItemId === item.ProductID ? arrowDown : arrowRight} />
                    <Text style={styles.container_flatlist_name}>{item.ProductName}</Text>
                    {expandedItemId === null && (
                        <Text style={styles.container_flatlist_title}>{LimitText(item.QuantityPerUnit.toString() + " /boxer", 15)}</Text>
                    )}
                </TouchableOpacity>
                {expandedItemId === item.ProductID && (
                    <ExpandedComponent item={item} />
                )}
            </>
        );
    }

    function ExpandedComponent({ item }) {
        return (
            <View style={styles.expandedContainer}>
                <TextoNegrito texto={"Product Name"} variavel={item.ProductName} />
                <TextoNegrito texto={"Supplier ID"} variavel={item.SupplierID} />
                <TextoNegrito texto={"Category ID"} variavel={item.CategoryID} />
                <TextoNegrito texto={"Quantity Per Unit"} variavel={item.QuantityPerUnit + " /boxer"} />
                <TextoNegrito texto={"Unit Price"} variavel={item.UnitPrice} />
                <TextoNegrito texto={"Units In Stock"} variavel={item.UnitsInStock} />
                <TextoNegrito texto={"Units On Order"} variavel={item.UnitsOnOrder} />
            </View>
        );
    }

    function TextoNegrito({ texto, variavel }) {
        return (
            <Text style={{ fontSize: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>{texto}</Text>: {' '}
                <Text>{variavel}</Text>
            </Text>
        );
    }
}
