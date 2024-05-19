import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from './styles'

import { routeName } from "../../routes/route_name";
import image from "../../../assets/imagens/image_team.png"

export default function Home() {
    const route = useRoute();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.container_botao}>
                <Image style={styles.image} source={image}/>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(routeName.company_data, {
                    email: route.params.email
                })}>
                    <Text style={styles.botao__text}>My data</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(routeName.employee_list, {
                    email: route.params.email
                })}>
                    <Text style={styles.botao__text}>Employee</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(routeName.supplier_list, {
                    email: route.params.email
                })}>
                    <Text style={styles.botao__text}>Supplier</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(routeName.product_list, {
                    email: route.params.email
                })}>
                    <Text style={styles.botao__text}>Product</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoSair} onPress={() => navigation.navigate(routeName.wellcome)}>
                    <Text style={styles.botaoSair__text}>Sair</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
