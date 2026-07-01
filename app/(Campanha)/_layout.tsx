import { useThemeColors } from "@/hooks/use-theme-colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
    const colorScheme = useThemeColors();
    const insets = useSafeAreaInsets();
    return (
        <Tabs
            screenOptions={{
                animation: "shift",
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colorScheme.background,
                    borderTopWidth: 1,
                    borderBlockColor: colorScheme.border,
                    height: 80,
                    paddingTop: 12
                },
                tabBarLabelStyle: {
                    textTransform: "capitalize" // Capitalizes the first letter of each word
                },
                sceneStyle: {
                    backgroundColor: colorScheme.background,
                    paddingTop: insets.top
                },
                tabBarActiveTintColor: colorScheme.primary,
                tabBarInactiveTintColor: colorScheme.textMuted
            }}
        >
            <Tabs.Screen
                name="Grupo"
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="game-controller" size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="Diário"
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="game-controller" size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="Dados"
                options={{ tabBarIcon: ({ color, size }) => <Ionicons name="dice" size={size} color={color} /> }}
            />
            <Tabs.Screen
                name="Configurações"
                options={{ tabBarIcon: ({ color, size }) => <Ionicons name="dice" size={size} color={color} /> }}
            />
        </Tabs>
    );
}
