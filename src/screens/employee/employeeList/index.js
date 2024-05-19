import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";

import { getEmployees, createTableEmployees } from "../../../services/database_sqlite";
import EmployeeMock from "../../../mock/EmployeeMock";
import LimitText from "../../../utils/limitText";
import Toolbar from "../../componenetes/toolbar";
import arrowDown from "../../../../assets/imagens/arrow_down.png"
import arrowRight from "../../../../assets/imagens/arrow_right.png"
import {routeName} from "../../../routes/route_name"




export default function EmployeeList() {
    const [funcionarios, setFuncionarios] = useState([]);
    const navigation = useNavigation()
    const route = useRoute();

    useEffect(() => {
        createTableEmployees()
        EmployeeMock()

        getEmployees(route.params.email, (funcionarios) => {
            setFuncionarios(funcionarios);
        });
    }, []);
    return (
        <View style={styles.container}>
            <Toolbar titulo={"Employee List"}/>
            <TouchableOpacity style={styles.botao}  onPress={() => navigation.navigate(routeName.employee_register, {email: route.params.email})}>
                <Text style={styles.botao__text}>New</Text>
            </TouchableOpacity>

            <FlatList
            style={styles.flatlist}
            data={funcionarios}
            keyExtractor={(item) => item.EmployeeId.toString()}
            renderItem={({item}) =>(
                <FlatlistComponent item={item}/>
            )}
            />
        </View>
    )

    function FlatlistComponent({item}) {
        const [expandedItemId, setExpandedItemId] = useState(null);
    
        const handlePress = (itemId) => {
            setExpandedItemId(itemId === expandedItemId ? null : itemId);
        };
    
        return (
            <>
                <TouchableOpacity 
                    style={styles.container_flatlist} 
                    key={item.EmployeeId.toString()} 
                    onPress={() => handlePress(item.EmployeeId)}
                >
                    <Image style={styles.container_flatlist_icon} source={expandedItemId === item.EmployeeId? arrowDown : arrowRight}/>
                    <Text style={styles.container_flatlist_name}>{item.FirstName}</Text>
                    {expandedItemId === null && (
                    <Text style={styles.container_flatlist_title}>{LimitText(item.Title, 15)}</Text>
                )}
                    
                </TouchableOpacity>
                {expandedItemId === item.EmployeeId && (
                    <ExpandedComponent item={item}/>
                )}
            </>
        );
    }
    
    function ExpandedComponent({item}) {
        return (
            <View style={styles.expandedContainer}>
                <TextoNegrito texto={"Last name"} variavel={item.LastName}/>
                <TextoNegrito texto={"Title"} variavel={item.Title}/>
                <TextoNegrito texto={"Birth date"} variavel={item.BirthDate}/>
                <TextoNegrito texto={"Hire date"} variavel={item.HireDate}/>
                <TextoNegrito texto={"Address"} variavel={item.Address}/>
                <TextoNegrito texto={"City"} variavel={item.City}/>
                <TextoNegrito texto={"Region"} variavel={item.Region}/>
                <TextoNegrito texto={"Postal code"} variavel={item.PostalCode}/>
                <TextoNegrito texto={"Country"} variavel={item.Country}/>
                <TextoNegrito texto={"Home phone"} variavel={item.HomePhone}/>
                <TextoNegrito texto={"Extension"} variavel={item.Extension}/>
            </View>
        )
    }

    function TextoNegrito({ texto, variavel }) {
        return (
            <Text style={{ fontSize: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{texto}</Text>: {' '}
            <Text >{variavel}</Text>
            </Text>
        );
    }

}