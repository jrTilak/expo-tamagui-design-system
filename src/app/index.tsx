import { AArrowDown } from "@tamagui/lucide-icons";
import { Button } from "@/registry/ui/button/src/button";
import { Container } from "@/registry/ui/container/src/container";
export default function Index() {
  return (
    <Container>
      <Button
        variant="secondary"
        size={"default"}
        iconAfter={<AArrowDown accessibilityRole="button" />}
      >
        Click me!
      </Button>
    </Container>
  );
}
