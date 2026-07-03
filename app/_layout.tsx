import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useFonts, Cinzel_400Regular } from "@expo-google-fonts/cinzel";
import { IBMPlexSans_400Regular } from "@expo-google-fonts/ibm-plex-sans";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "react-native";
import { Themes } from "@/constants/theme";

const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: Themes.dark.background,
        card: Themes.dark.backgroundLighter,
        text: Themes.dark.text,
        border: Themes.dark.border,
        primary: Themes.dark.primary
    }
};

const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Themes.light.background,
        card: Themes.light.backgroundLighter,
        text: Themes.light.text,
        border: Themes.light.border,
        primary: Themes.light.primary
    }
};

export default function RootLayout() {
    const colorScheme = useColorScheme();

    const [fontsLoaded] = useFonts({
        Cinzel_400Regular,
        IBMPlexSans_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <ThemeProvider value={colorScheme === "dark" ? CustomDarkTheme : CustomDefaultTheme}>
            <Stack
                screenOptions={{
                    headerShown: false,
                    animation: "simple_push"
                }}
            >
                <Stack.Screen name="(Auth)/Login" options={{ headerShown: false }} />
                <Stack.Screen name="(Auth)/SignUp" options={{ headerShown: false }} />
                <Stack.Screen name="(Campanha)" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}
