import Logo from "@/components/common/Logo";
import { ThemedText } from "@/components/common/ThemedText";

import { ThemedView } from "@/components/common/ThemedView";
import SignUpForm from "@/components/forms/SignUpForm";
import { Link } from "expo-router";
import { ImageBackground } from "react-native";

export default function Index() {
  return (
    <ThemedView
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require("@/assets/images/dados.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        imageStyle={{ opacity: 0.15 }}
        resizeMode="contain"
      >
        <Logo />
        <SignUpForm />
        <Link href={"/Login"} replace>
          <ThemedText>Já possui uma conta?</ThemedText>
        </Link>
      </ImageBackground>
    </ThemedView>
  );
}
