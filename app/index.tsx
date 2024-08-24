import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Components/Adaptadores/ListaProdutos";

const produtos = [
  { id: 1, nome: "Holow Knight", preco: 30.00 },
  { id: 2, nome: "Final Fantasy XVI", preco: 250.00 },
  { id: 3, nome: "Kingdom Hearts II", preco: 150.60 },
  { id: 4, nome: "Half-Life: Alyx", preco: 50.00 }
];

export default function Index() {

  let [contador, setContador] = useState(0);

  return (
    <View
      style={estilo.container}
    >
      <ListaProdutos produtos={produtos}>

      </ListaProdutos>
      <Button title={`Clicado ${contador}`} onPress={clicarBotao}>
      </Button>
    </View>
  );

  function clicarBotao() {
    setContador(contador + 1);
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    paddingStart: 40
  },
  text: {
    color: "black",
    fontSize: 20
  },
  titulo: {
    color: "black",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold",
  }
});