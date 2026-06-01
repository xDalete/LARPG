import { ProgressBar } from "@/components/campanha/Mesas/ProgressBar";
import { ThemedView } from "@/components/common/ThemedView";

export default function Mesa() {
    return (
        <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ProgressBar current={50} max={100} tipo="vida" label="Vida" />
        </ThemedView>
    )
}
