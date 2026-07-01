import { StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";

type PageHeaderProps = {
    title: string;
    subtitle: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
    return (
        <View style={styles.container}>
            <ThemedText type="title" color="primary">
                {title}
            </ThemedText>
            <ThemedText type="subtitle" color="textMuted">
                {subtitle}
            </ThemedText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 4
    }
});

export default PageHeader;
