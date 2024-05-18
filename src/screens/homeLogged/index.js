import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity} from "react-native";
import styles from './styles'

export default function Home(){
    const route = useRoute();
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.botaoSair} onPress={() => navigation.navigate("Welcome")}>
                <Text style={styles.botaoSair__text}>Sair</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("MyData")}>
                <Text style={styles.botao__text}>My data</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botao__text}>Employee</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botao__text}>Supplier</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botao__text}>Product</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.tituloCategoria}>Company Data</Text>
                <Text style={styles.itens}>Company Name: {route.params.CompanyName}</Text>
                <Text style={styles.itens}>Contact Name: {route.params.ContactName}</Text>
                <Text style={styles.itens}>Contact Title: {route.params.ContactTitle}</Text>
                <Text style={styles.itens}>Phone Number: {route.params.phoneNumber}</Text>

                <Text style={styles.tituloCategoria}>Company Address</Text>

                <Text style={styles.itens}>Postal Code: {route.params.PostalCode}</Text>
                <Text style={styles.itens}>City: {route.params.City}</Text>
                <Text style={styles.itens}>Region: {route.params.Region}</Text>
                <Text style={styles.itens}>Address: {route.params.Address}</Text>
                <Text style={styles.itens}>Nº: {route.params.Number}</Text>
            </View>
        </View>
    )
}
