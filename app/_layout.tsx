import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import './global.css';


export default function RootLayout() {
  return (
    <Stack>
      <StatusBar style="auto" />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(search)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack >
  );
}
