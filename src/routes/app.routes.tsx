import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
  );
}
