import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerScreens } from "./Drawer";
import { AppScreens, RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name={'DrawerScreens'} component={DrawerScreens} />
    </Stack.Navigator>
  );
}
