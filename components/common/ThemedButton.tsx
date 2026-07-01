import { useThemeColors } from "@/hooks/use-theme-colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
    title: string;
    onPress: () => void;
};

const ThemedButton = ({ title, onPress }: ButtonProps) => {
    const colorScheme = useThemeColors();
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...styles.button,
                backgroundColor: colorScheme.backgroundLighter,
                borderColor: colorScheme.border
            }}
        >
            <Text style={{ ...styles.buttonText, color: colorScheme.text }}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },
    buttonText: {
        fontSize: 16,
        textAlign: "center"
    }
});

export default ThemedButton;
