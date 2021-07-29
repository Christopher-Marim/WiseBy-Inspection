import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Header() {
  const [filterActive, setFilterActive] = useState(false);

  
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="menu" size={35} color={theme.colors.titleColor} />
          </TouchableOpacity>
          <Text style={styles.title}>Lista de OS</Text>
        </View>
        <TouchableOpacity style={styles.button}>
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
          onPress={()=>setFilterActive(!filterActive)}
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
          onPress={()=>setFilterActive(!filterActive)}
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
