import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../screens/Home";
import { AppScreens } from "./types";
import { DrawerContent } from "../components/DrawerContent";

type RootStackParamList = {
  home: undefined;
};

const { Navigator, Screen } = createDrawerNavigator<RootStackParamList>();

export const DrawerScreens = () => {
  return (
    <Navigator 
    screenOptions={{ headerShown: false }}
    drawerContent={(props:any) => <DrawerContent {...props}/>}
    >
      <Screen name={AppScreens.home} component={Home} />
    </Navigator>
  );
};
