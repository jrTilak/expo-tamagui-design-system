import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

type Props = React.ComponentProps<typeof ExpoStatusBar>;

const StatusBar = (props: Props) => {
  return <ExpoStatusBar {...props} />;
};

export { StatusBar };
