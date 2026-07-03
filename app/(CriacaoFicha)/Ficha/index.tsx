import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PageHeader from "@/components/common/PageHeader";
import InfoTab from "@/components/ficha/InfoTab";
import { useFicha } from "@/context/FichaContext";

export default function InfoScreen() {
    const contexto = useFicha();

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <PageHeader title="Crie sua própria ficha" subtitle="Defina seus atributos, classe e raça." />
                <InfoTab
                    avatar={{ uri: "", averageColor: "#f1c40f" }}
                    nomeJogador={contexto.nomeJogador}
                    setNomeJogador={contexto.setNomeJogador}
                    level={contexto.level}
                    setLevel={contexto.setLevel}
                    alinhamentos={contexto.alinhamentos}
                    setAlinhamentos={contexto.setAlinhamentos}
                    historia={contexto.historia}
                    setHistoria={contexto.setHistoria}
                    ouro={contexto.ouro}
                    setOuro={contexto.setOuro}
                    prata={contexto.prata}
                    setPrata={contexto.setPrata}
                    bronze={contexto.bronze}
                    setBronze={contexto.setBronze}
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
