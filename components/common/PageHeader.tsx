import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import ThemedText from "./ThemedText";

type PageHeaderProps = {
    title: string;
    subtitle?: string;
    centered?: boolean;
    style?: StyleProp<ViewStyle>;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, centered, style }) => {
    // Calcula o tamanho da fonte dinamicamente baseando-se no comprimento do texto
    // para garantir o redimensionamento ideal em qualquer plataforma (iOS, Android, Web)
    const obterTamanhoFonte = (texto: string) => {
        const comp = texto.length;
        if (comp <= 22) return 30;
        if (comp <= 30) return 24;
        if (comp <= 38) return 18;
        return 14;
    };

    const fontSize = obterTamanhoFonte(title);
    const lineHeight = fontSize;

    return (
        <View style={[styles.container, centered && styles.centered, style]}>
            <ThemedText 
                type="title" 
                color="primary"
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.2}
                fontSize={fontSize}
                style={{ lineHeight }}
            >
                {title}
            </ThemedText>
            {subtitle && (
                <ThemedText type="subtitle" color="textMuted">
                    {subtitle}
                </ThemedText>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 4
    },
    centered: {
        alignItems: "center"
    }
});

export default PageHeader;
