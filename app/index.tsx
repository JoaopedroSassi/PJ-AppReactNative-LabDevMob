import { useState, useEffect } from "react";
import { View, Button } from "react-native";
import ListaProdutos from "./Components/Adaptadores/ListaProdutos";
import Style from "./Styles/Default";
import axios from 'axios';
import { useRouter, useFocusEffect } from "expo-router";

export default function Index() {
  const router = useRouter();

  useFocusEffect(() => {
    carregarProdutos();
  });

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
      <ListaProdutos produtos={produtos} aoAtualizar={carregarProdutos}>

      </ListaProdutos>
      <Button title={`Cadastrar`} onPress={telaCadastro}>
      </Button>
    </View>
  );

  function telaCadastro() {
    router.push('/Telas/cadastro');
  }
}