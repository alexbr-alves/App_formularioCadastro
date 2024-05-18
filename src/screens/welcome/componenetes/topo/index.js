import React from "react";
import { View, Text, Image } from "react-native";
import styles from './styles';

import imagemTopo from '../../../../../assets/imagens/imagemTopo.png';

export default function Topo(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Welcome</Text>
            <Image style={styles.imagem_topo} source={imagemTopo} />
        </View>
    )
}