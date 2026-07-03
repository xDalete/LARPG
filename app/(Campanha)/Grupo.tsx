import { getCharacters } from "@/api/Character.Api";
import { CharacterCard } from "@/components/campanha/Mesas/CharacterCard";
import PageHeader from "@/components/common/PageHeader";
import ThemedButton from "@/components/common/ThemedButton";
import ThemedView from "@/components/common/ThemedView";
import { CharacterType } from "@/types/Types";
import { router, useLocalSearchParams, useFocusEffect } from "expo-router";
import { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@/hooks/use-theme-colors";
import { Ionicons } from "@expo/vector-icons";
import { getCampanhas } from "@/api/CampanhasApi";

export default function Grupo() {
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [campanhaTitulo, setCampanhaTitulo] = useState("Mesa");
    const cores = useThemeColors();
    const params = useLocalSearchParams();
    const campanhaId = params.campanhaId as string | undefined;
    const campanhaName = params.campanhaName as string | undefined;

    useEffect(() => {
        if (campanhaId) {
            getCampanhas().then((respostaCampanhas) => {
                const currentCampanha = respostaCampanhas.data.find((campanha) => campanha.id === campanhaId);
                if (currentCampanha) {
                    setCampanhaTitulo(currentCampanha.name);
                }
            });
        } else if (campanhaName) {
            setCampanhaTitulo(decodeURIComponent(campanhaName));
        }
    }, [campanhaId, campanhaName]);

    useFocusEffect(
        useCallback(() => {
            getCharacters(campanhaId).then((response) => {
                setCharacters(response.data);
            });
        }, [campanhaId])
    );
    return (
        <SafeAreaView style={styles.safeArea}>
            <ThemedView style={styles.container}>
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => router.push("/Campanhas")} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color={cores.text} />
                    </TouchableOpacity>
                    <PageHeader title={campanhaTitulo} subtitle="Visualize sua ficha dentro da campanha." />
                </View>
                <View style={styles.characters}>
                    {characters.map((character) => (
                        <CharacterCard
                            key={character.id}
                            character={character}
                            onPress={() => router.push(`/(CriacaoFicha)/Ficha?characterId=${character.id}&campanhaId=${campanhaId}`)}
                        />
                    ))}
                </View>
                <ThemedButton
                    title="+"
                    onPress={() => {
                        router.push(`/(CriacaoFicha)/Ficha?campanhaId=${campanhaId}`);
                    }}
                    backgroundColor="#f1c40f"
                    textColor="#000000"
                    borderRadius={32}
                    style={styles.add}
                    textStyle={styles.addText}
                />
            </ThemedView>
        </SafeAreaView>
    );
}

const styles =  StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 24,
        gap: 24
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12
    },
    backButton: {
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center"
    },
    characters: {
        gap: 20,
        paddingBottom: 96
    },
    add: {
        position: "absolute",
        right: 24,
        bottom: 24,
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0,
        shadowColor: "#f1c40f",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 15,
        elevation: 24
    },
    addText: {
        fontSize: 25,
        fontWeight: "900"
    }
});
