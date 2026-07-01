/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { ColorsType, Themes } from "@/constants/theme";
import { useColorScheme } from "react-native";

export function useThemeColors(props: { light?: ColorsType; dark?: ColorsType } = {}) {
    const theme = useColorScheme() ?? "light";
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Themes[theme];
    }
}
