# Expo Tamagui Design System

This is my personal collection of **Tamagui-based UI components** for my personal projects. The design system is built to follow a similar pattern as **shadcn/ui**, with the goal of making components as reusable and flexible as possible.

## Features

- Reusable Tamagui components
- Theme support (light & dark)
- Built with Expo + Tamagui
- Follows a consistent design pattern for easy scaling

## Getting Started

### 1. Create an Expo app

```bash
pnpm create expo-app
```

### 2. Setup Tamagui

Follow the official Tamagui setup guide:
[https://tamagui.dev/docs/intro/setup](https://tamagui.dev/docs/intro/setup)

### 3. Add Configs

Copy the configs from:

```
src/configs/tamagui-configs/*
```

to your project.

### 4. Add the Provider

Wrap your app layout with the Tamagui provider from:

```
/src/providers/tamagui-provider.tsx
```

Example:

```tsx
import "react-native-reanimated";
import {
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  useFonts as useOutfitFonts,
} from "@expo-google-fonts/outfit";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TamaguiProvider } from "@/providers/tamagui-provider";
import { Stack } from "@/registry/ui/stack";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [outfitLoaded] = useOutfitFonts({
    Outfit: Outfit_400Regular,
    "Outfit-Medium": Outfit_500Medium,
    "Outfit-SemiBold": Outfit_600SemiBold,
    "Outfit-Bold": Outfit_700Bold,
  });

  useEffect(() => {
    if (outfitLoaded) {
      SplashScreen.hideAsync();
    }
  }, [outfitLoaded]);

  if (!outfitLoaded) {
    return null;
  }
  return (
    <TamaguiProvider>
      <Stack />
    </TamaguiProvider>
  );
}
```

### 5. You are good to go!

Start using the prebuilt components in your layouts and build your UI consistently.

## Notes

- This design system is for **personal use**, you can use it if you want. 😄
- Components are designed for **maximum reusability**.
- Inspired by **shadcn/ui** pattern and best practices in Tamagui.

---

Happy coding! 🚀
