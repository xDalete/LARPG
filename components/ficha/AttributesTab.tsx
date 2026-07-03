import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import ThemedText from "@/components/common/ThemedText";
import { useThemeColors } from "@/hooks/use-theme-colors";
import { calcularModificador, formatarModificador } from "@/utils/dndRules";
import { globalStyles } from "@/constants/globalStyles";

type AttributesTabProps = {
    atributos: Record<string, string>;
    setAtributos: React.Dispatch<React.SetStateAction<Record<string, string>>>;
    iniciativa: string;
    setIniciativa: (val: string) => void;
    classeArmadura: string;
    setClasseArmadura: (val: string) => void;
    deslocamento: string;
    setDeslocamento: (val: string) => void;
};

const listaAtributos = ["Força", "Destreza", "Constituição", "Inteligência", "Sabedoria", "Carisma"];

const AttributesTab = ({
    atributos,
    setAtributos,
    iniciativa,
    setIniciativa,
    classeArmadura,
    setClasseArmadura,
    deslocamento,
    setDeslocamento
}: AttributesTabProps) => {
    const cores = useThemeColors();

    const atualizarAtributo = (nomeAtributo: string, novoValor: string) => {
        setAtributos((prev) => ({
            ...prev,
            [nomeAtributo]: novoValor.replace(/[^0-9]/g, "")
        }));
    };

    const rolarDadoD20 = (nomeAtributo: string) => {
        const resultadoRolagem = Math.floor(Math.random() * 20) + 1;
        atualizarAtributo(nomeAtributo, resultadoRolagem.toString());
    };

    return (
        <View style={globalStyles.container}>
            {listaAtributos.map((nomeAtributo) => {
                const valorAtual = atributos[nomeAtributo] || "10";
                const modificadorTexto = formatarModificador(calcularModificador(valorAtual));

                return (
                    <View key={nomeAtributo} style={globalStyles.row}>
                        <View style={styles.pillContainer}>
                            <View style={[styles.pill, { backgroundColor: cores.backgroundLighter, borderColor: cores.border }]}>
                                <ThemedText style={styles.pillLabel}>{nomeAtributo.toUpperCase()}</ThemedText>
                            </View>
                            <View style={[styles.badgeCircle, { backgroundColor: cores.background, borderColor: cores.border }]}>
                                <ThemedText style={styles.badgeText}>{modificadorTexto}</ThemedText>
                            </View>
                        </View>

                        <TextInput
                            style={[
                                styles.scoreInput,
                                {
                                    backgroundColor: cores.backgroundLighter,
                                    color: cores.text,
                                    borderColor: cores.border
                                }
                            ]}
                            placeholder="10"
                            keyboardType="numeric"
                            value={valorAtual}
                            onChangeText={(texto) => atualizarAtributo(nomeAtributo, texto)}
                        />

                        <TouchableOpacity
                            style={[styles.rollButton, { backgroundColor: cores.backgroundLighter, borderColor: cores.border }]}
                            onPress={() => rolarDadoD20(nomeAtributo)}
                        >
                            <ThemedText style={styles.rollButtonText}>ROLAR DADOS</ThemedText>
                        </TouchableOpacity>
                    </View>
                );
            })}

            <View style={globalStyles.separator} />

            {/* Campos Calculados */}
            <View style={globalStyles.row}>
                <View style={styles.pillContainerWide}>
                    <View style={[styles.pill, { backgroundColor: cores.backgroundLighter, borderColor: cores.border }]}>
                        <ThemedText style={styles.pillLabel}>INICIATIVA</ThemedText>
                    </View>
                </View>
                <TextInput
                    style={[
                        styles.scoreInput,
                        styles.flexInput,
                        {
                            backgroundColor: cores.backgroundLighter,
                            color: cores.text,
                            borderColor: cores.border
                        }
                    ]}
                    value={iniciativa}
                    onChangeText={setIniciativa}
                />
            </View>

            <View style={globalStyles.row}>
                <View style={styles.pillContainerWide}>
                    <View style={[styles.pill, { backgroundColor: cores.backgroundLighter, borderColor: cores.border }]}>
                        <ThemedText style={styles.pillLabel}>CLASSE DE ARMADURA</ThemedText>
                    </View>
                </View>
                <TextInput
                    style={[
                        styles.scoreInput,
                        styles.flexInput,
                        {
                            backgroundColor: cores.backgroundLighter,
                            color: cores.text,
                            borderColor: cores.border
                        }
                    ]}
                    value={classeArmadura}
                    onChangeText={setClasseArmadura}
                />
            </View>

            <View style={globalStyles.row}>
                <View style={styles.pillContainerWide}>
                    <View style={[styles.pill, { backgroundColor: cores.backgroundLighter, borderColor: cores.border }]}>
                        <ThemedText style={styles.pillLabel}>DESLOCAMENTO</ThemedText>
                    </View>
                </View>
                <TextInput
                    style={[
                        styles.scoreInput,
                        styles.flexInput,
                        {
                            backgroundColor: cores.backgroundLighter,
                            color: cores.text,
                            borderColor: cores.border
                        }
                    ]}
                    value={deslocamento}
                    onChangeText={setDeslocamento}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pillContainer: {
        width: 150,
        position: "relative",
        height: 44
    },
    pillContainerWide: {
        width: 190,
        position: "relative",
        height: 44
    },
    pill: {
        width: "100%",
        height: "100%",
        borderRadius: 22,
        borderWidth: 1,
        justifyContent: "center",
        paddingLeft: 16
    },
    pillLabel: {
        fontSize: 11,
        fontWeight: "bold"
    },
    badgeCircle: {
        position: "absolute",
        right: 0,
        top: 2,
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2
    },
    badgeText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    scoreInput: {
        width: 60,
        height: 44,
        borderRadius: 8,
        borderWidth: 1,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    flexInput: {
        flex: 1,
        textAlign: "left",
        paddingHorizontal: 12
    },
    rollButton: {
        width: 110,
        height: 44,
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    rollButtonText: {
        fontSize: 10,
        fontWeight: "bold"
    }
});

export default AttributesTab;
