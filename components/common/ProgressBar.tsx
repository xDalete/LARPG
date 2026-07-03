import ThemedText from "@/components/common/ThemedText";
import { StyleSheet, View } from "react-native";

type TipoBarra = "vida" | "mana" | "outro";

const coresPadroes: Record<TipoBarra, string> = {
    vida: "#e53935",
    mana: "#2196F3",
    outro: "#4caf50"
};

interface PropriedadesProgressBar {
    current: number;
    max: number;
    tipo?: TipoBarra;
    color?: string;
    label?: string;
    showText?: boolean;
    showTextOnBar?: boolean;
}

export const ProgressBar = ({
    current,
    max,
    tipo = "outro",
    color,
    label,
    showText = true,
    showTextOnBar = false
}: PropriedadesProgressBar) => {
    const corFinal = color || coresPadroes[tipo];

    const percentual = (current / max) * 100;

    return (
        <View style={estilos.container}>
            {label && <ThemedText style={estilos.rotulo}>{label}</ThemedText>}

            <View style={estilos.containerBarra}>
                <View
                    style={[
                        estilos.barra,
                        {
                            flex: percentual / 100,
                            backgroundColor: corFinal,
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ]}
                >
                    {showTextOnBar && percentual > 20 && (
                        <ThemedText style={estilos.textoNaBarra}>
                            {current} / {max}
                        </ThemedText>
                    )}
                </View>
                <View style={estilos.barraVazia} />
            </View>

            {showText && (
                <ThemedText style={estilos.texto}>
                    {current} / {max}
                </ThemedText>
            )}
        </View>
    );
};

const estilos = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 12
    },

    rotulo: {
        fontSize: 12,
        color: "#a0a8b8",
        marginBottom: 6,
        letterSpacing: 0.5
    },

    containerBarra: {
        height: 24,
        backgroundColor: "#0f1620",
        borderRadius: 10,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "transparent",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: "row"
    },

    barra: {
        height: "100%",
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5
    },

    barraVazia: {
        flex: 1,
        height: "100%",
        backgroundColor: "transparent"
    },

    texto: {
        fontSize: 12,
        color: "#a0a8b8",
        textAlign: "center",
        marginTop: 6
    },

    textoNaBarra: {
        fontSize: 10,
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center"
    }
});
