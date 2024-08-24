import Styles from "@/app/Styles/Default";
import { Text, View } from "react-native";

function ItemProduto({produto}: {produto: {nome:string, preco:number}}) {
    return (
        <View style={Styles.card}>
            <Text style={Styles.cardText}>{produto.nome}</Text>
            <Text style={Styles.cardText}>{produto.preco.toFixed(2)}</Text>
        </View>
    )
}

export default ItemProduto;