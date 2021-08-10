import React, { useState, useEffect, useRef, useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
  BackHandler,
  Alert,
} from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

import {
  useNavigation,
  DrawerActions,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import { useDispatch } from "react-redux";

import {
  removeOS,
  searchFilterOs,
  toggleFilterOs,
} from "../../redux/os-list/actions";

export function Header() {
  const [textInputWidth] = useState(new Animated.Value(0));
  const [filterActive, setFilterActive] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState(``);

  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const textInputRef = useRef<TextInput>(null);

  //sempre que renderizado componente é feito o filtro com as OS pendentes
  useEffect(() => {
    dispatch(toggleFilterOs(false));
  }, []);

  // Aniamção para a barra de Pesquisa
  const searchWillShow = () => {
    Animated.timing(textInputWidth, {
      duration: 300,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  //função para focar no TextInput
  const getFocusInput = () => {
    if (textInputRef && textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  //Se o botão de voltar do celular for pressionado, caso a barra de pequisal esteja ativa irá fechar ela,
  // caso não, aparecerá um alerta de confimação para sair do app

   function onBackPress() {
   
      if (route.name === "home") {
        if (searchActive) {
          setSearchActive(false);
          return true;
        } else {
          Alert.alert("Espere", "Deseja mesmo sair da aplicação?", [
            {
              text: "Cancelar",
              onPress: () => null,
              style: "cancel",
            },
            { text: "Sim", onPress: () => BackHandler.exitApp() },
          ]);
          return true;
        }
      }
    
  }
  
  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress",  onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [onBackPress])
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.wrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Ionicons name="menu" size={35} color={theme.colors.titleColor} />
          </TouchableOpacity>
          <Text style={styles.title}>Lista de OS</Text>
        </View>
        {searchActive && (
          <Animated.View
            style={[styles.textInput, { opacity: textInputWidth }]}
          >
            <TextInput
              ref={textInputRef}
              style={[styles.textInput2]}
              placeholder={"Filtro..."}
              onChangeText={(text) => {
                setSearchText(text);
                if (filterActive) {
                  dispatch(searchFilterOs(text, false));
                } else {
                  dispatch(searchFilterOs(text, true));
                }
              }}
            />
          </Animated.View>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSearchActive(!searchActive), searchWillShow();

            setTimeout(() => {
              getFocusInput();
            }, 150);
            if (searchActive) {
              if (filterActive) {
                dispatch(toggleFilterOs(false));
              } else {
                dispatch(toggleFilterOs(true));
              }
            }
          }}
        >
          <Ionicons name="search" size={30} color={theme.colors.titleColor} />
        </TouchableOpacity>
      </View>
      <View style={styles.filterButtons}>
        <TouchableOpacity
          style={[
            styles.buttonFilter,
            filterActive && {
              borderBottomWidth: 2,
              borderBottomColor: theme.colors.blue,
            },
          ]}
          onPress={() => {
            filterActive ? null : setFilterActive(!filterActive),
              dispatch(toggleFilterOs(false));
          }}
        >
          <Text
            style={[
              styles.textButtonFilter,
              filterActive && { color: theme.colors.blue },
            ]}
          >
            PENDENTES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonFilter,
            !filterActive && {
              borderBottomWidth: 2,
              borderBottomColor: theme.colors.blue,
            },
          ]}
          onPress={() => {
            !filterActive ? null : setFilterActive(!filterActive),
              dispatch(toggleFilterOs(true));
          }}
        >
          <Text
            style={[
              styles.textButtonFilter,
              !filterActive && { color: theme.colors.blue },
            ]}
          >
            FINALIZADOS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
