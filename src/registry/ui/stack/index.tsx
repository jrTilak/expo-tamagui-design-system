import { Stack as StackRouter } from "expo-router";
import React from "react";

/**
 * Expo Router Stack component with custom screen options
 */
const Stack = () => {
  return <StackRouter screenOptions={{ headerShown: false }} />;
};

export { Stack };
