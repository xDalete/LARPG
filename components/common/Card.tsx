import { StyleSheet, TouchableOpacity, View } from "react-native";
import CustomGradient from "./CustomGradient";
import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";
import { useThemeColors } from "@/hooks/use-theme-colors";
import { useState } from "react";

type CardProps = {
    children: React.ReactNode;
    style?: ViewProps["style"];
    ContainerStyle?: ViewProps["style"];
    active?: boolean;
    onPress?: () => void;
};

export default function Card({ children, style, ContainerStyle, active, onPress }: CardProps) {
    const [pressed, setPressed] = useState(false);
    const colorScheme = useThemeColors();

    return (
        <TouchableOpacity
            onPress={
                onPress &&
                (() => {
                    onPress();
                    setPressed(true);
                    setTimeout(() => setPressed(false), 1000);
                })
            }
            activeOpacity={onPress ? 0.7 : 1}
        >
            <View
                style={[
                    styles.card,
                    {
                        borderColor: active || pressed ? colorScheme.primary : colorScheme.border
                    },
                    ContainerStyle
                ]}
            >
                <CustomGradient>
                    <View style={style}>{children}</View>
                </CustomGradient>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        //TODO: Ajustar as cores do gradiente para combinar melhor com o tema escuro e claro
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
        borderRadius: 12,
        overflow: "hidden",
        borderWidth: 1
    }
});
