import Dados from "@/components/campanha/Dados";
import PageHeader from "@/components/common/PageHeader";
import ThemedView from "@/components/common/ThemedView";
import { View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RolarDados() {
    return (
         <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
             <View style={styles.header}>
             <PageHeader title="Dados" subtitle=""/>
           </View>
           <ThemedView style={styles.dados}>
           <Dados dado="D4" icon={<Image source={require("../assets/images/icon.png")} style={styles.icon} resizeMode="contain" />} />
            <Dados dado="D6" icon={<Image source={require("../assets/images/icon.png")} style={styles.icon} resizeMode="contain" />} />
            <Dados dado="D8" icon={<Image source={require("../assets/images/icon.png")} style={styles.icon} resizeMode="contain" />} />
            <Dados dado="D12" icon={<Image source={require("../assets/images/icon.png")} style={styles.icon} resizeMode="contain" />} />
            <Dados dado="D20" icon={<Image source={require("../assets/images/icon.png")} style={styles.icon} resizeMode="contain" />} />
            <Dados dado="D100" icon={<Image source={require("../assets/images/icon.png")} style={styles.icon} resizeMode="contain" />} />
            </ThemedView>
           </ThemedView>
     </SafeAreaView>
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
    dados:{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    header:{
        alignItems: "center",
    },
    icon: {
        width: 32,
        height: 32,
    }
})
