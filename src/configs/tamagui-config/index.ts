import { defaultConfig } from "@tamagui/config/v4";
import { createFont, createTamagui } from "tamagui";

import { vars } from "./vars";

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  themes: {
    ...defaultConfig.themes,
    light: {
      ...defaultConfig.themes.light,
      ...vars.colors.light,
      transparent: defaultConfig.themes.dark.colorTransparent,
    },
    dark: {
      ...defaultConfig.themes.dark,
      ...vars.colors.dark,
      transparent: defaultConfig.themes.dark.colorTransparent,
    },
  },
  tokens: {
    ...defaultConfig.tokens,
    radius: {
      0: 0,
      sm: 2,
      md: 4,
      lg: 8,
      full: 9999,
      true: 4,
    },
  },
  fonts: {
    outfit: createFont({
      family: "Outfit",
      face: {
        400: { normal: "Outfit" },
        500: { normal: "Outfit-Medium" },
        600: { normal: "Outfit-SemiBold" },
        700: { normal: "Outfit-Bold" },
        true: { normal: "Outfit" },
      },
      size: {
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        "2xl": 24,
        true: 16,
      },
      lineHeight: {
        base: 28,
        true: 28,
      },
    }),
  },
});

export { tamaguiConfig };

type CustomConfig = typeof tamaguiConfig;
declare module "tamagui" {
  interface TamaguiCustomConfig extends CustomConfig {}
}
