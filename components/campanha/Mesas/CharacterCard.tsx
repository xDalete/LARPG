import { StyleSheet, View } from "react-native";
import Avatar from "@/components/common/Avatar";
import ThemedText from "@/components/common/ThemedText";
import { CharacterType, ImageType } from "@/types/Types";
import { ProgressBar } from "@/components/common/ProgressBar";
import Card from "@/components/common/Card";
interface PropriedadesCharacterCard {
    nome: string;
    descricao: string;
    avatar: ImageType;
    level?: number;
    vidaAtual: number;
    vidaMax: number;
    onPress?: () => void;
}

export const CharacterCard = ({ character, onPress }: { character: CharacterType; onPress?: () => void }) => {
    const { nome, descricao, avatar, vidaAtual, vidaMax } = character;
    return (
        <Card onPress={onPress} style={styles.cardContainer}>
            <Avatar avatar={avatar} />
            <View style={styles.infoContainer}>
                <ThemedText style={styles.nome}>{nome}</ThemedText>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <ThemedText style={styles.descricao}>{descricao}</ThemedText>
                    <ThemedText style={styles.level}>Level {Math.floor(vidaMax / 10)}</ThemedText>
                </View>
                <ProgressBar current={vidaAtual} max={vidaMax} tipo="vida" showText={false} showTextOnBar={true} />
            </View>
        </Card>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 16,
        justifyContent: "center",
    },
    nome: {
        fontSize: 16,
        color: "#e2e8f0",
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 4,
        fontFamily: "serif",
    },
    descricao: {
        flex: 1,
        flexShrink: 1,
        minWidth: 0,
        flexWrap: "wrap",
        fontSize: 12,
        color: "#a0a8b8",
        textTransform: "uppercase",
        marginRight: 8,
    },
    level: {
        fontSize: 12,
        color: "#a0a8b8",
        textTransform: "uppercase",
    }
});

