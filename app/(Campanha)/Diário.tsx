import React, { useState, useCallback } from "react";
import { StyleSheet, View, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams, useFocusEffect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColors } from "@/hooks/use-theme-colors";
import ThemedText from "@/components/common/ThemedText";
import ThemedView from "@/components/common/ThemedView";
import PageHeader from "@/components/common/PageHeader";
import SearchInput from "@/components/common/SearchInput";
import DiarioTimeline from "@/components/diario/DiarioTimeline";
import DiarioModal from "@/components/diario/DiarioModal";
import { DiarioEntryType } from "@/types/Types";
import { getDiarioEntries, addDiarioEntry, deleteDiarioEntry } from "@/api/Diario.Api";

export default function Diário() {
    const colors = useThemeColors();
    const params = useLocalSearchParams();
    const campanhaId = (params.campanhaId as string) || "1";

    const [entries, setEntries] = useState<DiarioEntryType[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const loadEntries = useCallback(() => {
        setLoading(true);
        getDiarioEntries(campanhaId).then((response) => {
            if (response.success) {
                setEntries(response.data);
            }
            setLoading(false);
        }).catch((err) => {
            console.error("Erro ao ler entradas do diário:", err);
            setLoading(false);
        });
    }, [campanhaId]);

    useFocusEffect(
        useCallback(() => {
            loadEntries();
        }, [loadEntries])
    );

    const handleSave = (dia: string, mes: string, titulo: string, descricao: string) => {
        const novaEntrada: DiarioEntryType = {
            id: "", // Inserção automática de UUID
            campanhaId: campanhaId,
            dia: dia.trim().toUpperCase(),
            mes: mes.trim().toUpperCase(),
            titulo: titulo.trim().toUpperCase(),
            descricao: descricao.trim()
        };

        addDiarioEntry(novaEntrada).then((res) => {
            if (res.success) {
                setModalVisible(false);
                loadEntries();
            } else {
                Alert.alert("Erro", "Não foi possível salvar a nota no diário.");
            }
        });
    };

    const confirmDelete = (id: string) => {
        Alert.alert(
            "Remover Entrada",
            "Deseja realmente apagar esta memória do diário do mundo?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Remover",
                    style: "destructive",
                    onPress: () => {
                        deleteDiarioEntry(id).then((res) => {
                            if (res.success) {
                                loadEntries();
                            } else {
                                Alert.alert("Erro", "Não foi possível deletar a entrada.");
                            }
                        });
                    }
                }
            ]
        );
    };

    const entriesFiltradas = entries.filter((entry) => {
        const query = searchQuery.toLowerCase();
        return (
            entry.titulo.toLowerCase().includes(query) ||
            entry.descricao.toLowerCase().includes(query) ||
            entry.dia.toLowerCase().includes(query) ||
            entry.mes.toLowerCase().includes(query)
        );
    });

    return (
        <SafeAreaView style={styles.safeArea}>
            <ThemedView style={styles.container}>
                {/* Header do Diário */}
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => router.navigate("/Campanhas")} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <PageHeader title="DIÁRIO DO MUNDO" subtitle="" />
                </View>

                {/* Filtro de Pesquisa */}
                <SearchInput
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder="Procure locais, NPCs, memórias..."
                />

                {/* Lista do Diário ou Carregamento */}
                {loading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#f1c40f" />
                    </View>
                ) : entriesFiltradas.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Ionicons name="journal-outline" size={48} color={colors.textMuted} />
                        <ThemedText style={{ color: colors.textMuted, marginTop: 12, textAlign: "center" }}>
                            Nenhuma crônica encontrada. Escreva novos eventos do diário clicando no botão "+"!
                        </ThemedText>
                    </View>
                ) : (
                    <DiarioTimeline entries={entriesFiltradas} onDelete={confirmDelete} />
                )}

                {/* Botão FAB para abrir o Modal */}
                <TouchableOpacity 
                    style={[styles.fab, { backgroundColor: "#f1c40f" }]}
                    onPress={() => setModalVisible(true)}
                    activeOpacity={0.8}
                >
                    <Ionicons name="add" size={32} color="#000000" />
                </TouchableOpacity>

                {/* Modal de Criação de Nota */}
                <DiarioModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onSave={handleSave}
                />
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
        padding: 24,
        gap: 20
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12
    },
    backButton: {
        padding: 4
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32
    },
    fab: {
        position: "absolute",
        right: 24,
        bottom: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#f1c40f",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6
    }
});
