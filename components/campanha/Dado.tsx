import { StyleSheet, View } from "react-native";
import ThemedText from "../common/ThemedText";
import Card from "../common/Card";

type DadosProps = {
    dado: string;
    icon: React.ReactNode;
    onPress?: () => void;
};

const Dado: React.FC<DadosProps> = ({ dado, icon, onPress }) => {
    return (
        <Card style={styles.container} onPress={() => console.log(`Clicou no dado ${dado}`)}>
            <ThemedText style={styles.dadoText}>{dado}</ThemedText>
            <View style={styles.iconContainer}>{icon}</View>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    },

    iconContainer: {
        marginTop: 4,
        justifyContent: "center",
        alignItems: "center",
        width: 32,
        height: 32,
        overflow: "hidden"
    },
    dadoText: {
        fontSize: 14,
        fontFamily: "IBMPlexSans_400Regular",
        color: "#94A3B8",
        textAlign: "center"
    }
});

export default Dado;
