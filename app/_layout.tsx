import { Stack } from "expo-router";
import CadastroProduto from "./Components/Adaptadores/CadastroProduto/CadastroProduto"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "gameles!!"}} />
      <Stack.Screen name="cadastro" />
    </Stack>
  );
}
