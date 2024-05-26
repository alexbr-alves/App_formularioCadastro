import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import arrowDown from "../../../assets/imagens/arrow_down.png";
import arrowRight from "../../../assets/imagens/arrow_right.png";
import CustomButton from "../../Component/customButton";
import CustomToolbar from "../../Component/customToolbar";
import CustomBoldText from "../../Component/custonBoldText";
import styles from "../../Style/Product/ListProductStyle";
import ListProductViewModel from "../../ViewModel/Product/ListProductViewModel";
import { routeName } from "../../routes/route_name";

export default function ListProductView() {
    const navigation = useNavigation();
    const route = useRoute();

    const {
        Dialog,
        products,
        supplier,
        categories
    } = ListProductViewModel(route.params.email);

    const handleLongPress = (employeeId) => {
        Dialog(employeeId)
    };

    return (
        <View style={styles.container}>
            <CustomToolbar titulo={"Product List"} />
            <CustomButton
                styleButton={styles.botao}
                styleText={styles.botao__text}
                onPress={() => navigation.navigate(
                    routeName.product_register, {
                    email: route.params.email
                }
                )}
                text={"New"}
            />


            <FlatList
                style={styles.flatlist}
                data={products}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.ProductID.toString()}
                renderItem={({ item }) => (
                    <FlatlistComponent item={item} onLongPress={handleLongPress} />
                )}
                ListFooterComponent={<View style={{ height: 100 }} />}
            />
        </View>
    );

    function FlatlistComponent({ item, onLongPress }) {
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
                    onLongPress={() => onLongPress(item.ProductID)}
                >
                    <Image style={styles.container_flatlist_icon} source={expandedItemId === item.ProductID ? arrowDown : arrowRight} />
                    <Text style={styles.container_flatlist_name}>{item.ProductName}</Text>
                </TouchableOpacity>
                {expandedItemId === item.ProductID && (
                    <ExpandedComponent
                        item={item}
                        supplier={supplier}
                        categories={categories}
                    />
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
                <CustomBoldText texto={"Product Name"} variavel={item.ProductName} />
                <CustomBoldText texto={"Supplier"} variavel={getName(item.SupplierID)} />
                <CustomBoldText texto={"Category"} variavel={getCategoryName(item.CategoryID)} />
                <CustomBoldText texto={"Quantity Per Unit"} variavel={item.QuantityPerUnit} />
                <CustomBoldText texto={"Unit Price"} variavel={"R$ " + item.UnitPrice} />
                <CustomBoldText texto={"Units In Stock"} variavel={item.UnitsInStock} />
                <CustomBoldText texto={"Units On Order"} variavel={item.UnitsOnOrder} />
            </View>
        );
    }

}
