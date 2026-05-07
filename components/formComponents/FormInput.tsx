import { StyleSheet, View } from "react-native";
import { ThemedText } from "../common/ThemedText";
import ThemedTextInput from "../common/ThemedTextInput";
import { useThemeColors } from "@/hooks/use-theme-colors";

const FormInput = ({
  label,
  ...rest
}: { label: string } & React.ComponentProps<typeof ThemedTextInput>) => {
  const colorScheme = useThemeColors();
  return (
    <View style={styles.container}>
      <ThemedText style={{ ...styles.label, color: colorScheme.textMuted }}>
        {label}
      </ThemedText>
      <ThemedTextInput {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    gap: 4,
  },
  label: {
    fontSize: 14,
  },
});

export default FormInput;
