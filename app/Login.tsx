import Logo from "@/components/common/Logo";
import { ThemedText } from "@/components/common/ThemedText";

import { ThemedView } from "@/components/common/ThemedView";
import LoginForm from "@/components/forms/LoginForm";
import { ImageBackground } from "expo-image";
import { Link } from "expo-router";

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
        <LoginForm />
        <Link href={"/SignUp"} replace>
          <ThemedText>Não possui uma conta?</ThemedText>
        </Link>
      </ImageBackground>
    </ThemedView>
  );
}
