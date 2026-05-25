import Card from "@/components/common/Card";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Campanhas() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedView style={{ flex: 1, padding: 50 }}>
                <ThemedText type="title" color="primary" style={{ marginBottom: 10, fontFamily: "Cinzel_400Regular" }}>
                    Campanhas
                </ThemedText>
                <ThemedText type="subtitle" color="textMuted" style={{ marginBottom: 30, fontFamily: "IBMPlexSans_400Regular", fontSize: 15 }}>
                    Selecione uma campanha ou entre em uma.
                </ThemedText>

                <View style={{ gap: 20 }}>

                    <View style={{ borderColor: "rgba(234, 179, 8, 1)", borderWidth: 1, borderRadius: 12 }}>
                        <Card>
                            <Image
                                source={require("@/assets/images/dados.png")}
                                style={{ width: 50, height: 50, borderRadius: 25, marginRight: 15, borderColor: "#475569", borderWidth: 1 }}
                            />

                            <View style={{ flex: 1 }}>
                                <ThemedText color='primary' style={{ fontFamily: "Cinzel_400Regular" }}>Ventos do Destino</ThemedText>
                                <ThemedText color='textMuted' style={{ fontFamily: "IBMPlexSans_400Regular", fontSize: 10, marginTop: 4 }}>MESTRE (VOCÊ)</ThemedText>
                            </View>
                        </Card>
                    </View>

                        <View style={{ borderColor: "#334155", borderWidth: 1, borderRadius: 12 }}>
                    <Card>
                        <Image
                            source={require("@/assets/images/dados.png")}
                            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 15, borderColor: "#475569", borderWidth: 1 }}
                        />

                        <View style={{ flex: 1 }}>
                            <ThemedText color='primary' style={{ fontFamily: "Cinzel_400Regular" }}>Susurro das Cinzas</ThemedText>
                            <ThemedText color='textMuted' style={{ fontFamily: "IBMPlexSans_400Regular", fontSize: 10, marginTop: 4 }}>MESTRE (VOCÊ)</ThemedText>
                        </View>

                    </Card>
                        </View>

                    <View style={{ borderColor: "#334155", borderWidth: 1, borderRadius: 12 }}>
                    <Card>
                        <View style={{ flex: 1 }}>
                            <ThemedText color='primary' style={{ fontFamily: "Cinzel_400Regular" }}>Adicionar Campanha</ThemedText>
                            <ThemedText color='textMuted' style={{ fontFamily: "IBMPlexSans_400Regular", fontSize: 12, marginTop: 4 }}>SEJA O MESTRE DO SEU MUNDO</ThemedText>
                        </View>
                        <Image
                            source={require("@/assets/images/dados.png")}
                            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 15 }}
                        />
                    </Card>
                    </View>

                    <View style={{ borderColor: "#334155", borderWidth: 1, borderRadius: 12 }}>
                    <Card>
                        <View style={{ flex: 1 }}>
                            <ThemedText color='primary' style={{ fontFamily: "Cinzel_400Regular" }}>Entrar em uma Campanha</ThemedText>
                            <ThemedText color='textMuted' style={{ fontFamily: "IBMPlexSans_400Regular", fontSize: 12, marginTop: 4 }}>SEJA UM HEROI EM OUTRO MUNDO</ThemedText>
                        </View>
                        <Image
                            source={require("@/assets/images/dados.png")}
                            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 15 }}
                        />
                    </Card>
                    </View>

                </View>
            </ThemedView>
        </SafeAreaView>
    )
}