import Logo from "@/components/common/Logo";
import { ThemedText } from "@/components/common/ThemedText";

import { ThemedView } from "@/components/common/ThemedView";
import LoginForm from "@/components/forms/LoginForm";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ThemedView
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo />
      <LoginForm />
      <Link href={"/SignUp"} replace>
        <ThemedText>Não possui uma conta?</ThemedText>
      </Link>
    </ThemedView>
  );
}
