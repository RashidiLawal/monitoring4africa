import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable} from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Onboarding from "./src/screens/onboarding/onboarding";
export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView >
        <Onboarding />     
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  );
}

