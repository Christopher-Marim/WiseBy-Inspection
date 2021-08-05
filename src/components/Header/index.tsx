import React, { useState, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

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
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    dispatch(toggleFilterOs("pendente"));
  }, []);

  const searchWillShow = () => {
    Animated.timing(textInputWidth, {
      duration: 300,
      toValue: 1,
      useNativeDriver: true,
    }).start();

  };

  const getFocusInput = () => {
    if (textInputRef && textInputRef.current) {
      textInputRef.current.focus();
      console.log("DALE");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.wrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(removeOS(0))}
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
              placeholder={'Filtro...'}
              onChangeText={(text) => {
                setSearchText(text);
                if (filterActive) {
                  dispatch(searchFilterOs(text, "pendente"));
                } else {
                  dispatch(searchFilterOs(text, "em andamento"));
                }
              }}
            />
          </Animated.View>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSearchActive(!searchActive), searchWillShow();

            setTimeout(()=>{getFocusInput()},150)
            if (searchActive) {
              if (filterActive) {
                dispatch(toggleFilterOs("pendente"));
              } else {
                dispatch(toggleFilterOs("Em andamento"));
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
              dispatch(toggleFilterOs("pendente"));
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
              dispatch(toggleFilterOs("em andamento"));
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
