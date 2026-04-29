import { useThemeColors } from "@/hooks/use-theme-colors";
import { StyleSheet, TextInput } from "react-native";

const ThemedTextInput = ({
  ...rest
}: React.ComponentProps<typeof TextInput>) => {
  const colorScheme = useThemeColors();
  return (
    <TextInput
      style={{
        ...styles.input,
        backgroundColor: colorScheme.backgroundLighter,

        color: colorScheme.text,
        borderColor: colorScheme.border,
      }}
      placeholderTextColor={colorScheme.textMuted}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
});

export default ThemedTextInput;
