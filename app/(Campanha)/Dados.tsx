import Dado from "@/components/campanha/Dado";
import PageHeader from "@/components/common/PageHeader";
import Row from "@/components/common/Row";
import ThemedView from "@/components/common/ThemedView";
import { Image, StyleSheet, Text, View } from "react-native";

export default function RolarDados() {
    return (
        <ThemedView style={styles.container}>
            <PageHeader title="Dados" centered />
            <View style={styles.dadosContainer}>
                <Row
                    items={[
                        <Dado
                            key="D4"
                            dado="D4"
                            icon={
                                <Image
                                    source={require("@/assets/images/icon.png")}
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            }
                        />,
                        <Dado
                            key="D6"
                            dado="D6"
                            icon={
                                <Image
                                    source={require("@/assets/images/icon.png")}
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            }
                        />,
                        <Dado
                            key="D8"
                            dado="D8"
                            icon={
                                <Image
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            }
                        />
                    ]}
                    gap={12}
                />
                <Row
                    items={[
                        <Dado
                            key="D12"
                            dado="D12"
                            icon={
                                <Image
                                    source={require("@/assets/images/icon.png")}
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            }
                        />,
                        <Dado
                            key="D20"
                            dado="D20"
                            icon={
                                <Image
                                    source={require("@/assets/images/icon.png")}
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            }
                        />,
                        <Dado
                            key="D100"
                            dado="D100"
                            icon={
                                <Image
                                    source={require("@/assets/images/icon.png")}
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            }
                        />
                    ]}
                    gap={12}
                />
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        gap: 12
    },
    header: {
        alignItems: "center"
    },
    icon: {
        width: 32,
        height: 32
    },
    dadosContainer: {
        marginTop: 16,
        gap: 16
    }
});
