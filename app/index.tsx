import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={estilo.container}
    >
      <Text style={estilo.text} >Hello World!</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  text: {
    color: "red"
  }
});