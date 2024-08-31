import { ScrollView, View } from "react-native";
import ItemProduto from "../ItemProduto";
import Styles from "@/app/Styles/Default";
import Produto from "@/app/Models/Produto"
import React from "react";

interface PropListaProd {
    produtos: Produto[];
}

const ListaProdutos:React.FC <PropListaProd> = ({produtos}) => {
    return (
        <ScrollView>
            <View style={Styles.container}>
            {produtos.map((p) => 
                <ItemProduto produto={p} key={p.id}>

                </ItemProduto>
            )}
        </View>
        </ScrollView>        
    )
}

export default ListaProdutos