import Logo from "@/components/common/Logo";
import { ThemedText } from "@/components/common/ThemedText";

import { ThemedView } from "@/components/common/ThemedView";
import SignUpForm from "@/components/forms/SignUpForm";
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
      <SignUpForm />
      <Link href={"/Login"} replace>
        <ThemedText>Já possui uma conta?</ThemedText>
      </Link>
    </ThemedView>
  );
}
