import React from "react";
import { View, } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import {useDispatch, useSelector} from 'react-redux'
import { useAuth } from "../../hooks/auth";
import { ListaOs } from "../../components/ListaDeOs";

export function Home() {
  const data2 = [
    {
      id: 1,
      image:
        "https://abglt.org.br/wp-content/uploads/2020/10/wallpaper-pc1-scaled.jpg",
    },
    {
      id: 2,
      image:
        "https://www.showmetech.com.br/wp-content/uploads//2017/01/outrun_wallpaper__10_-2017-01-25-0516.jpg",
    },
    {
      id: 3,
      image: "https://images8.alphacoders.com/105/1054256.jpg",
    },
    {
      id: 4,
      image:
        "https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg",
    },
  ];

  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

 // const result = useSelector((state)=> state.osList.nomeOs)

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
