import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 3,
        marginTop: 50,
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    container_botao: {
        marginTop: 100
    },
    image: {
        height: 320,
        width: 300,
    },
    botaoSair: {
        height: 50,
        width: 200,
        backgroundColor: '#923CFF',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 20,
        marginBottom: 30,
        marginTop: 100
    },
    botaoSair__text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700'
    },
    tituloCategoria: {
        marginTop: 20,
        backgroundColor: '#923CFF',
        fontSize: 16,
        paddingLeft: 30,
        paddingVertical: 5,
        fontWeight: 'bold'
    },
    itens: {
        marginVertical: 5,
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 20,

    },
    botao: {
        height: 50,
        width: 300,
        backgroundColor: '#923CFF',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 20
    },
    botao__text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700'
    },
})