import { StyleSheet, View } from "react-native";
import Avatar from "@/components/common/Avatar";
import ThemedText from "@/components/common/ThemedText";
import { ImageType } from "@/types/Types";
import { ProgressBar } from "@/components/common/ProgressBar";

interface PropriedadesCharacterCard {
    nome: string;
    descricao: string;
    avatar: ImageType;
    level?: number;
    vidaAtual: number;
    vidaMax: number;
}

export const CharacterCard = ({ nome, descricao, avatar, vidaAtual, vidaMax }: PropriedadesCharacterCard) => {
    return (
        <View style={estilos.cardContainer}>
            <Avatar avatar={avatar} />

            <View style={estilos.infoContainer}>
                <ThemedText style={estilos.nome}>{nome}</ThemedText>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <ThemedText style={estilos.descricao}>{descricao}</ThemedText>
                    <ThemedText style={estilos.level}>Level {vidaMax / 10}</ThemedText>
                </View>
                <ProgressBar current={vidaAtual} max={vidaMax} tipo="vida" showText={false} />
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#171f2c",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#2c3b52",
        marginBottom: 16
    },
    infoContainer: {
        flex: 1,
        marginLeft: 16,
        justifyContent: "center"
    },
    nome: {
        fontSize: 16,
        color: "#e2e8f0",
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 4,
        fontFamily: "serif"
    },
    descricao: {
        fontSize: 12,
        color: "#a0a8b8",
        textTransform: "uppercase",
        marginBottom: 8
    },
    level: {
        fontSize: 12,
        color: "#a0a8b8",
        textTransform: "uppercase",
        marginBottom: 8
    }
});
