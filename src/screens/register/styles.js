import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center'
    },
    aviso: {
        marginVertical: 200,
        fontSize: 20,
        lineHeight: 30,
        fontWeight: '700', 
        textAlign: 'center'
    },
    card: {
        height: 40, 
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#923CFF',
        borderRadius: 10, 
    }, 
    card__text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 1.5
    },
    nome__ou: {
        marginVertical: 10,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '700'
    }
})