import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 3,
        marginTop: 50,
    },
    botao: {
        height: 50,
        width: 100,
        backgroundColor: '#923CFF',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 20,
        marginEnd: 32
    },
    botao__text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700'
    },
    flatlist: {
        marginTop: 20,
        marginHorizontal: 32
    },
    container_flatlist: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 5
    },
    container_flatlist_name: {
        fontSize: 30,
        marginLeft: 5
    },
    container_flatlist_title: {
        fontSize: 15,
        marginLeft: 'auto'
    },
    container_flatlist_icon: {
        height: 30,
        width: 30
    },
    expandedContainer: {
        marginLeft: 30
    },
    expandedContainer_text: {
        paddingHorizontal: 5,
        fontSize: 20
    }
})