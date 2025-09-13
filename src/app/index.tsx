import { Text, View } from "react-native";
import { AArrowDown } from "@tamagui/lucide-icons";
import { Button } from "@/registry/ui/button/src/button";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="secondary"
        size={"default"}
        iconAfter={<AArrowDown accessibilityRole="button" />}
      >
        Click me!
      </Button>
    </View>
  );
}
