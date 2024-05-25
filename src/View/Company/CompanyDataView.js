import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import CustomToolbar from "../../Component/customToolbar";
import styles from "../../Style/Company/CompanyDataStyle";
import CompanyDataViewModel from "../../ViewModel/Company/CompanyDataViewModel";


export default function CompanyDataView() {
    const route = useRoute();
    const { fetchData, company } = CompanyDataViewModel();

    fetchData(route.params.email)

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
