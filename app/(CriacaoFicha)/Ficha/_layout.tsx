import { useThemeColors } from "@/hooks/use-theme-colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, router } from "expo-router";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FichaProvider, useFicha } from "@/context/FichaContext";
import ThemedButton from "@/components/common/ThemedButton";

function FichaTabsContent() {
    const cores = useThemeColors();
    const { characterId, campanhaId, salvarFicha, deletarFicha } = useFicha();

    return (
        <View style={styles.outerContainer}>
            <View style={styles.headerBar}>
                <TouchableOpacity 
                    onPress={() => router.navigate(campanhaId ? `/(Campanha)/Grupo?campanhaId=${campanhaId}` : `/(Campanha)/Grupo`)} 
                    style={styles.backButton}
                >
                    <Ionicons name="chevron-back" size={24} color={cores.text} />
                </TouchableOpacity>
            </View>

            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: cores.background,
                        borderTopWidth: 1,
                        borderTopColor: cores.border,
                        height: 80,
                        paddingTop: 12
                    },
                    tabBarLabelStyle: {
                        fontSize: 10,
                        fontWeight: "bold",
                        marginTop: 4
                    },
                    sceneStyle: {
                        backgroundColor: cores.background
                    },
                    tabBarActiveTintColor: "#f1c40f",
                    tabBarInactiveTintColor: "#9ba1a6"
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "INFORMAÇÕES",
                        tabBarIcon: ({ color }) => <Ionicons name="people" size={20} color={color} />
                    }}
                />
                <Tabs.Screen
                    name="atributos"
                    options={{
                        title: "ATRIBUTOS",
                        tabBarIcon: ({ color }) => <Ionicons name="document-text" size={20} color={color} />
                    }}
                />
                <Tabs.Screen
                    name="raca-classe"
                    options={{
                        title: "RAÇA E CLASSE",
                        tabBarIcon: ({ color }) => <Ionicons name="book" size={20} color={color} />
                    }}
                />
            </Tabs>

            {characterId && (
                <ThemedButton
                    icon={<Ionicons name="trash" size={32} color="#fff" />}
                    onPress={deletarFicha}
                    backgroundColor="#e74c3c"
                    borderRadius={32}
                    style={styles.floatingDelete}
                />
            )}

            <ThemedButton
                icon={<MaterialCommunityIcons name="content-save" size={32} color="#000" />}
                onPress={salvarFicha}
                backgroundColor="#f1c40f"
                borderRadius={32}
                style={styles.floatingSave}
            />
        </View>
    );
}

export default function FichaLayout() {
    const cores = useThemeColors();
    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: cores.background }]}>
            <FichaProvider>
                <FichaTabsContent />
            </FichaProvider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    outerContainer: {
        flex: 1
    },
    headerBar: {
        height: 48,
        justifyContent: "center",
        paddingHorizontal: 16
    },
    backButton: {
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center"
    },
    floatingSave: {
        position: "absolute",
        right: 24,
        bottom: 92,
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#f1c40f",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.55,
        shadowRadius: 18,
        elevation: 20,
        zIndex: 20
    },
    floatingDelete: {
        position: "absolute",
        left: 24,
        bottom: 92,
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#e74c3c",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.55,
        shadowRadius: 18,
        elevation: 20,
        zIndex: 20
    }
});
