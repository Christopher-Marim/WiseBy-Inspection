import React from "react";
import { View, } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import {useDispatch, useSelector} from 'react-redux'
import { useAuth } from "../../hooks/auth";
import { ListaOs } from "../../components/ListaDeOs";

export function Home() {
  
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header></Header>
      </View>
      <View style={styles.lista}>
        <ListaOs></ListaOs>
      </View>
    </View>
  );
}
