import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PageHeader from "@/components/common/PageHeader";
import AttributesTab from "@/components/ficha/AttributesTab";
import { useFicha } from "@/context/FichaContext";

export default function AtributosScreen() {
    const contexto = useFicha();

    return (
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
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 120
    },
    container: {
        padding: 24
    }
});
