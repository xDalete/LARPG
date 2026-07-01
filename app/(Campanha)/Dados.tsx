import Dado from "@/components/campanha/Dado";
import PageHeader from "@/components/common/PageHeader";
import ThemedView from "@/components/common/ThemedView";
import { Image, StyleSheet, View } from "react-native";

export default function RolarDados() {
    return (
        <ThemedView style={styles.container}>
            <View style={styles.header}>
                <PageHeader title="Dados" subtitle="" />
            </View>
            <View style={styles.dadosRow}>
                <Dado
                    dado="D4"
                    icon={
                        <Image source={require("@/assets/images/icon.png")} style={styles.icon} resizeMode="contain" />
                    }
                />
                <Dado
                    dado="D6"
                    icon={
                        <Image source={require("@/assets/images/icon.png")} style={styles.icon} resizeMode="contain" />
                    }
                />
                <Dado
                    dado="D8"
                    icon={
                        <Image source={require("@/assets/images/icon.png")} style={styles.icon} resizeMode="contain" />
                    }
                />
            </View>
            <View style={styles.dadosRow}>
                <Dado
                    dado="D12"
                    icon={
                        <Image source={require("@/assets/images/icon.png")} style={styles.icon} resizeMode="contain" />
                    }
                />
                <Dado
                    dado="D20"
                    icon={
                        <Image source={require("@/assets/images/icon.png")} style={styles.icon} resizeMode="contain" />
                    }
                />
                <Dado
                    dado="D100"
                    icon={
                        <Image source={require("@/assets/images/icon.png")} style={styles.icon} resizeMode="contain" />
                    }
                />
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 24,
        gap: 24
    },
    dadosRow: {
        flexDirection: "row",
        gap: 12,
    },
    header: {
        alignItems: "center"
    },
    icon: {
        width: 32,
        height: 32
    }
});
