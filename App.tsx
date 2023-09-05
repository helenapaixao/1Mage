import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Loading } from "./src/components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-Medium": Poppins_600SemiBold,
    "Poppins-Bold": Poppins_800ExtraBold,
    "Poppins-700Bold": Poppins_700Bold,
  });
  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <StatusBar backgroundColor="transparent" translucent />
      <NavigationContainer>
        {fontsLoaded ? <AppRoutes /> : <Loading />}
      </NavigationContainer>
    </View>
  );
}

