import { View, type ViewProps } from "react-native";

import { useThemeColors } from "@/hooks/use-theme-colors";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const colors = useThemeColors();

  return (
    <View
      style={[{ backgroundColor: colors.background }, style]}
      {...otherProps}
    />
  );
}
