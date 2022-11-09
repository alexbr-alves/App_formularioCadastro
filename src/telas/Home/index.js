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
           {
            route.params.tipo == "PF"?
            <>
            <Text style={styles.tituloCategoria}>Dados Pessoais</Text>
            <Text style={styles.itens}>Nome: {route.params.nome}</Text>
            <Text  style={styles.itens}>Sobrenome: {route.params.sobrenome}</Text>
            <Text  style={styles.itens}>Telefone: {route.params.telefone}</Text>
            <Text  style={styles.itens}>Data de Aniversario: {route.params.data_de_aniversario}</Text>
            <Text  style={styles.itens}>CPF: {route.params.cpf}</Text>

            <Text style={styles.tituloCategoria}>Endereço residencial</Text>

            <Text  style={styles.itens} >CEP: {route.params.cep}</Text>
            <Text  style={styles.itens}>Cidade: {route.params.cidade}</Text>
            <Text  style={styles.itens}>Estado: {route.params.estado}</Text>
            <Text  style={styles.itens}>Rua: {route.params.rua}</Text>
            <Text  style={styles.itens}>Nº: {route.params.numero}</Text>
            <Text  style={styles.itens}>Complemento: {route.params.complemento}</Text>
            </>
            :
            <>
            <Text style={styles.tituloCategoria}>Dados Pessoais</Text>
            <Text style={styles.itens}>Nome empresarial: {route.params.nomeEmpresarial}</Text>
            <Text style={styles.itens}>Nome fantasia: {route.params.nomeFantasia}</Text>
            <Text style={styles.itens}>Telefone: {route.params.telefone}</Text>
            <Text style={styles.itens}>Data de abertura: {route.params.dataAbertura}</Text>
            <Text style={styles.itens}>CNPJ: {route.params.cnpj}</Text>

            <Text style={styles.tituloCategoria}>Endereço residencial</Text>

            <Text  style={styles.itens} >CEP: {route.params.cep}</Text>
            <Text  style={styles.itens}>Cidade: {route.params.cidade}</Text>
            <Text  style={styles.itens}>Estado: {route.params.estado}</Text>
            <Text  style={styles.itens}>Rua: {route.params.rua}</Text>
            <Text  style={styles.itens}>Nº: {route.params.numero}</Text>
            <Text  style={styles.itens}>Complemento: {route.params.complemento}</Text>
            </>
           }
        </View>
    )
}