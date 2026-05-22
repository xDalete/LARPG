import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { 
  useFonts, 
  Cinzel_400Regular, 
  Cinzel_700Bold
} from "@expo-google-fonts/cinzel";
import {
  IBMPlexSans_400Regular, 
  IBMPlexSans_700Bold
} from "@expo-google-fonts/ibm-plex-sans";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Cinzel_400Regular,
    Cinzel_700Bold,
    IBMPlexSans_400Regular, 
    IBMPlexSans_700Bold
  });

  if (!fontsLoaded) {
    return null; 
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "simple_push",
        }}
      >
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} />
        <Stack.Screen name="Campanhas" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
