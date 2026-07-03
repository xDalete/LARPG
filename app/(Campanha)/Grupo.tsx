import { getCharacters } from "@/api/Character.Api";
import { CharacterCard } from "@/components/campanha/Mesas/CharacterCard";
import PageHeader from "@/components/common/PageHeader";
import ThemedButton from "@/components/common/ThemedButton";
import ThemedView from "@/components/common/ThemedView";
import { CharacterType } from "@/types/Types";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@/hooks/use-theme-colors";
import { Ionicons } from "@expo/vector-icons";

export default function Grupo() {
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const cores = useThemeColors();
    const params = useLocalSearchParams();
    const campanhaName = params.campanhaName as string | undefined;
    const displayTitle = campanhaName ? decodeURIComponent(campanhaName) : "Mesa";

    useEffect(() => {
        getCharacters().then((response) => {
            setCharacters(response.data);
        })
    }, []);
    return (
        <SafeAreaView style={styles.safeArea}>
            <ThemedView style={styles.container}>
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => router.push("/Campanhas")} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color={cores.text} />
                    </TouchableOpacity>
                    <PageHeader title={displayTitle} subtitle="Visualize sua ficha dentro da campanha." />
                </View>
                <View style={styles.characters}>
                    {characters.map((character) => (
                        <CharacterCard
                            key={character.id}
                            character={character}
                            onPress={() => router.push(`/(CriacaoFicha)/Ficha?characterId=${character.id}`)}
                        />
                    ))}
                </View>
                <ThemedButton
                    title="+"
                    onPress={() => {
                        console.log(router.push('/(CriacaoFicha)/Ficha'));
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
