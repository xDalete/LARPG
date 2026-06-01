import Logo from "@/components/common/Logo";
import ThemedText from "@/components/common/ThemedText";
import ThemedView from "@/components/common/ThemedView";
import SignUpForm from "@/components/forms/SignUpForm";
import { ImageBackground } from "expo-image"; // <-- Alterado aqui
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/dados.png")}
        style={styles.ImageBackground}
        imageStyle={{ opacity: 0.15 }}
        contentFit="contain"
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ImageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
