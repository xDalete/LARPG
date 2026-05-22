import { StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

type CardProps = {
    children: React.ReactNode
}

export default function Card({ children }: CardProps) {
    return (
        <LinearGradient 
            colors={['rgba(30, 41, 59, 1)', 'rgba(17, 24, 39, 1)']} 
            style={styles.card}
        >
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    card: {
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.21), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
        borderRadius: 12,
        borderColor: "rgba(234, 179, 8, 1)",
        borderWidth: 1,
        padding: 15,
    }
})