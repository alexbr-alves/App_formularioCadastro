import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import CustomToolbar from "../../Component/customToolbar";
import { getUser } from "../../Repository/databaseRepository";
import styles from "../../Style/Company/CompanyDataStyle";


export default function CompanyDataView() {
    const [company, setCompany] = useState('');
    const route = useRoute();


    useEffect(() => {
        getUser(route.params.email, (user) => {
            setCompany(user);
        });
    }, [route.params.email]);

    return (
        <View style={styles.container}>
            <CustomToolbar titulo="Company informations" />
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
