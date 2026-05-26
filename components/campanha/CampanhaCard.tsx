import { ImageSourcePropType, View } from "react-native";
import Avatar from "../common/Avatar";
import Card from "../common/Card";
import { ThemedText } from "../common/ThemedText";

type CampanhaCardProps = {
  title: string;
  subtitle: string;
  avatar: ImageSourcePropType;
  onPress?: () => void;
  active?: boolean;
};

const CampanhaCard: React.FC<CampanhaCardProps> = ({
  title,
  subtitle,
  avatar,
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
      <Avatar avatar={avatar} size={64} />
      <View>
        <ThemedText color="primary" type="title" fontSize={18}>
          {title}
        </ThemedText>
        <ThemedText color="textMuted" type="subtitle" fontSize={12}>
          {subtitle}
        </ThemedText>
      </View>
    </Card>
  );
};
export default CampanhaCard;
