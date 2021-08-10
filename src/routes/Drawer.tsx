import React from "react";
import { createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer";

import { Home } from "../screens/Home";
import { AppScreens } from "./types";
import { DrawerContent } from "../components/DrawerContent";

const { Navigator, Screen } = createDrawerNavigator();

export const DrawerScreens = () => {
  return (
    <Navigator 
    screenOptions={{ headerShown: false }}
    drawerContent={(props:DrawerContentComponentProps) => <DrawerContent {...props}/>}
    >
      <Screen name={AppScreens.home} component={Home} />
    </Navigator>
  );
};
