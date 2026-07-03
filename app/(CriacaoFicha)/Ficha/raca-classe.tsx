import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PageHeader from "@/components/common/PageHeader";
import RaceClassTab from "@/components/ficha/RaceClassTab";
import { useFicha } from "@/context/FichaContext";

export default function RacaClasseScreen() {
    const contexto = useFicha();

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <PageHeader title="Defina sua classe e raça" subtitle="Perícias, classe e raça são definidas aqui." />
                <RaceClassTab
                    selectedRaceIds={contexto.selectedRaceIds}
                    setSelectedRaceIds={contexto.setSelectedRaceIds}
                    selectedClassIds={contexto.selectedClassIds}
                    setSelectedClassIds={contexto.setSelectedClassIds}
                    selectedOrigins={contexto.selectedOrigins}
                    setSelectedOrigins={contexto.setSelectedOrigins}
                    selectedKits={contexto.selectedKits}
                    setSelectedKits={contexto.setSelectedKits}
                    selectedSpells={contexto.selectedSpells}
                    setSelectedSpells={contexto.setSelectedSpells}
                    selectedLanguages={contexto.selectedLanguages}
                    setSelectedLanguages={contexto.setSelectedLanguages}
                    selectedSavingThrows={contexto.selectedSavingThrows}
                    setSelectedSavingThrows={contexto.setSelectedSavingThrows}
                    selectedClassProficiencies={contexto.selectedClassProficiencies}
                    setSelectedClassProficiencies={contexto.setSelectedClassProficiencies}
                    level={contexto.level}
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
        padding: 24,
        gap: 24,
    }
});
