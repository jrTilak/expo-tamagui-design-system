import { TamaguiProvider as TamaguiProviderBase } from "tamagui";
import { ReactNode } from "react";
import { tamaguiConfig } from "@/configs/tamagui-config";

const TamaguiProvider = ({ children }: { children: ReactNode }) => (
  <TamaguiProviderBase config={tamaguiConfig}>{children}</TamaguiProviderBase>
);

export { TamaguiProvider };
