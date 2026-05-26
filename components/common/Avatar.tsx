import { Image } from "expo-image";
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type AvatarProps = {
  avatar: ImageSourcePropType;
  size?: number;
  onPress?: () => void;
};

const Avatar: React.FC<AvatarProps> = ({ avatar, size = 64, onPress }) => (
  <TouchableOpacity
    activeOpacity={onPress ? 0.2 : 1}
    style={[styles.container, size ? { width: size, height: size } : {}]}
    onPress={onPress}
  >
    <Image source={avatar} style={styles.image} />
  </TouchableOpacity>
);

export default Avatar;

const styles = StyleSheet.create({
  container: {
    borderRadius: "50%",
    overflow: "hidden",
    borderWidth: 1,
    //TODO: Ajustar a cor da borda para combinar melhor com o tema escuro e claro
    borderColor: "#475569",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
