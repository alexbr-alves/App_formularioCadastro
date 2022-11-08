import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff'
    },
    titulo: {
        marginTop: 40,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#923CFF'
    },
    tituloCategoria: {
        marginTop: 20,
        backgroundColor: '#b25cff',
        fontSize: 16,
        paddingLeft: 30,
        paddingVertical: 5,
        fontWeight: 'bold'
    },
    espaco__input: {
        marginHorizontal: 20,
        marginTop: 10
    },
    buscaCPF: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputCPF: {
        width: 250
    },
    buscaCPF__botao: {
        width: 80,
        backgroundColor: 'red',
        paddingVertical: 10,
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: '#b25cff'
    },
    buscaCPF__text: {
        alignSelf: 'center'
    },
    botao: {
        marginTop: 20,
        marginBottom: 50,
        height: 40,
        width: 300,
        borderRadius: 6,
        backgroundColor: '#923CFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    botao__text: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1.5
    },

})