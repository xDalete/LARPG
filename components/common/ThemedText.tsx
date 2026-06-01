import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColors } from "@/hooks/use-theme-colors";

export type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  color?: "primary" | "text" | "textMuted";
  fontSize?: number;
};

export default function ThemedText({
  style,

  type = "default",
  color,
  fontSize,
  ...rest
}: ThemedTextProps) {
  const themeColors = useThemeColors();

  return (
    <Text
      style={[
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        {
          color: color ? themeColors[color] : themeColors.text
        },
        fontSize ? { fontSize } : {},
        ,
        style
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600"
  },
  title: {
    fontSize: 32,
    fontFamily: "Cinzel_400Regular",
    lineHeight: 32
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "IBMPlexSans_400Regular",
    lineHeight: 24
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4"
  }
});
