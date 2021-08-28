import React, { useEffect, useState } from "react";
import { View, StyleSheet, Linking, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  List,
  Switch,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";
import { AppScreens } from "../../routes/types";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { changeDarkMode } from "../../redux/darkmode/actions";
import { LinearGradient } from "expo-linear-gradient";

export function DrawerContent(props: DrawerContentComponentProps) {
  const [nome, setnome] = useState("Usuário");
  const [loaderVisiBle, setLoaderVisible] = useState(false);
  const [snackVisible, setSnackVisible] = useState(false);
  const [nomeEmpresa, setnomeEmpresa] = useState();
  const [darkmode, setdarkmode] = useState(false);
  const [UnitIdEmpresa, setUnitIdEmpresa] = useState();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const themes = darkmode?theme.colors_dark:theme.colors

  useEffect(() => {
    getDarkmode();
  }, []);
  const dispatch = useDispatch();

  async function getDarkmode() {
    try {
      const statusAux = await AsyncStorage.getItem("darkModeStatus");
      console.log(statusAux)
      const status = statusAux == "1" ? true : false
      setIsSwitchOn(status);
      setdarkmode(status)
      dispatch(changeDarkMode(status))
    } catch (error) {
      alert(error);
    }
  }

  async function setDarkmode(status: boolean) {
   
    try {
      if(status ==true){
        await AsyncStorage.setItem("darkModeStatus", '1');
      
      } else {
        await AsyncStorage.setItem("darkModeStatus", '0');

      }
    } catch (error) {
      alert(error);
    }
  }

  async function onToggleSwitch() {
    await setDarkmode(!isSwitchOn);
    getDarkmode();
  }

  const { signOut, user } = useAuth();

  function GetdataVeiculesAndOccurrences() {}

  const getNomeEmpresa = async () => {};

  const navigation = useNavigation();

  return (
    <LinearGradient 
        style={{ flex: 1, backgroundColor:themes.primary}}
        start={[1, 0]}
        end={[1, 1.4]}
        colors={[themes.HeaderLinear1, themes.HeaderLinear2]}
    >

      <DrawerContentScrollView {...props}>
        <View style={[styles.drawerContent, {backgroundColor:'transparent',}]}>
          <TouchableOpacity onPress={() => {props.navigation.navigate(AppScreens.profile)}}>
            <View style={[styles.userInfoSection, {backgroundColor:darkmode?'transparent':theme.colors_dark.primary}]}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar.Image
                  source={require("../../assets/iconWhite.png")}
                  size={80}
                />
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  <Title numberOfLines={1} style={styles.title}>
                    {user?.nome}
                  </Title>
                  <Caption numberOfLines={1} style={styles.email}>
                    {user?.login}
                  </Caption>
                  {/*<Caption style={styles.email}>{nomeEmpresa}</Caption>*/}
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <Drawer.Section style={styles.drawerSection}>
            <List.AccordionGroup>
              <List.Item
                left={() => (
                  <List.Icon
                    icon={({ color, size }) => (
                      <MaterialCommunityIcons
                        name="newspaper-variant-outline"
                        color={themes.text}
                        size={size}
                      />
                    )}
                  />
                )}
                title="Notificações"
                style={{borderBottomWidth:0.2, borderColor:'white'}}
                titleStyle={{ fontSize: 16, color: themes.text }}
                onPress={() => {}}
              />

              <List.Item
                left={() => (
                  <List.Icon
                    icon={({ color, size }) => (
                      <MaterialCommunityIcons
                        name="format-list-text"
                        color={themes.text}
                        size={size}
                      />
                    )}
                  />
                )}
                style={{borderBottomWidth:0.2, borderColor:'white'}}
                title="Lista de OS"
                titleStyle={{ fontSize: 16, color: themes.text }}
                onPress={() => {
                  props.navigation.navigate("home");
                }}
              />
              <List.Item
                left={() => (
                  <List.Icon
                    icon={({ color, size }) => (
                      <FontAwesome name="cog" color={themes.text} size={size} />
                    )}
                  />
                )}
                title="Configurações"
                style={{borderBottomWidth:0.2, borderColor:'white'}}
                titleStyle={{ fontSize: 16, color: themes.text }}
                onPress={() => {
                }}
              />
              <List.Item
                left={() => (
                  <List.Icon
                    icon={({ color, size }) => (
                      <MaterialCommunityIcons
                        name="database-sync"
                        color={themes.text}
                        size={size}
                      />
                    )}
                  />
                )}
                title="Sincronizar dados"
                style={{borderBottomWidth:0.2, borderColor:'white'}}
                titleStyle={{ fontSize: 16, color: themes.text }}
                onPress={() => {
                  setLoaderVisible(true);
                  GetdataVeiculesAndOccurrences();
                }}
              />
              <List.Item
                left={() => (
                  <List.Icon
                    icon={({ color, size }) => (
                      <MaterialCommunityIcons
                        name="account-check-outline"
                        color={themes.text}
                        size={size}
                      />
                    )}
                  />
                )}
                title="Suporte ETM"
                style={{borderBottomWidth:0.2, borderColor:'white'}}

                titleStyle={{ fontSize: 16, color: themes.text }}
                onPress={() => {
                  Linking.openURL("https://www.etm.srv.br");
                }}
              />
            </List.AccordionGroup>
          </Drawer.Section>
          <View style={styles.wraperSwitch}>
            <Switch
              color={themes.text}
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
            ></Switch>
            <Text style={{color:themes.text}}>   DarkMode</Text>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={themes.text}
              size={size}
            />
          )}
          labelStyle={{color:themes.text}}
          label="Sair"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </LinearGradient>
  );
}
