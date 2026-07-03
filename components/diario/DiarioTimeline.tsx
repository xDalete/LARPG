import React from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import { useThemeColors } from "@/hooks/use-theme-colors";
import { Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import ThemedText from "@/components/common/ThemedText";
import Card from "@/components/common/Card";
import { DiarioEntryType } from "@/types/Types";

type DiarioTimelineProps = {
    entries: DiarioEntryType[];
    onDelete: (id: string) => void;
};

export default function DiarioTimeline({ entries, onDelete }: DiarioTimelineProps) {
    const colors = useThemeColors();

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {entries.map((entry, index) => {
                const isFirst = index === 0;
                return (
                    <View key={entry.id} style={styles.timelineRow}>
                        {/* Timeline Graphic indicator column */}
                        <View style={styles.timelineLeftColumn}>
                            <View style={[
                                styles.timelineLine, 
                                { backgroundColor: colors.border },
                                isFirst && { top: 24 }
                            ]} />
                            {isFirst ? (
                                <View style={styles.activeDotContainer}>
                                    <View style={[styles.activeDotOuter, { borderColor: "rgba(241, 196, 15, 0.4)" }]}>
                                        <View style={[styles.activeDotInner, { backgroundColor: "#f1c40f" }]} />
                                    </View>
                                </View>
                            ) : (
                                <View style={[styles.inactiveDot, { backgroundColor: colors.textMuted }]} />
                            )}
                        </View>

                        {/* Timeline right content column */}
                        <View style={styles.timelineRightColumn}>
                            <ThemedText style={styles.dateText}>
                                {`DIA ${entry.dia}, ${entry.mes}`}
                            </ThemedText>
                            
                            <Card ContainerStyle={styles.cardContainer} style={styles.cardContent}>
                                <View style={styles.cardHeader}>
                                    <ThemedText style={[styles.entryTitle, { fontFamily: Fonts.serif }]}>
                                        {entry.titulo}
                                    </ThemedText>
                                    <TouchableOpacity onPress={() => onDelete(entry.id)} style={styles.deleteButton}>
                                        <Ionicons name="trash-outline" size={16} color={colors.textMuted} />
                                    </TouchableOpacity>
                                </View>
                                <ThemedText style={[styles.entryDesc, { color: colors.text }]}>
                                    {entry.descricao}
                                </ThemedText>
                            </Card>
                        </View>
                    </View>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    scrollContent: {
        paddingBottom: 96
    },
    timelineRow: {
        flexDirection: "row",
        width: "100%",
        marginBottom: 16
    },
    timelineLeftColumn: {
        width: 32,
        alignItems: "center",
        position: "relative"
    },
    timelineLine: {
        position: "absolute",
        top: 0,
        bottom: -24,
        width: 2
    },
    activeDotContainer: {
        position: "absolute",
        top: 20,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    activeDotOuter: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    activeDotInner: {
        width: 8,
        height: 8,
        borderRadius: 4
    },
    inactiveDot: {
        position: "absolute",
        top: 24,
        width: 8,
        height: 8,
        borderRadius: 4,
        opacity: 0.6
    },
    timelineRightColumn: {
        flex: 1,
        paddingLeft: 8
    },
    dateText: {
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 1.5,
        color: "#f1c40f",
        marginBottom: 6,
        textTransform: "uppercase"
    },
    cardContainer: {
        width: "100%"
    },
    cardContent: {
        padding: 16
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8
    },
    entryTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ECEDEE",
        letterSpacing: 1,
        textTransform: "uppercase",
        flex: 1
    },
    entryDesc: {
        fontSize: 14,
        lineHeight: 22,
        opacity: 0.85
    },
    deleteButton: {
        padding: 4,
        marginLeft: 8
    }
});
