/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

export type ColorsType = {
  text: string;
  textMuted: string;
  background: string;
  backgroundLighter: string;
  icon: string;
  tabIconDefault: string;
  border: string;
  primary: string;
};

export const Themes: { light: ColorsType; dark: ColorsType } = {
  light: {
    text: "#11181C",
    textMuted: "#687076",
    background: "#e4eaf0",
    backgroundLighter: "#ffffff",
    border: "#E5E7EB",
    icon: "#687076",
    tabIconDefault: "#687076",
    primary: "#e0a906"
  },
  dark: {
    text: "#ECEDEE",
    textMuted: "#9BA1A6",
    background: "#0b0e19",
    backgroundLighter: "#171f36",
    border: "#334155",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    primary: "#c79605"
  }
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace"
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace"
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  }
});
