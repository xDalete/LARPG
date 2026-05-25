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
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.21,
        shadowRadius: 15,
        elevation: 5,
        borderRadius: 12,
        borderWidth: 1,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})