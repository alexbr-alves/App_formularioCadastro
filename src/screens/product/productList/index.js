import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import styles from "./styles";

import { getProducts } from "../../../services/database/products";
import ProductMock from "../../../mock/ProductMock";
import Toolbar from "../../componenetes/toolbar"; 
import arrowDown from "../../../../assets/imagens/arrow_down.png";
import arrowRight from "../../../../assets/imagens/arrow_right.png";
import { routeName } from "../../../routes/route_name";
import { getSuppliers } from "../../../services/database/suppliers";
import { getCategories } from "../../../services/database/category";
import LimitText from "../../../utils/limitText";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const navigation = useNavigation();
    const [supplier, setSupplier] = useState([])
    const [categories, setCategories] = useState([])
    const route = useRoute();

    const loadProducts = useCallback(() => {
        getProducts(route.params.email, (products) => {
            setProducts(products);
        });
    }, [route.params.email]);

    const loadSupplier = useCallback(() => {
        getSuppliers(route.params.email, (supplier) => {
            setSupplier(supplier);
        });
    }, [route.params.email]);

    const loadCategory = useCallback(() => {
        getCategories(route.params.email, (categories) => {
            setCategories(categories)
        }, [route.params.email])
    })

    useEffect(() => {
        ProductMock()
        loadCategory()
        loadSupplier()
        loadProducts();
    }, [loadProducts]);

    useFocusEffect(
        useCallback(() => {
            loadSupplier()
            loadCategory()
            loadProducts()
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
                ListFooterComponent={<View style={{ height: 100 }} />}
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
                </TouchableOpacity>
                {expandedItemId === item.ProductID && (
                    <ExpandedComponent item={item} supplier={supplier} categories={categories}/>
                )}
            </>
        );
    }

    function ExpandedComponent({ item, supplier, categories }) {
        function getName(id) {
            for (let i = 0; i < supplier.length; i++) {
                if (supplier[i].SupplierID === id) {
                    return supplier[i].CompanyName;
                }
            }
            return null;
        }

        function getCategoryName(id) {
            for (let i = 0; i < categories.length; i++) {
                if (categories[i].CategoryID === id) {
                    return categories[i].CategoryName;
                }
            }
            return null;
        }
        return (
            <View style={styles.expandedContainer}>
                <TextoNegrito texto={"Product Name"} variavel={item.ProductName} />
                <TextoNegrito texto={"Supplier"} variavel={getName(item.SupplierID)} />
                <TextoNegrito texto={"Category"} variavel={getCategoryName(item.CategoryID)} />
                <TextoNegrito texto={"Quantity Per Unit"} variavel={item.QuantityPerUnit} />
                <TextoNegrito texto={"Unit Price"} variavel={"R$ " + item.UnitPrice} />
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
