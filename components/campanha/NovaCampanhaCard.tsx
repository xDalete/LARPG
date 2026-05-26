import { View } from "react-native";
import Card from "../common/Card";
import { ThemedText } from "../common/ThemedText";
import { ReactNode } from "react";

type CampanhaCardProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  onPress?: () => void;
  active?: boolean;
};

const CampanhaCard: React.FC<CampanhaCardProps> = ({
  title,
  subtitle,
  icon,
  onPress,
  active,
}) => {
  return (
    <Card
      active={active}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        padding: 16,
      }}
      onPress={onPress}
    >
      <View>
        <ThemedText color="primary" type="title" fontSize={16}>
          {title}
        </ThemedText>
        <ThemedText color="textMuted" type="subtitle" fontSize={12}>
          {subtitle}
        </ThemedText>
      </View>

      <View style={{ marginLeft: "auto", alignItems: "center" }}>{icon}</View>
    </Card>
  );
};
export default CampanhaCard;
