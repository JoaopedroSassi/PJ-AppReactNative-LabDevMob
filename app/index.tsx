import { useState, useEffect } from "react";
import { View, Button } from "react-native";
import ListaProdutos from "./Components/Adaptadores/ListaProdutos";
import Style from "./Styles/Default"
import axios from 'axios'
import CadastroProduto from "./Components/Adaptadores/CadastroProduto";

export default function Index() {

  let [contador, setContador] = useState(0);
  let [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  function carregarProdutos() {
    axios
      .get('https://api-docker-2t8m.onrender.com/api/produtos')
      .then((res) => {
        setProdutos(res.data);
      })
  }

  return (
    <View style={Style.container}>
      <ListaProdutos produtos={produtos}>

      </ListaProdutos>
      <Button title={`Clicado ${contador}`} onPress={clicarBotao}>
      </Button>
      <CadastroProduto />
    </View>
  );

  function clicarBotao() {
    setContador(contador + 1);
  }
}