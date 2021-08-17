import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { ReduxProvider } from "./src/hooks/state";
import { AuthProvider } from "./src/hooks/auth";
import { Routes } from "./src/routes";
import store from "./src/redux/store";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Provider store={store}>
          <ReduxProvider>
            <Routes />
          </ReduxProvider>
        </Provider>
      </AuthProvider>
    </NavigationContainer>
  );
}
