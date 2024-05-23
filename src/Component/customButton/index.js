import { Text, TouchableOpacity } from "react-native";

export default function CustomButton({ styleButton, styleText, text, onPress }) {
    return (
        <TouchableOpacity style={styleButton} onPress={onPress}>
            <Text style={styleText}>{text}</Text>
        </TouchableOpacity>
    )
}