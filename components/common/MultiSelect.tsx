import React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";

export type OptionBase = { id: string; nome: string };

type MultiSelectProps<T extends OptionBase> = {
    options: T[];
    selectedIds: string[];
    onChange: (ids: string[]) => void;
    label?: string;
    placeholder?: string;
    getOptionLabel?: (option: T) => string;
};

function MultiSelect<T extends OptionBase>({
    options,
    selectedIds,
    onChange,
    label,
    placeholder,
    getOptionLabel
}: MultiSelectProps<T>) {
    function toggleOption(optionId: string) {
        if (selectedIds.includes(optionId)) {
            onChange(selectedIds.filter((id) => id !== optionId));
        } else {
            onChange([...selectedIds, optionId]);
        }
    }

    const labelFor = (opt: T) => (getOptionLabel ? getOptionLabel(opt) : opt.nome);

    const selectedNames = selectedIds
        .map((id) => options.find((option) => option.id === id))
        .filter(Boolean)
        .map((opt) => labelFor(opt as T))
        .join(", ");

    return (
        <View>
            {label ? <Text style={styles.label}>{label}</Text> : null}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsContainer}>
                {options.map((option) => {
                    const isActive = selectedIds.includes(option.id);
                    return (
                        <Pressable key={option.id} onPress={() => toggleOption(option.id)} style={[styles.chip, isActive && styles.chipActive]}>
                            <Text style={[styles.chipText, isActive && styles.chipTextActive]}>{labelFor(option)}</Text>
                        </Pressable>
                    );
                })}
            </ScrollView>

            {selectedIds.length === 0 ? (
                <Text style={styles.placeholder}>{placeholder || "Nenhuma seleção"}</Text>
            ) : (
                <Text style={styles.selected}>{selectedNames}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    label: { fontSize: 14, fontWeight: "600", marginBottom: 8 },
    chipsContainer: { paddingVertical: 6, gap: 8 },
    chip: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 16,
        backgroundColor: "#f0f0f0",
        marginRight: 8
    },
    chipActive: { backgroundColor: "#5b8cff" },
    chipText: { color: "#222" },
    chipTextActive: { color: "#fff" },
    placeholder: { color: "#888", marginVertical: 6 },
    selected: { color: "#333", marginVertical: 6 }
});

export default MultiSelect;
