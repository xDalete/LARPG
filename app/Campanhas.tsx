import Card from "@/components/common/Card";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Campanhas() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            
            <ThemedView style={{ flex: 1, padding: 20}}>
                <ThemedText type="title" color="primary">Campanhas</ThemedText>
                <Card><ThemedText>CAMPANHAS</ThemedText>
                </Card>
            </ThemedView>
        </SafeAreaView>
    )
}