import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColors } from "@/hooks/use-theme-colors";

interface SearchInputProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

export default function SearchInput({ value, onChangeText, placeholder = "Procurar...", ...rest }: SearchInputProps) {
    const colors = useThemeColors();

    return (
        <View style={[styles.container, { backgroundColor: colors.backgroundLighter, borderColor: colors.border }]}>
            <Ionicons name="search" size={20} color={colors.textMuted} style={styles.icon} />
            <TextInput
                style={[styles.input, { color: colors.text }]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.textMuted}
                autoCapitalize="none"
                {...rest}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 24,
        borderWidth: 1,
        paddingHorizontal: 16,
        height: 48,
        width: "100%"
    },
    icon: {
        marginRight: 8
    },
    input: {
        flex: 1,
        fontSize: 15,
        height: "100%",
        paddingVertical: 0
    }
});
