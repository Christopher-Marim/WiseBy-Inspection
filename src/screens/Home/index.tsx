import React, {useEffect} from "react";
import { View, StatusBar } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/auth";
import { ListaOs } from "../../components/ListaDeOs";
import { theme } from "../../global/styles/theme";
import { AppState } from "../../redux/types";

export function Home() {
  const { user, signOut } = useAuth();
  
  const statusDarkMode = useSelector((state:AppState) => state.darkModeContextReducer)
  const themes = statusDarkMode? theme.colors_dark : theme.colors

  return (
    <View style={[styles.container, {backgroundColor: themes.background,}]}>
      <LinearGradient
        style={styles.header}
        start={[1, 0]}
        end={[1, 1.4]}
        colors={[themes.HeaderLinear1, themes.HeaderLinear2]}
      >
        <StatusBar
          barStyle={
            themes.HeaderLinear1 == "#FFFFFF"
              ? "dark-content"
              : "light-content"
          }
          backgroundColor={'transparent'}
          translucent
        />
        <Header></Header>
      </LinearGradient>
      <View style={styles.lista}>
        <ListaOs></ListaOs>
      </View>
    </View>
  );
}
