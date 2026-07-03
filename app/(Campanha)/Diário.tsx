import PageHeader from "@/components/common/PageHeader";
import ThemedButton from "@/components/common/ThemedButton";
import ThemedView from "@/components/common/ThemedView";
import { StyleSheet } from "react-native";

export default function RolarDados() {
    return (
        <ThemedView style={styles.container}>
            <PageHeader title="Diário" subtitle="" />
            <ThemedButton
                       title="+"
                       onPress={() => {
                           console.log("Abrir criar usuário");
                       }}
                       backgroundColor="#f1c40f"
                       textColor="#000000"
                       borderRadius={32}
                       style={styles.add}
                       textStyle={styles.addText}
                   />
        </ThemedView>
    );
}

const styles =  StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 24,
        gap: 24
    },
    characters: {
        gap: 20,
        paddingBottom: 96
    },
    add: {
        position: "absolute",
        right: 24,
        bottom: 24,
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0,
        shadowColor: "#f1c40f",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 15,
        elevation: 24
    },
    addText: {
        fontSize: 25,
        fontWeight: "900"
    }
});
