import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    areaInput: {
        marginHorizontal: 20
    },
    input_email: {
        marginTop: 10,
        backgroundColor: '#fff',
    },
    input_senha: {
        marginTop: 10,
        backgroundColor: '#fff'
    },
    esqueceuSenha: {
        alignSelf: 'flex-end',
        marginTop: 10,
        marginRight: 10,
        marginBottom: 20
    },
    esqueceuSenha__text: {
        color: "#923CFF",
        fontStyle: 'italic',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500'
    },
    botao: {
        height: 50,
        width: 300,
        backgroundColor: '#923CFF',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    botao__text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700'
    },
    semConta: {
        alignSelf: 'center',
        marginVertical: 40,
        color: '#923CFF',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500'
    }
})