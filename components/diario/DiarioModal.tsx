import React, { useState } from "react";
import { Modal, Pressable, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useThemeColors } from "@/hooks/use-theme-colors";
import ThemedText from "@/components/common/ThemedText";
import ThemedTextInput from "@/components/common/ThemedTextInput";

type DiarioModalProps = {
    visible: boolean;
    onClose: () => void;
    onSave: (dia: string, mes: string, titulo: string, descricao: string) => void;
};

export default function DiarioModal({ visible, onClose, onSave }: DiarioModalProps) {
    const colors = useThemeColors();
    const [dia, setDia] = useState("");
    const [mes, setMes] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleConfirm = () => {
        if (!dia.trim() || !mes.trim() || !titulo.trim() || !descricao.trim()) {
            Alert.alert("Campos Obrigatórios", "Por favor, preencha todos os campos do diário.");
            return;
        }
        onSave(dia, mes, titulo, descricao);
        setDia("");
        setMes("");
        setTitulo("");
        setDescricao("");
    };

    const handleCancel = () => {
        setDia("");
        setMes("");
        setTitulo("");
        setDescricao("");
        onClose();
    };

    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={handleCancel}>
            <Pressable style={styles.modalOverlay} onPress={handleCancel}>
                <Pressable style={[styles.modalContent, { backgroundColor: colors.backgroundLighter, borderColor: colors.border }]}>
                    <ThemedText style={styles.modalTitle}>NOVA ENTRADA NO DIÁRIO</ThemedText>
                    
                    <View style={styles.modalFormRow}>
                        <View style={{ flex: 1, marginRight: 8 }}>
                            <ThemedText style={styles.inputLabel}>Dia</ThemedText>
                            <ThemedTextInput
                                placeholder="Ex: 14"
                                value={dia}
                                onChangeText={setDia}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={{ flex: 2 }}>
                            <ThemedText style={styles.inputLabel}>Mês</ThemedText>
                            <ThemedTextInput
                                placeholder="Ex: MÊS DO SOL"
                                value={mes}
                                onChangeText={setMes}
                            />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <ThemedText style={styles.inputLabel}>Título</ThemedText>
                        <ThemedTextInput
                            placeholder="Ex: EMBOSCADA DOS GOBLINS"
                            value={titulo}
                            onChangeText={setTitulo}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <ThemedText style={styles.inputLabel}>Descrição</ThemedText>
                        <ThemedTextInput
                            placeholder="Relate os fatos importantes..."
                            value={descricao}
                            onChangeText={setDescricao}
                            multiline
                            numberOfLines={4}
                            style={{ height: 100, textAlignVertical: "top" }}
                        />
                    </View>

                    <View style={styles.modalActions}>
                        <TouchableOpacity style={[styles.actionBtn, styles.cancelBtn, { borderColor: colors.border }]} onPress={handleCancel}>
                            <ThemedText style={{ color: colors.textMuted }}>Cancelar</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.actionBtn, styles.confirmBtn, { backgroundColor: "#f1c40f" }]} onPress={handleConfirm}>
                            <ThemedText style={styles.confirmBtnText}>Confirmar</ThemedText>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        justifyContent: "center",
        alignItems: "center",
        padding: 24
    },
    modalContent: {
        width: "100%",
        borderRadius: 16,
        borderWidth: 1,
        padding: 24,
        gap: 16
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 1.2,
        color: "#f1c40f",
        textAlign: "center",
        marginBottom: 8
    },
    modalFormRow: {
        flexDirection: "row",
        width: "100%"
    },
    inputContainer: {
        width: "100%",
        gap: 4
    },
    inputLabel: {
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#9BA1A6",
        marginBottom: 4
    },
    modalActions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 12,
        marginTop: 12
    },
    actionBtn: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    cancelBtn: {
        borderWidth: 1
    },
    confirmBtn: {
        minWidth: 100
    },
    confirmBtnText: {
        color: "#000000",
        fontWeight: "bold"
    }
});
