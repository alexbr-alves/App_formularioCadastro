import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 3,
    },
    inputs: {
        marginHorizontal: 32,
        marginTop: 20
    },
    buscaCEP: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    inputCep: {
        width: 200,
    },
    buscaCep__botao: {
        width: 80,
        backgroundColor: 'red',
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#b25cff'
    },
    buscaCep__text: {
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
    pickerInput: {
        borderWidth: 1,
        marginTop: 5,
        height: 50,
        width: 200,
        backgroundColor: "white",
        borderColor: "gray"
    },
    newCategory__botao: {
        width: 80,
        height: 50,
        backgroundColor: 'red',
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#b25cff',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    newCategory__text: {
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    category: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    pickerInput_supplier: {
        borderWidth: 1,
        marginTop: 5,
        height: 50,
        backgroundColor: "white",
        borderColor: "gray"
    }
});