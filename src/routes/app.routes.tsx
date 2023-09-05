import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingIn from "../screens/SingIn";
import Login from "../screens/Login";

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SingIn"
        component={SingIn}
        options={{
          headerBackTitleVisible: false,
          title: "Nova refeição",
          headerStyle: {
            backgroundColor: "#DDDEDF",
          },
          headerTintColor: "#1B1D1E",
         
        }}
      />
    </Navigator>
  );
};
