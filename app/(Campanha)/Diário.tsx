import PageHeader from "@/components/common/PageHeader";
import ThemedView from "@/components/common/ThemedView";
import { StyleSheet } from "react-native";

export default function RolarDados() {
    return (
        <ThemedView style={styles.container}>
            <PageHeader title="Diário" subtitle="" />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        gap: 24
    }
});
