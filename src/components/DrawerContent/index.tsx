import React, { useEffect, useState } from "react";
import { View, StyleSheet, Linking, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  List,
  Switch,
} from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";

export function DrawerContent(props: any) {
  const [nome, setnome] = useState("Usuário");
  const [loaderVisiBle, setLoaderVisible] = useState(false);
  const [snackVisible, setSnackVisible] = useState(false);
  const [nomeEmpresa, setnomeEmpresa] = useState();
  const [email, setemail] = useState();
  const [UnitIdEmpresa, setUnitIdEmpresa] = useState();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const { signOut } = useAuth();

  function GetdataVeiculesAndOccurrences() {}

  const getNomeEmpresa = async () => {};

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          >
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar.Image
                  source={require("../../assets/iconWhite.png")}
                  size={80}
                />
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  <Title numberOfLines={1} style={styles.title}>
                    {nome}
                  </Title>
                  <Caption style={styles.email}>{email}</Caption>
                  <Caption style={styles.email}>{nomeEmpresa}</Caption>
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
                        color={color}
                        size={size}
                      />
                    )}
                  />
                )}
                title="Notificações"
                titleStyle={{ fontSize: 16 }}
                onPress={() => {
                  props.navigation.navigate("NotificationScreen");
                }}
              />

              <List.Item
                left={() => (
                  <List.Icon
                    icon={({ color, size }) => (
                      <MaterialCommunityIcons
                        name="format-list-text"
                        color={color}
                        size={size}
                      />
                    )}
                  />
                )}
                title="Lista de OS"
                titleStyle={{ fontSize: 16 }}
                onPress={() => {
                  props.navigation.navigate("JourneyList");
                }}
              />

              {UnitIdEmpresa != 3 && <View></View>}

              <List.Accordion
                title="Configurações"
                titleStyle={{ fontSize: 16 }}
                id="4"
                style={{ backgroundColor: "white" }}
                left={() => (
                  <List.Icon
                    icon={({ color, size }) => (
                      <FontAwesome name="cog" color={color} size={size} />
                    )}
                  />
                )}
              >
                <List.Item
                  title="Perfil"
                  titleStyle={{ fontSize: 16 }}
                  onPress={() => {
                    props.navigation.navigate("Profile");
                  }}
                />
              </List.Accordion>
              <List.Item
                left={() => (
                  <List.Icon
                    icon={({ color, size }) => (
                      <MaterialCommunityIcons
                        name="database-sync"
                        color={color}
                        size={size}
                      />
                    )}
                  />
                )}
                title="Sincronizar dados"
                titleStyle={{ fontSize: 16 }}
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
                        color={color}
                        size={size}
                      />
                    )}
                  />
                )}
                title="Suporte ETM"
                titleStyle={{ fontSize: 16 }}
                onPress={() => {
                  Linking.openURL("https://www.etm.srv.br");
                }}
              />
            </List.AccordionGroup>
          </Drawer.Section>
          <View style={styles.wraperSwitch}>
            <Switch color={theme.colors.primary} value={isSwitchOn} onValueChange={onToggleSwitch}></Switch>
            <Text>DarkMode</Text>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sair"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

