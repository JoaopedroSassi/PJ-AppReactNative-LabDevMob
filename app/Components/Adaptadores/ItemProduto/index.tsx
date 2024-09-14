import Styles from "@/app/Styles/Default";
import { Image, Text, View, Button, Alert } from "react-native";
import Produto from "@/app/Models/Produto"
import axios from "axios";
import React from "react";

interface PropProd{
    produto: Produto,
    aoExcluir?: Function;
}

const ItemProduto:React.FC<PropProd> = ({produto, aoExcluir}) => {
    function Excluir(id: number) {
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
        axios.delete(`${api}/${id}`) 
        .then((resp)=>{
            aoExcluir?.call(null);
            Alert.alert('Produto excluido com sucesso');
            alert('Produto excluido com sucesso');
        })
    }

    return (
        <View style={Styles.card}>
            <Text style={Styles.cardText}>{produto.nome}</Text>
            <Text style={Styles.cardText}>{produto.descricao}</Text>
            <Text style={Styles.cardText}>{produto.preco.toFixed(2)}</Text>
            <Image source={{uri:produto.foto}} style={Styles.image} />
            <Button title="Excluir" onPress={()=>{Excluir(produto.id)}}/>  
        </View>
    )
}

export default ItemProduto;