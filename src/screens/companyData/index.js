import React, {useState, useEffect} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text} from "react-native";
import styles from "./style";
import { getUser } from "../../services/database/company";
import Toolbar from "../componenetes/toolbar";


export default function Home(){
    const [company, setCompany] = useState('');
    const route = useRoute();
    const navigation = useNavigation();
    

    useEffect(() => {
        // Chamada para getUser quando a tela é montada
        getUser(route.params.email, (user) => {
            setCompany(user);
        });
    }, [route.params.email]);
    
    return(
        <View style={styles.container}>
            <Toolbar titulo="Company informations"/>
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
