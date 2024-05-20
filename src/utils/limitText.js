export default function LimitText(texto, limit) {
    if (texto.length <= limit) {
        return texto;
    } else {
        return texto.substring(0, limit) + "...";
    }
}