import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "gameles!!"}} />
      <Stack.Screen name="cadastro" />
    </Stack>
  );
}
