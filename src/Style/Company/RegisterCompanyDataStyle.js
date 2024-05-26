import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        paddingTop: 50
    },
    iconeBack: {
        marginTop: 50,
        marginLeft: 20
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
    anexarDocumento: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    anexarDocumento__titulo: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '500',
    },
    anexarDocumento__botao: {
        marginRight: 20,
        backgroundColor: '#b25cff',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 3,
    }

})