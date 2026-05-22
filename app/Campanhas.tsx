import Card from "@/components/common/Card";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Campanhas() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            
            <ThemedView style={{ flex: 1, padding: 50}}>
                <ThemedText type="title" color="primary" style={{ marginBottom: 10, fontFamily: "Cinzel_400Regular"}}>
                    Campanhas
                </ThemedText>
                <ThemedText type="subtitle" color="textMuted" style={{ marginBottom: 30, fontFamily: "IBMPlexSans_400Regular", fontSize: 15}}>
                    Selecione uma campanha ou entre em uma.
                </ThemedText>
                <Card>
                    <ThemedText color='primary' style={{fontFamily: "Cinzel_400Regular"}}>Ventos do Destino</ThemedText>
                    <ThemedText color='textMuted' style={{fontFamily: "IBMPlexSans_400Regular", fontSize: 10}}>MESTRE (VOCÊ)</ThemedText>
                </Card>
            </ThemedView>
        </SafeAreaView>
    )
}