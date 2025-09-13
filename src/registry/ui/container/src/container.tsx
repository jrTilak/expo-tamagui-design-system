import type { ViewProps } from "tamagui";
import { View } from "tamagui";

type ContainerProps = ViewProps;

/**
 * A reusable Container with background and horizontal padding
 */
const Container = (props: ContainerProps) => {
  return <View bg="$background" flex={1} px={24} {...props} />;
};

export { Container };
