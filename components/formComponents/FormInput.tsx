import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import ThemedText from "../common/ThemedText";
import ThemedTextInput from "../common/ThemedTextInput";
import { useThemeColors } from "@/hooks/use-theme-colors";

interface FormInputProps extends React.ComponentProps<typeof ThemedTextInput> {
    label: string;
    containerStyle?: StyleProp<ViewStyle>;
}

const FormInput = ({ label, containerStyle, ...rest }: FormInputProps) => {
    const colorScheme = useThemeColors();
    return (
        <View style={[styles.container, containerStyle]}>
            <ThemedText style={{ ...styles.label, color: colorScheme.textMuted }}>{label}</ThemedText>
            <ThemedTextInput {...rest} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        gap: 4
    },
    label: {
        fontSize: 14
    }
});

export default FormInput;
