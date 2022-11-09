import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 3,
        marginTop: 50,
    },
    botaoSair: {
        alignSelf: 'flex-end',
        marginRight: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#000000'
    },
    botaoSair__text:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: '600'
        
        
    },
    tituloCategoria:{
        marginTop: 20,
        backgroundColor: '#b25cff',
        fontSize: 16,
        paddingLeft: 30,
        paddingVertical: 5,
        fontWeight: 'bold'
    },
    itens:{
        marginVertical: 5,
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 20,
        
    }
})