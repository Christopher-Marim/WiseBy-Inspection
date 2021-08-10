import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerScreens } from "./Drawer";
import { AppScreens } from "./types";
import { CurrentOS } from "../screens/CurrentOS/Index";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name={'DrawerScreens'} component={DrawerScreens} />
      <Stack.Screen name={AppScreens.currentOs} component={CurrentOS} />
    </Stack.Navigator>
  );
}
