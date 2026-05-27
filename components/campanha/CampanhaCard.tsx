import { StyleSheet, View } from "react-native";
import Avatar from "../common/Avatar";
import Card from "../common/Card";
import { ThemedText } from "../common/ThemedText";
import { ImageType } from "@/types/Types";

type CampanhaCardProps = {
  title: string;
  subtitle: string;
  avatar: ImageType;
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
    <Card active={active} style={styles.container} onPress={onPress}>
      <Avatar avatar={avatar} size={64} />
      <View>
        <ThemedText color="primary" type="title" fontSize={18}>
          {title}
        </ThemedText>
        <ThemedText color="textMuted" type="subtitle" fontSize={14}>
          {subtitle}
        </ThemedText>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
});

export default CampanhaCard;
