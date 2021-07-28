
import React from 'react';
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";
import { NavigationContainer} from '@react-navigation/native'


import {AuthProvider } from "./src/hooks/auth";

export default function App() {
  return (
    <NavigationContainer>
    <AuthProvider>
    <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes/>
    </AuthProvider>
    </NavigationContainer>
  );
}

