import React from "react";
import { View, StyleSheet } from "react-native";
import FormInput from "@/components/formComponents/FormInput";
import ThemedButton from "@/components/common/ThemedButton";
import ThemedText from "@/components/common/ThemedText";

const attributes = ["Força", "Destreza", "Constituição", "Inteligência", "Sabedoria", "Carisma"];

const AttributesTab = () => {
    return (
        <View style={styles.container}>
            {attributes.map((attr) => (
                <View key={attr} style={styles.row}>
                    <FormInput label={attr} placeholder="0" style={styles.input} />
                    <View style={styles.actions}>
                        <ThemedText style={styles.circle}>0</ThemedText>
                        <ThemedButton title="Rolar Dados" onPress={() => { }} />
                    </View>
                </View>
            ))}

            <FormInput label="Iniciativa" placeholder="" />
            <FormInput label="Classe de Armadura" placeholder="10+" />
            <FormInput label="Deslocamento" placeholder="" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: "100%", gap: 12 },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12
    },
    input: {
        flex: 1
    },
    actions: {
        width: 160,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    circle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "transparent"
    }
});

export default AttributesTab;
