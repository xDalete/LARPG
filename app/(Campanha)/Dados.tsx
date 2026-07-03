import Dado from "@/components/campanha/Dado";
import PageHeader from "@/components/common/PageHeader";
import Row from "@/components/common/Row";
import ThemedView from "@/components/common/ThemedView";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RolarDados() {
    return (
        <ThemedView style={styles.container}>
            <PageHeader title="Dados" centered />
            <View style={styles.dadosContainer}>
                <Row
                    items={[
                        <Dado
                            key="D4"
                            dado="D4"
                            icon={<MaterialCommunityIcons name="dice-d4-outline" size={32} color="#94A3B8" />}
                        />,
                        <Dado
                            key="D6"
                            dado="D6"
                            icon={<MaterialCommunityIcons name="dice-d6-outline" size={32} color="#94A3B8" />}
                        />,
                        <Dado
                            key="D8"
                            dado="D8"
                            icon={<MaterialCommunityIcons name="dice-d8-outline" size={32} color="#94A3B8" />}
                        />
                    ]}
                    gap={12}
                />
                <Row
                    items={[
                        <Dado
                            key="D12"
                            dado="D12"
                            icon={<MaterialCommunityIcons name="dice-d12-outline" size={32} color="#94A3B8" />}
                        />,
                        <Dado
                            key="D20"
                            dado="D20"
                            icon={<MaterialCommunityIcons name="dice-d20-outline" size={32} color="#94A3B8" />}
                        />,
                        <Dado
                            key="D100"
                            dado="D100"
                            icon={
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <MaterialCommunityIcons name="cards-diamond-outline" size={32} color="#94A3B8" />
                                    <Text style={{ position: "absolute", fontSize: 8, fontWeight: "bold", color: "#94A3B8", textAlign: "center" }}>100</Text>
                                </View>
                            }
                        />
                    ]}
                    gap={12}
                />
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        gap: 12
    },
    header: {
        alignItems: "center"
    },
    icon: {
        width: 32,
        height: 32
    },
    dadosContainer: {
        marginTop: 16,
        gap: 16
    }
});
