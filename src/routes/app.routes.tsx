import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerScreens } from "./Drawer";
import { AppScreens } from "./types";
import { CurrentOS } from "../screens/CurrentOS/Index";
import {CompanyScreen} from "../screens/CompanyScreen/Company";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
    initialRouteName={AppScreens.company}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"DrawerScreens"} component={DrawerScreens} />
      <Stack.Screen name={AppScreens.currentOs} component={CurrentOS} />
      <Stack.Screen name={AppScreens.company} component={CompanyScreen} />
    </Stack.Navigator>
  );
}
