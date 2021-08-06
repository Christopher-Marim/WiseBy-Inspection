import React from "react";
import AnimatedLoader from "lottie-react-native";
import { View } from "react-native";

import { styles } from "./styles";

export function Loader() {
  return (
    <View style={styles.loader}>
      <AnimatedLoader
        loop
        autoPlay
        source={require("../../assets/70704-spinner.json")}
        style={styles.lottie}
        speed={1}
      ></AnimatedLoader>
    </View>
  );
}
