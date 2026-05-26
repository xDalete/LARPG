import { StyleSheet, View } from "react-native";
import FormInput from "../formComponents/FormInput";
import ThemedButton from "../common/ThemedButton";
import { useState } from "react";

//TODO: Add form validation and error handling with react-hook-form
const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <FormInput
        label="Username"
        placeholder="Enter your username"
        onChangeText={(value) => setUsername(value)}
      />
      <FormInput
        label="Email"
        placeholder="Enter your email"
        onChangeText={(value) => setEmail(value)}
      />
      <FormInput
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={(value) => setPassword(value)}
      />
      <FormInput
        label="Confirm Password"
        placeholder="Enter your password again"
        secureTextEntry
        onChangeText={(value) => setConfirmPassword(value)}
      />
      <ThemedButton
        title="Sign Up"
        onPress={() =>
          console.log(
            `Sign Up pressed\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`,
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    width: "100%",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUpForm;
