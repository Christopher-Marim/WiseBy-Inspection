import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Search() {
  return (
    <TouchableOpacity style={styles.button}>
      <TextInput
        style={styles.textInput}
        placeholder={"Pesquisar produtos..."}
      ></TextInput>
      <Feather
        name="search"
        size={20}
        color={theme.colors.secondary}
      />
    </TouchableOpacity>
  );
}
