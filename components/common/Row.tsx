import { StyleSheet, View } from "react-native";

export default function Row({
    items,
    gap = 0,
    ...props
}: { items: React.ReactNode[]; gap: number } & React.ComponentProps<typeof View>) {
    return (
        <View {...props} style={[style.row, { paddingHorizontal: gap / 2 }]}>
            {items.map((item, index) => (
                <View
                    key={index}
                    style={{
                        flex: 1,
                        paddingHorizontal: gap / 2,
                        paddingLeft: index === 0 ? 0 : gap / 2,
                        paddingRight: index === items.length - 1 ? 0 : gap / 2
                    }}
                >
                    {item}
                </View>
            ))}
        </View>
    );
}

const style = StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    item: {
        flex: 1
    }
});
