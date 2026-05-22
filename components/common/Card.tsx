import { StyleSheet, View } from "react-native"

type CardProps = {
    children: React.ReactNode
}

export default function Card({ children }: CardProps) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )


}
const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgba(0, 0, 0, 0.86)",
        boxShadow: "0px 10px 15px -3px rgba(255, 255, 255, 0.73), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
        borderRadius: 12,
        borderColor: "rgba(255, 0, 0, 0.86)",
        borderWidth: 1,
        padding: 15,
    }
})