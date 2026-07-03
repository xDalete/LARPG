import { useThemeColors } from "@/hooks/use-theme-colors";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
                    textTransform: "uppercase",
                    fontSize: 10,
                    fontWeight: "bold"
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
                    title: "GRUPO",
                    tabBarIcon: ({ color, size }) => <Ionicons name="people" size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="Diário"
                options={{
                    title: "DIÁRIO",
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="scroll" size={size - 2} color={color} />
                }}
            />
            <Tabs.Screen
                name="Dados"
                options={{
                    title: "DADO",
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="dice-d20" size={size + 2} color={color} />
                }}
            />
            <Tabs.Screen
                name="Configurações"
                options={{
                    title: "CONFIG",
                    tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />
                }}
            />
        </Tabs>
    );
}
