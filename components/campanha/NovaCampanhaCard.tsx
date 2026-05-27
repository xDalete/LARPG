import { StyleSheet, View } from "react-native";
import Card from "../common/Card";
import ThemedText from "../common/ThemedText";
import { ReactNode } from "react";

type NovaCampanhaCardProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  onPress?: () => void;
  active?: boolean;
};

const NovaCampanhaCard: React.FC<NovaCampanhaCardProps> = ({ title, subtitle, icon, onPress, active }) => {
  return (
    <Card active={active} style={styles.container} onPress={onPress}>
      <View>
        <ThemedText color="primary" type="title" fontSize={16}>
          {title}
        </ThemedText>
        <ThemedText color="textMuted" type="subtitle" fontSize={12}>
          {subtitle}
        </ThemedText>
      </View>

      <View style={styles.iconContainer}>{icon}</View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16
  },
  iconContainer: {
    marginLeft: "auto",
    alignItems: "center"
  }
});

export default NovaCampanhaCard;
