import CampanhaCard from "@/components/campanha/CampanhaCard";
import NovaCampanhaCard from "@/components/campanha/NovaCampanhaCard";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Campanhas() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1, padding: 24, gap: 24 }}>
        <View style={{ gap: 4 }}>
          <ThemedText type="title" color="primary">
            Campanhas
          </ThemedText>
          <ThemedText type="subtitle" color="textMuted">
            Selecione uma campanha ou entre em uma.
          </ThemedText>
        </View>

        <View style={{ gap: 20 }}>
          <CampanhaCard
            title="Susurro das Cinzas"
            subtitle="MESTRE (VOCÊ)"
            avatar={require("@/assets/images/dados.png")}
            onPress={() => console.log("aaaaa")}
          />

          <CampanhaCard
            title="Ventos do Destino"
            subtitle="MESTRE (VOCÊ)"
            avatar={require("@/assets/images/dados.png")}
            onPress={() => console.log("bbbbb")}
          />

          <NovaCampanhaCard
            title="Adicionar Campanha"
            subtitle="SEJA O MESTRE DO SEU MUNDO"
            //TODO: pensar em uma forma de padronizar os ícones para não precisar definir as propriedades de cada um e implementar com o sistema de temas
            icon={<AntDesign name="usergroup-add" size={32} color="grey" />}
          />

          <NovaCampanhaCard
            title="Entrar em uma Campanha"
            subtitle="SEJA UM HERÓI EM OUTRO MUNDO"
            icon={<Ionicons name="earth" size={32} color="grey" />}
          />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}
