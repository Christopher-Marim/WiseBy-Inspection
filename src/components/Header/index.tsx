import React, { useState, useEffect } from "react";
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
import { removeOS, toggleFilterOs } from "../../redux/os-list/actions";

export function Header() {
  const [filterActive, setFilterActive] = useState(true);
  const [searchActive, setSearchActive] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleFilterOs("pendente"));
    
  }, []);

  const [textInputWidth] = useState(new Animated.Value(80));

  const searchWillShow = () => {
    Animated.timing(textInputWidth, {
      duration: 300,
      toValue:-50,
      useNativeDriver: true,
    }).start();
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
          <Animated.View style={[styles.textInput, { transform: [{ translateX: textInputWidth }] }]}>
            <TextInput style={[styles.textInput2]} />
          </Animated.View>
        )}
        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="search"
            size={30}
            color={theme.colors.titleColor}
            onPress={() => {setSearchActive(!searchActive), searchWillShow()}}
          />
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
