import { useThemeColors } from "@/hooks/use-theme-colors";
import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle, StyleProp } from "react-native";
import type { ReactNode } from "react";

type ButtonProps = {
    title?: string;
    icon?: ReactNode;
    onPress: () => void;
    backgroundColor?: string;
    textColor?: string;
    borderRadius?: number;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

const ThemedButton = ({
    title = "",
    icon,
    onPress,
    backgroundColor,
    textColor,
    borderRadius,
    style,
    textStyle
}: ButtonProps) => {
    const colorScheme = useThemeColors();
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                {
                    backgroundColor: backgroundColor || colorScheme.backgroundLighter,
                    borderColor: colorScheme.border,
                    borderRadius: borderRadius ?? 8
                },
                style
            ]}
        >
            {icon ? (
                icon
            ) : (
                <Text style={[styles.buttonText, { color: textColor || colorScheme.text }, textStyle]}>
                    {title}
                </Text>
            )}
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
        fontWeight: "800",
        textAlign: "center"
    }
});

export default ThemedButton;
