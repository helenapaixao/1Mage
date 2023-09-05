import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/SingIn";
import Home from '../screens/Home'
import TabRoutes from "./tab.routes"; 

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SingIn" component={RegisterScreen} />
      <Stack.Screen name="Main" component={TabRoutes} /> 
    </Stack.Navigator>
  );
};

export default AuthRoutes;
