import { StyleSheet, View, Alert } from "react-native";
import FormInput from "../formComponents/FormInput";
import ThemedButton from "../common/ThemedButton";
import { useState } from "react";
import { supabase } from "@/api/supabaseClient";
import { router } from "expo-router";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert("Campos Obrigatórios", "Por favor, preencha todos os campos.");
            return;
        }

        setIsLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password: password
        });
        setIsLoading(false);

        if (error) {
            Alert.alert("Erro de Login", error.message);
        } else {
            router.replace("/Campanhas");
        }
    };

    return (
        <View style={styles.container}>
            <FormInput 
                label="Email" 
                placeholder="Enter your email" 
                onChangeText={value => setEmail(value)} 
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <FormInput
                label="Password"
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={value => setPassword(value)}
            />
            <ThemedButton
                title={isLoading ? "Carregando..." : "Login"}
                onPress={handleLogin}
                disabled={isLoading}
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
