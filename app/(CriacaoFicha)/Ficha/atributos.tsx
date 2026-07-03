import React from "react";
import { ScrollView, StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import PageHeader from "@/components/common/PageHeader";
import AttributesTab from "@/components/ficha/AttributesTab";
import { useFicha } from "@/context/FichaContext";

export default function AtributosScreen() {
    const contexto = useFicha();

    return (
        <KeyboardAvoidingView 
            style={styles.keyboardAvoid} 
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 80}
        >
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <PageHeader title="Modifique seus atributos" subtitle="Ajuste de forma aleatória ou manual seus atributos." />
                    <AttributesTab
                        atributos={contexto.atributos}
                        setAtributos={contexto.setAtributos}
                        iniciativa={contexto.iniciativa}
                        setIniciativa={contexto.setIniciativa}
                        classeArmadura={contexto.classeArmadura}
                        setClasseArmadura={contexto.setClasseArmadura}
                        deslocamento={contexto.deslocamento}
                        setDeslocamento={contexto.setDeslocamento}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    keyboardAvoid: {
        flex: 1
    },
    scrollView: {
        flex: 1
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 120,
    },
    container: {
        padding: 24,
        gap: 24,
    }
});
