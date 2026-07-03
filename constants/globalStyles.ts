import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        width: "100%"
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12
    },
    rowStart: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 12
    },
    fullWidth: {
        width: "100%"
    },
    separator: {
        height: 1,
        backgroundColor: "rgba(155, 161, 166, 0.15)",
        marginVertical: 12
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        justifyContent: "center",
        alignItems: "center"
    },
    modalContent: {
        width: "85%",
        maxHeight: "70%",
        borderRadius: 12,
        borderWidth: 1,
        padding: 16,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 12
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(155, 161, 166, 0.2)"
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    confirmButton: {
        marginTop: 16,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center"
    },
    confirmText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000"
    }
});
