import React from "react";
import { Image as TImage, ImageProps, View, GetThemeValueForKey } from "tamagui";

type Props = ImageProps & {
  container?: boolean;
};

const Image = ({
  rounded = "$md",
  bg = "$muted",
  container = false,
  height,
  width,
  ...props
}: Props) => {
  if (container) {
    return (
      <View
        justify="center"
        items="center"
        rounded={rounded}
        bg={bg}
        overflow="hidden"
        p={"$2"}
        height={height as GetThemeValueForKey<"height">}
        width={width as GetThemeValueForKey<"width">}
      >
        <TImage rounded={rounded} bg={bg} height={"100%"} width={"100%"} {...props} />
      </View>
    );
  }

  return <TImage rounded={rounded} height={height} width={width} bg={bg} {...props} />;
};

export { Image };
