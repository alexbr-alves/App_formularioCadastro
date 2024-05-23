import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import arrowBack from '../../../assets/imagens/arrowBack.png';

export default function CustomToolbar({ titulo }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigation.goBack}>
                <Image source={arrowBack} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.titulo}>{titulo}</Text>
            <View style={styles.equilibrio} />
        </View>
    )
}