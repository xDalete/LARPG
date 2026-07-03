import React from "react";
import { ScrollView, StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import PageHeader from "@/components/common/PageHeader";
import InfoTab from "@/components/ficha/InfoTab";
import { useFicha } from "@/context/FichaContext";

export default function InfoScreen() {
    const contexto = useFicha();

    return (
        <KeyboardAvoidingView 
            style={styles.keyboardAvoid} 
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 80}
        >
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <PageHeader title="Crie sua própria ficha" subtitle="Defina seus atributos, classe e raça." />
                    <InfoTab
                        avatar={contexto.avatar}
                        onEditAvatar={contexto.selecionarImagem}
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
        paddingBottom: 120
    },
    container: {
        padding: 24
    }
});
