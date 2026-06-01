import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

export default function CustomGradient(props: Omit<LinearGradientProps, "colors">) {
  return <LinearGradient colors={["rgba(30, 41, 59)", "rgba(17, 24, 39)"]} {...props} />;
}
