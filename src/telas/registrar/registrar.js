import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from './styles';

export default function Registrar(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.aviso}>{`Olá, você deseja registrar uma ${"\n"} conta de pessoa fisica ou jurídica?`}</Text>
           
            <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate("FormularioPF")}}>
                <Text style={styles.card__text}>Pessoa Fisica</Text>
            </TouchableOpacity>
                <Text style={styles.nome__ou}>ou</Text>
            <TouchableOpacity style={styles.card}>
                <Text style={styles.card__text}>Pessoa jurídica</Text>
            </TouchableOpacity>
            
        </View>
    )
}