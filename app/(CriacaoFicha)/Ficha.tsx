import PageHeader from "@/components/common/PageHeader";
import ThemedButton from "@/components/common/ThemedButton";
import ThemedView from "@/components/common/ThemedView";
import { StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import InfoTab from "@/components/ficha/InfoTab";
import AttributesTab from "@/components/ficha/AttributesTab";
import RaceClassTab from "@/components/ficha/RaceClassTab";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@/hooks/use-theme-colors";

export default function Ficha() {
    const [tab, setTab] = useState(0);
    const colors = useThemeColors();

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}> 
            <ThemedView style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <PageHeader title="Ficha" subtitle="Crie sua própria ficha" centered />
                    {tab === 0 && <InfoTab avatar={{ uri: "", averageColor: "#ccc" }} />}
                    {tab === 1 && <AttributesTab />}
                    {tab === 2 && <RaceClassTab />}
                </ScrollView>

                <ThemedButton
                    icon={<MaterialCommunityIcons name="content-save" size={32} color="#000" />}
                    onPress={() => {
                        // TODO: chamar API para salvar a ficha aqui
                        console.log("Salvar ficha (a implementar)");
                        // após salvar, navegar de volta para a lista de grupo
                        router.push('/(Campanha)/Grupo');
                    }}
                    backgroundColor="#f1c40f"
                    borderRadius={32}
                    style={styles.add}
                />

                <ThemedView style={styles.tabBar}>
                    <Ionicons name="people" size={20} color={tab === 0 ? "#f1c40f" : "#9ba1a6"} onPress={() => setTab(0)} />
                    <Ionicons name="barbell" size={20} color={tab === 1 ? "#f1c40f" : "#9ba1a6"} onPress={() => setTab(1)} />
                    <Ionicons name="book" size={20} color={tab === 2 ? "#f1c40f" : "#9ba1a6"} onPress={() => setTab(2)} />
                </ThemedView>
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 24
    },
    scrollView: {
        flex: 1
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 320,
        justifyContent: "flex-start"
    },
    editButton: {
        alignSelf: "center",
        paddingHorizontal: 24,
        paddingVertical: 12
    },
    saveButton: {
        fontSize: 18,
        fontWeight: "bold"
    },
    add: {
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
    tabBar: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 80,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 24,
        zIndex: 10,
        elevation: 10
    }
});

