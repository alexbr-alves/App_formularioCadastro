import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Toolbar from "../component/customToolbar";
import { getUser } from "../repository/databaseRepository";
import styles from "./style";


export default function Home() {
    const [company, setCompany] = useState('');
    const route = useRoute();


    useEffect(() => {
        getUser(route.params.email, (user) => {
            setCompany(user);
        });
    }, [route.params.email]);

    return (
        <View style={styles.container}>
            <Toolbar titulo="Company informations" />
            <View>
                <Text style={styles.tituloCategoria}>Company Data</Text>
                <Text style={styles.itens}>Company Name: {company.CompanyName}</Text>
                <Text style={styles.itens}>Contact Name: {company.ContactName}</Text>
                <Text style={styles.itens}>Contact Title: {company.ContactTitle}</Text>
                <Text style={styles.itens}>Phone Number: {company.phoneNumber}</Text>

                <Text style={styles.tituloCategoria}>Company Address</Text>

                <Text style={styles.itens}>Postal Code: {company.PostalCode}</Text>
                <Text style={styles.itens}>City: {company.City}</Text>
                <Text style={styles.itens}>Region: {company.Region}</Text>
                <Text style={styles.itens}>Address: {company.Address}</Text>
                <Text style={styles.itens}>Nº: {company.Number}</Text>
            </View>
        </View>
    )
}
