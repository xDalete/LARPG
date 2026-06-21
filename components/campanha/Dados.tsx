import { StyleSheet, View } from "react-native";
import { useState } from "react";
import ThemedText from "../common/ThemedText";
import Card from "../common/Card";

type DadosProps ={
    dado: string;
    icon: React.ReactNode;
    onPress?: () => void;
};

const Dados: React.FC<DadosProps> = ({ dado, icon, onPress }) => {
    const [pressed, setPressedLocal] = useState(false);

    const handlePress = () => {
        setPressedLocal(true);
        setTimeout(() => setPressedLocal(false), 1000);
        onPress?.();
    };

    return (
        <Card
            onPress={handlePress}
            ContainerStyle={[
                styles.cardContainer,
                {
                    borderColor: pressed ? "#EAB308" : "#334155"
                }
            ]}
            style={styles.cardContent}
        >
            <View style={styles.container}>
                <ThemedText style={styles.dadoText}>{dado}</ThemedText>
                <View style={styles.iconContainer}>{icon}</View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 100,
        height: 81,
        borderWidth: 1,
        overflow: "hidden",
    },
    cardContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        paddingVertical: 8,
    },
    iconContainer: {
        marginTop: 4,
        justifyContent: "center",
        alignItems: "center",
        width: 32,
        height: 32,
        overflow: "hidden",
    },
    dadoText: {
        fontSize: 14,
        fontFamily: "IBMPlexSans_400Regular",
        color: "#94A3B8",
    },
});

export default Dados;