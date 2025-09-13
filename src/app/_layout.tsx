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
