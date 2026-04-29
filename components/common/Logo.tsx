import { Image } from "react-native";

const Logo = () => {
  return (
    <Image
      source={require("@/assets/images/LARPG-LOGO.png")}
      style={{ width: 200, height: 200, marginBottom: 20 }}
    />
  );
};

export default Logo;
