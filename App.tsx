import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Loading } from "./src/components/Loading";
import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Routes from "./src/routes/route";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <StatusBar backgroundColor="transparent" translucent />
        {fontsLoaded ? <Routes /> : <Loading />}
    </View>
  );
}
