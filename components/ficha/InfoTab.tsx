import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Avatar from "@/components/common/Avatar";
import FormInput from "@/components/formComponents/FormInput";
import ThemedText from "@/components/common/ThemedText";
import DropdownMultiSelect from "@/components/common/DropdownMultiSelect";
import { ImageType } from "@/types/Types";
import { globalStyles } from "@/constants/globalStyles";

type InfoTabProps = {
    avatar: ImageType;
    onEditAvatar?: () => void;
    nomeJogador: string;
    setNomeJogador: (nome: string) => void;
    level: string;
    setLevel: (level: string) => void;
    alinhamentos: string[];
    setAlinhamentos: (alinhamentos: string[]) => void;
    historia: string;
    setHistoria: (historia: string) => void;
    ouro: string;
    setOuro: (ouro: string) => void;
    prata: string;
    setPrata: (prata: string) => void;
    bronze: string;
    setBronze: (bronze: string) => void;
};

const alinhamentoOpcoes = [
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

const InfoTab = ({
    avatar,
    onEditAvatar,
    nomeJogador,
    setNomeJogador,
    level,
    setLevel,
    alinhamentos,
    setAlinhamentos,
    historia,
    setHistoria,
    ouro,
    setOuro,
    prata,
    setPrata,
    bronze,
    setBronze
}: InfoTabProps) => {
    return (
        <View style={globalStyles.container}>
            <TouchableOpacity onPress={onEditAvatar} style={styles.avatarContainer}>
                <Avatar avatar={avatar} size={120} />
                <ThemedText style={styles.editText}>Editar</ThemedText>
            </TouchableOpacity>

            <FormInput
                label="Nome do Jogador"
                placeholder="Digite o nome"
                value={nomeJogador}
                onChangeText={setNomeJogador}
                style={globalStyles.fullWidth}
            />

            <View style={styles.rowAlign}>                
                <FormInput
                    label="Level"
                    placeholder="1"
                    keyboardType="numeric"
                    value={level}
                    onChangeText={setLevel}
                    containerStyle={styles.levelInput}
                />
                <View style={styles.dropdownContainer}>
                    <DropdownMultiSelect
                        label="Alinhamento"
                        options={alinhamentoOpcoes}
                        selected={alinhamentos}
                        onChange={setAlinhamentos}
                        placeholder="Selecione..."
                    />
                </View>
            </View>

            <FormInput
                label="História"
                placeholder="Conte a história do seu personagem"
                multiline
                numberOfLines={4}
                value={historia}
                onChangeText={setHistoria}
                style={styles.storyInput}
            />

            <View style={globalStyles.row}>
                <FormInput
                    label="Ouro 🟡"
                    placeholder="0"
                    keyboardType="numeric"
                    value={ouro}
                    onChangeText={setOuro}
                    containerStyle={[styles.moneyInput, styles.marginRight]}
                />
                <FormInput
                    label="Prata ⚪"
                    placeholder="0"
                    keyboardType="numeric"
                    value={prata}
                    onChangeText={setPrata}
                    containerStyle={[styles.moneyInput, styles.marginRight]}
                />
                <FormInput
                    label="Bronze 🟤"
                    placeholder="0"
                    keyboardType="numeric"
                    value={bronze}
                    onChangeText={setBronze}
                    containerStyle={styles.moneyInput}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        alignItems: "center",
        marginTop: 18,
        marginBottom: 16
    },
    editText: {
        marginTop: 4,
        color: "#f1c40f",
        fontWeight: "bold"
    },
    rowAlign: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 12,
        marginBottom: 12
    },
    levelInput: {
        width: 80
    },
    dropdownContainer: {
        flex: 1
    },
    storyInput: {
        width: "100%",
        minHeight: 120,
        textAlignVertical: "top"
    },
    moneyInput: {
        flex: 1,
        minWidth: 0
    },
    marginRight: {
        marginRight: 12
    }
});

export default InfoTab;
