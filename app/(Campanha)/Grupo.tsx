import { getCharacters } from "@/api/Character.Api";
import { CharacterCard } from "@/components/campanha/Mesas/CharacterCard";
import PageHeader from "@/components/common/PageHeader";
import ThemedView from "@/components/common/ThemedView";
import { CharacterType } from "@/types/Types";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Grupo() {
    const [characters, setCharacters] = useState<CharacterType[]>([]);

    useEffect(() => {
        getCharacters().then((response) => {
            setCharacters(response.data);
        })
    }, []);
    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Falta implementar a lógica de selecionar a campanha e carregar os personagens dela, por enquanto só tem um exemplo estático */}
            <ThemedView style={styles.container}>
                <PageHeader title="Mesa" subtitle="Visualize sua ficha dentro da campanha." />
                <View style={styles.characters}>
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
                </View>
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
    characters: {
        gap: 20, 
    },
});
