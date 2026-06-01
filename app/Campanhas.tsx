import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import CampanhaCard from "@/components/campanha/CampanhaCard";
import NovaCampanhaCard from "@/components/campanha/NovaCampanhaCard";
import ThemedView from "@/components/common/ThemedView";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import PageHeader from "@/components/common/PageHeader";
import { useEffect, useState } from "react";
import { getCampanhas } from "@/api/CampanhasApi";
import { Campanha } from "@/types/CampanhaTypes";

export default function Campanhas() {
  const [Campanhas, setCampanhas] = useState<Campanha[]>([]);

  useEffect(() => {
    getCampanhas().then(response => {
      setCampanhas(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <PageHeader title="Campanhas" subtitle="Selecione uma campanha ou entre em uma." />
        <View style={styles.campanhaList}>
          {Campanhas.map(campanha => (
            <CampanhaCard
              key={campanha.id}
              title={campanha.name}
              subtitle={campanha.isMaster ? "Mestre" : "Jogador"}
              avatar={campanha.avatar}
              onPress={() => console.log(`Clicou na campanha ${campanha.name}`)}
            />
          ))}
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 24
  },
  campanhaList: {
    gap: 20
  }
});
