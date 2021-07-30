
import React from 'react';
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";
import { NavigationContainer} from '@react-navigation/native'
import store from './src/state/store';
import {Provider} from 'react-redux'


import {AuthProvider } from "./src/hooks/auth";
import { theme } from './src/global/styles/theme';

export default function App() {
  return (
    <NavigationContainer>
    <AuthProvider>
    <Provider store = {store}>
    <StatusBar
        barStyle='dark-content'
        backgroundColor={theme.colors.secondary}
        translucent
      />
      <Routes/>
      </Provider>
    </AuthProvider>
    </NavigationContainer>
  );
}

