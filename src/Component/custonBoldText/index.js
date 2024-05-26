import { Text } from "react-native";

export default function CustomBoldText({ texto, variavel }) {
    return (
        <Text style={{ fontSize: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{texto}</Text>: {' '}
            <Text>{variavel}</Text>
        </Text>
    );
}