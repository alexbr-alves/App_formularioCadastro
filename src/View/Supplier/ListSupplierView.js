import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../../Style/Supplier/ListSupplierStyle";

import arrowDown from "../../../assets/imagens/arrow_down.png";
import arrowRight from "../../../assets/imagens/arrow_right.png";
import CustomButton from "../../Component/customButton";
import CustomToolbar from "../../Component/customToolbar";
import { getSuppliers } from "../../Repository/databaseRepository";
import SupplierMock from "../../mock/SupplierMock";
import { routeName } from "../../routes/route_name";
import LimitText from "../../utils/limitText";

export default function ListSupplierView() {
    const [fornecedores, setFornecedores] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();

    const loadSuppliers = useCallback(() => {
        getSuppliers(route.params.email, (fornecedores) => {
            setFornecedores(fornecedores);
        });
    }, [route.params.email]);

    useEffect(() => {
        SupplierMock()
        loadSuppliers();
    }, [loadSuppliers]);

    useFocusEffect(
        useCallback(() => {
            loadSuppliers();
        }, [loadSuppliers])
    );

    return (
        <View style={styles.container}>
            <CustomToolbar titulo={"Supplier List"} />
            <CustomButton
                styleButton={styles.botao}
                styleText={styles.botao__text}
                onPress={() => navigation.navigate(routeName.supplier_register, { email: route.params.email })}
                text={"New"}
            />


            <FlatList
                style={styles.flatlist}
                data={fornecedores}
                keyExtractor={(item) => item.SupplierID.toString()}
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
                    key={item.SupplierID.toString()}
                    onPress={() => handlePress(item.SupplierID)}
                >
                    <Image style={styles.container_flatlist_icon} source={expandedItemId === item.SupplierID ? arrowDown : arrowRight} />
                    <Text style={styles.container_flatlist_name}>{LimitText(item.CompanyName, 22)}</Text>
                </TouchableOpacity>
                {expandedItemId === item.SupplierID && (
                    <ExpandedComponent item={item} />
                )}
            </>
        );
    }

    function ExpandedComponent({ item }) {
        return (
            <View style={styles.expandedContainer}>
                <CustomBoldText texto={"Contact name"} variavel={item.ContactName} />
                <CustomBoldText texto={"Contact title"} variavel={item.ContactTitle} />
                <CustomBoldText texto={"Address"} variavel={item.Address} />
                <CustomBoldText texto={"City"} variavel={item.City} />
                <CustomBoldText texto={"Region"} variavel={item.Region} />
                <CustomBoldText texto={"Postal code"} variavel={item.PostalCode} />
                <CustomBoldText texto={"Country"} variavel={item.Country} />
                <CustomBoldText texto={"Phone"} variavel={item.Phone} />
            </View>
        );
    }

    function CustomBoldText({ texto, variavel }) {
        return (
            <Text style={{ fontSize: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>{texto}</Text>: {' '}
                <Text>{variavel}</Text>
            </Text>
        );
    }
}
