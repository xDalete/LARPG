import { StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";

type PageHeaderProps = {
    title: string;
    subtitle?: string;
    centered?: boolean;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, centered }) => {
    return (
        <View style={[styles.container, centered && styles.centered]}>
            <ThemedText type="title" color="primary">
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
