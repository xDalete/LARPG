import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Pressable, FlatList, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "@/components/common/Avatar";
import FormInput from "@/components/formComponents/FormInput";
import ThemedText from "@/components/common/ThemedText";
import { useThemeColors } from "@/hooks/use-theme-colors";
import { ImageType } from "@/types/Types";

type InfoTabProps = {
    avatar: ImageType;
    onEditAvatar?: () => void;
};

const alignmentOptions = [
    "Leal Bom",
    "Neutro Bom",
    "Caótico Bom",
    "Leal Neutro",
    "Neutro",
    "Caótico Neutro",
    "Leal Maligno",
    "Neutro Maligno",
    "Caótico Maligno"
];

const InfoTab = ({ avatar, onEditAvatar }: InfoTabProps) => {
    const [alignment, setAlignment] = useState("Neutro");
    const [isAlignmentOpen, setIsAlignmentOpen] = useState(false);
    const colorScheme = useThemeColors();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onEditAvatar} style={styles.avatarWrap}>
                <Avatar avatar={avatar} size={120} />
                <ThemedText style={styles.edit}>Editar</ThemedText>
            </TouchableOpacity>

            <FormInput label="Nome do Jogador" placeholder="Digite o nome" style={styles.fullWidth} />

            <View style={styles.row}>                
                <FormInput label="Level" placeholder="0" containerStyle={styles.small} />
                <View style={styles.flex}>
                    <View style={styles.selectContainer}>
                        <ThemedText style={[styles.label, { color: colorScheme.textMuted }]}>Alinhamento</ThemedText>
                        <Pressable
                            style={[
                                styles.selectBox,
                                {
                                    backgroundColor: colorScheme.backgroundLighter,
                                    borderColor: colorScheme.border
                                }
                            ]}
                            onPress={() => setIsAlignmentOpen((prev) => !prev)}
                        >
                            <ThemedText style={styles.selectValue}>{alignment}</ThemedText>
                            <Ionicons name={isAlignmentOpen ? "chevron-up" : "chevron-down"} size={18} color="#9BA1A6" />
                        </Pressable>
                    </View>
                </View>
            </View>

            <FormInput label="História" placeholder="Conte a história" multiline numberOfLines={4} style={styles.storyInput} />

            <View style={styles.rowMoney}>
                <FormInput label="Ouro" placeholder="0" containerStyle={[styles.money, styles.moneyMargin]} />
                <FormInput label="Prata" placeholder="0" containerStyle={[styles.money, styles.moneyMargin]} />
                <FormInput label="Bronze" placeholder="0" containerStyle={styles.money} />
            </View>

            <Modal visible={isAlignmentOpen} transparent animationType="none" onRequestClose={() => setIsAlignmentOpen(false)}>
                <Pressable style={styles.modalOverlay} onPress={() => setIsAlignmentOpen(false)}>
                    <View style={styles.dropdownModal}>
                        <FlatList
                            data={alignmentOptions}
                            keyExtractor={(item) => item}
                            scrollEnabled
                            style={[styles.dropdownList, { backgroundColor: colorScheme.backgroundLighter, borderColor: colorScheme.border }]}
                            renderItem={({ item: option }) => (
                                <Pressable
                                    style={({ pressed }) => [styles.dropdownItem, pressed && styles.dropdownItemActive]}
                                    onPress={() => {
                                        setAlignment(option);
                                        setIsAlignmentOpen(false);
                                    }}
                                >
                                    <ThemedText style={styles.dropdownItemText}>{option}</ThemedText>
                                </Pressable>
                            )}
                        />
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    avatarWrap: {
        alignItems: "center",
        marginTop: 18,
        marginBottom: 16
    },
    edit: {
        marginTop: 4,
        color: "#f1c40f"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 12,
        marginBottom: 20
    },
    small: {
        width: 80
    },
    flex: {
        flex: 1,
        position: "relative"
    },
    selectContainer: {
        width: "100%"
    },
    selectBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 10,
        minHeight: 44
    },
    selectValue: {
        fontSize: 14
    },
    dropdown: {
        borderWidth: 1,
        borderRadius: 8,
        height: 150,
        borderTopWidth: 1
    },
    dropdownWrapper: {
        position: "absolute",
        top: 84,
        left: 0,
        right: 0,
        zIndex: 9999,
        borderRadius: 8,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 12,
        overflow: "hidden"
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)"
    },
    dropdownModal: {
        width: "80%",
        maxHeight: 300,
        borderRadius: 8,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 12,
        overflow: "hidden"
    },
    dropdownList: {
        borderWidth: 1,
        borderRadius: 8
    },
    dropdownItem: {
        paddingVertical: 14,
        paddingHorizontal: 14,
        height: 48,
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(155,161,166,0.2)"
    },
    dropdownItemActive: {
        backgroundColor: "rgba(91,140,255,0.15)"
    },
    dropdownItemText: {
        fontSize: 14
    },
    label: {
        fontSize: 14,
        marginBottom: 8
    },
    fullWidth: {
        width: "100%"
    },
    storyInput: {
        width: "100%",
        minHeight: 140,
        marginBottom: 20
    },
    rowMoney: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12
    },
    money: {
        flex: 1,
        minWidth: 0
    },
    moneyMargin: {
        marginRight: 12
    }
});

export default InfoTab;
