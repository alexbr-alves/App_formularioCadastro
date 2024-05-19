import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import styles from "./styles";

import { getSuppliers } from "../../../services/database/suppliers";
import SupplierMock from "../../../mock/SupplierMock";
import LimitText from "../../../utils/limitText";
import Toolbar from "../../componenetes/toolbar";
import arrowDown from "../../../../assets/imagens/arrow_down.png";
import arrowRight from "../../../../assets/imagens/arrow_right.png";
import { routeName } from "../../../routes/route_name";

export default function SupplierList() {
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
            <Toolbar titulo={"Supplier List"} />
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(routeName.supplier_register, { email: route.params.email })}>
                <Text style={styles.botao__text}>New</Text>
            </TouchableOpacity>

            <FlatList
                style={styles.flatlist}
                data={fornecedores}
                keyExtractor={(item) => item.SupplierID.toString()}
                renderItem={({ item }) => (
                    <FlatlistComponent item={item} />
                )}
                ListFooterComponent={<View style={{height: 100}}/>}
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
                <TextoNegrito texto={"Contact name"} variavel={item.ContactName} />
                <TextoNegrito texto={"Contact title"} variavel={item.ContactTitle} />
                <TextoNegrito texto={"Address"} variavel={item.Address} />
                <TextoNegrito texto={"City"} variavel={item.City} />
                <TextoNegrito texto={"Region"} variavel={item.Region} />
                <TextoNegrito texto={"Postal code"} variavel={item.PostalCode} />
                <TextoNegrito texto={"Country"} variavel={item.Country} />
                <TextoNegrito texto={"Phone"} variavel={item.Phone} />
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
