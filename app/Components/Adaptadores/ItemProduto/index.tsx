import Styles from "@/app/Styles/Default";
import { Image, Text, View } from "react-native";
import Produto from "@/app/Models/Produto"
import React from "react";

interface PropProd{
    produto: Produto;
}

const ItemProduto:React.FC<PropProd> = ({produto}) => {
    return (
        <View style={Styles.card}>
            <Text style={Styles.cardText}>{produto.nome}</Text>
            <Text style={Styles.cardText}>{produto.preco.toFixed(2)}</Text>
            <Image source={{uri:produto.foto}} style={Styles.image} />
        </View>
    )
}

export default ItemProduto;