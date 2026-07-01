import { StyleSheet, View } from "react-native";
import FormInput from "../formComponents/FormInput";
import ThemedButton from "../common/ThemedButton";
import { useState } from "react";

//TODO: Add form validation and error handling with react-hook-form
const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <FormInput label="Username" placeholder="Enter your username" onChangeText={value => setUsername(value)} />
            <FormInput
                label="Password"
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={value => setPassword(value)}
            />
            <ThemedButton
                title="Login"
                onPress={() => console.log(`Login pressed\nUsername: ${username}\nPassword: ${password}`)}
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
        alignItems: "center"
    }
});

export default LoginForm;
