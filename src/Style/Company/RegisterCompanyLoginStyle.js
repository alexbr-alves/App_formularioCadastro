import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff'
    },
    iconeBack: {
        marginTop: 50,
        marginLeft: 20
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
        marginTop: 10,
    },
    input: {
        marginVertical: 5
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