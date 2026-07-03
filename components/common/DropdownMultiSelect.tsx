import React, { useState } from "react";
import { View, StyleSheet, Pressable, Modal, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ThemedText from "./ThemedText";
import { useThemeColors } from "@/hooks/use-theme-colors";
import { globalStyles } from "@/constants/globalStyles";

export type DropdownOption = string | { id: string; nome: string };

type DropdownMultiSelectProps = {
    label: string;
    options: DropdownOption[];
    selected: string[];
    onChange: (selected: string[]) => void;
    placeholder?: string;
    maxSelections?: number;
};

export default function DropdownMultiSelect({
    label,
    options,
    selected = [],
    onChange,
    placeholder = "Selecione...",
    maxSelections
}: DropdownMultiSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const colors = useThemeColors();

    const normalizeOption = (option: DropdownOption) => {
        if (typeof option === "string") {
            return { id: option, nome: option };
        }
        return option;
    };

    const toggleOption = (id: string) => {
        if (selected.includes(id)) {
            onChange(selected.filter((item) => item !== id));
        } else {
            if (maxSelections === 1) {
                onChange([id]);
            } else if (!maxSelections || selected.length < maxSelections) {
                onChange([...selected, id]);
            }
        }
    };

    const selectedLabels = selected
        .map((id) => {
            const found = options.find((opt) => {
                const normalized = normalizeOption(opt);
                return normalized.id === id;
            });
            return found ? normalizeOption(found).nome : id;
        })
        .join(", ");

    return (
        <View style={styles.container}>
            <ThemedText style={[styles.label, { color: colors.textMuted }]}>{label}</ThemedText>
            <Pressable
                style={[
                    styles.selectBox,
                    {
                        backgroundColor: colors.backgroundLighter,
                        borderColor: colors.border
                    }
                ]}
                onPress={() => setIsOpen(true)}
            >
                <ThemedText style={[styles.valueText, !selectedLabels && { color: colors.textMuted }]} numberOfLines={1}>
                    {selectedLabels || placeholder}
                </ThemedText>
                <Ionicons name="chevron-down" size={18} color={colors.textMuted} />
            </Pressable>

            <Modal visible={isOpen} transparent animationType="fade" onRequestClose={() => setIsOpen(false)}>
                <Pressable style={globalStyles.overlay} onPress={() => setIsOpen(false)}>
                    <Pressable style={[globalStyles.modalContent, { backgroundColor: colors.backgroundLighter, borderColor: colors.border }]}>
                        <View style={globalStyles.modalHeader}>
                            <ThemedText style={globalStyles.modalTitle}>{label}</ThemedText>
                            <TouchableOpacity onPress={() => setIsOpen(false)}>
                                <Ionicons name="close" size={24} color={colors.text} />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={options}
                            keyExtractor={(item, index) => {
                                const normalized = normalizeOption(item);
                                return normalized.id || index.toString();
                            }}
                            renderItem={({ item }) => {
                                const normalized = normalizeOption(item);
                                const isChecked = selected.includes(normalized.id);
                                const iconName = maxSelections === 1
                                    ? (isChecked ? "radio-button-on" : "radio-button-off")
                                    : (isChecked ? "checkbox" : "square-outline");
                                return (
                                    <Pressable
                                        style={[styles.optionItem, isChecked && { backgroundColor: "rgba(241, 196, 15, 0.1)" }]}
                                        onPress={() => toggleOption(normalized.id)}
                                    >
                                        <ThemedText style={styles.optionText}>{normalized.nome}</ThemedText>
                                        <Ionicons
                                            name={iconName}
                                            size={20}
                                            color={isChecked ? "#f1c40f" : colors.textMuted}
                                        />
                                    </Pressable>
                                );
                            }}
                        />
                        <TouchableOpacity style={[globalStyles.confirmButton, { backgroundColor: "#f1c40f" }]} onPress={() => setIsOpen(false)}>
                            <ThemedText style={globalStyles.confirmText}>Confirmar</ThemedText>
                        </TouchableOpacity>
                    </Pressable>
                </Pressable>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 12
    },
    label: {
        fontSize: 14,
        marginBottom: 4
    },
    selectBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 12,
        minHeight: 48
    },
    valueText: {
        fontSize: 14,
        flex: 1,
        marginRight: 8
    },
    optionItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 6,
        marginVertical: 2
    },
    optionText: {
        fontSize: 15
    }
});
