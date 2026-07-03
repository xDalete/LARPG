import { StyleSheet, View, Alert } from "react-native";
import FormInput from "../formComponents/FormInput";
import ThemedButton from "../common/ThemedButton";
import { useState } from "react";
import { supabase } from "@/api/supabaseClient";
import { router } from "expo-router";

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async () => {
        if (!username.trim() || !email.trim() || !password || !confirmPassword) {
            Alert.alert("Campos Obrigatórios", "Por favor, preencha todos os campos.");
            return;
        }

        if (password.length < 6) {
            Alert.alert("Senha Curta", "A senha deve ter no mínimo 6 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Senhas Diferentes", "As senhas digitadas não coincidem.");
            return;
        }

        setIsLoading(true);
        const { error } = await supabase.auth.signUp({
            email: email.trim(),
            password: password,
            options: {
                data: {
                    username: username.trim()
                }
            }
        });
        setIsLoading(false);

        if (error) {
            Alert.alert("Erro de Cadastro", error.message);
        } else {
            Alert.alert(
                "Cadastro Realizado",
                "Sua conta foi criada! Agora você já pode fazer login.",
                [{ text: "OK", onPress: () => router.replace("/Login") }]
            );
        }
    };

    return (
        <View style={styles.container}>
            <FormInput 
                label="Username" 
                placeholder="Enter your username" 
                onChangeText={value => setUsername(value)} 
                autoCapitalize="none"
            />
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
            <FormInput
                label="Confirm Password"
                placeholder="Enter your password again"
                secureTextEntry
                onChangeText={value => setConfirmPassword(value)}
            />
            <ThemedButton
                title={isLoading ? "Carregando..." : "Sign Up"}
                onPress={handleSignUp}
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

export default SignUpForm;
