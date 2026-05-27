import { useThemeColors } from "@/hooks/use-theme-colors";
import { ImageType } from "@/types/Types";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity } from "react-native";

type AvatarProps = {
  avatar: ImageType;
  size?: number;
  onPress?: () => void;
};

const Avatar: React.FC<AvatarProps> = ({ avatar, size = 64, onPress }) => {
  const colorScheme = useThemeColors();

  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.5 : 1}
      style={[
        styles.container,
        size ? { width: size, height: size } : {},
        { borderColor: avatar.averageColor || colorScheme.border },
      ]}
      onPress={onPress}
    >
      <Image source={{ uri: avatar.uri }} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    borderRadius: "50%",
    overflow: "hidden",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
