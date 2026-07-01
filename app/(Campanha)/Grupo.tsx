import { CharacterCard } from "@/components/campanha/Mesas/CharacterCard";
import PageHeader from "@/components/common/PageHeader";
import ThemedView from "@/components/common/ThemedView";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Mesa() {
    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Falta implementar a lógica de selecionar a campanha e carregar os personagens dela, por enquanto só tem um exemplo estático */}
            <ThemedView style={styles.container}>
                <PageHeader title="Mesa" subtitle="Visualize sua ficha dentro da campanha." />
                <View style={styles.characters}>
                    <CharacterCard
                        nome="Aragorn"
                        descricao="Guerreiro"
                        avatar={require("@/assets/images/icon.png")}
                        vidaAtual={50}
                        vidaMax={100}
                    />
                    <CharacterCard
                        nome="Aragorn"
                        descricao="Guerreiro"
                        avatar={require("@/assets/images/icon.png")}
                        vidaAtual={50}
                        vidaMax={100}
                    />
                    <CharacterCard
                        nome="Aragorn"
                        descricao="Guerreiro"
                        avatar={require("@/assets/images/icon.png")}
                        vidaAtual={50}
                        vidaMax={100}
                    />
                </View>
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = {
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 24,
        gap: 24
    },
    characters: {
        gap: 20
    }
};
