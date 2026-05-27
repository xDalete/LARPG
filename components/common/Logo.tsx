import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const Logo = () => {
  return <Image source={require("@/assets/images/LARPG-LOGO.png")} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  }
});

export default Logo;
