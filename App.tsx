import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import Navigation from "./src/navigation";

export default function App() {
  // Assuming you don't need font loading logic, you can remove the state and useEffect hook

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
