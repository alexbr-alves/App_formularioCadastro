import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import arrowDown from "../../../assets/imagens/arrow_down.png";
import arrowRight from "../../../assets/imagens/arrow_right.png";
import CustomButton from "../../Component/customButton";
import CustomToolbar from "../../Component/customToolbar";
import styles from "../../Style/Employee/ListEmployeeStyle";
import ListEmployeeViewModel from "../../ViewModel/Employee/ListEmployeeViewModel";
import { routeName } from "../../routes/route_name";

export default function ListEmployeeView() {
    const navigation = useNavigation();
    const route = useRoute();

    const {
        funcionarios,
        Dialog
    } = ListEmployeeViewModel(route.params.email)

    const handleLongPress = (employeeId) => {
        Dialog(employeeId)
    };

    return (
        <View style={styles.container}>
            <CustomToolbar titulo={"Employee List"} />
            <CustomButton
                styleButton={styles.botao}
                styleText={styles.botao__text}
                onPress={() => navigation.navigate(routeName.employee_register, { email: route.params.email })}
                text={"New"}
            />

            <FlatList
                style={styles.flatlist}
                data={funcionarios}
                keyExtractor={(item) => parseInt(item.EmployeeId)}
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
                    key={parseInt(item.EmployeeId)}
                    onLongPress={() => onLongPress(item.EmployeeId)}
                    onPress={() => handlePress(item.EmployeeId)}
                >
                    <Image style={styles.container_flatlist_icon} source={expandedItemId === item.EmployeeId ? arrowDown : arrowRight} />
                    <Text style={styles.container_flatlist_name}>{item.FirstName}</Text>
                </TouchableOpacity>
                {expandedItemId === item.EmployeeId && (
                    <ExpandedComponent item={item} />
                )}
            </>
        );
    }

    function ExpandedComponent({ item }) {
        return (
            <View style={styles.expandedContainer}>
                <CustomBoldText texto={"Last name"} variavel={item.LastName} />
                <CustomBoldText texto={"Title"} variavel={item.Title} />
                <CustomBoldText texto={"Birth date"} variavel={item.BirthDate} />
                <CustomBoldText texto={"Hire date"} variavel={item.HireDate} />
                <CustomBoldText texto={"Address"} variavel={item.Address} />
                <CustomBoldText texto={"City"} variavel={item.City} />
                <CustomBoldText texto={"Region"} variavel={item.Region} />
                <CustomBoldText texto={"Postal code"} variavel={item.PostalCode} />
                <CustomBoldText texto={"Country"} variavel={item.Country} />
                <CustomBoldText texto={"Home phone"} variavel={item.HomePhone} />
                <CustomBoldText texto={"Extension"} variavel={item.Extension} />
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
