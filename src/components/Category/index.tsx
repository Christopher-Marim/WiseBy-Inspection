import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
};

export function Category({ title, icon: Icon, ...rest }: Props) {
  return (
    <RectButton {...rest} style={styles.container}>
      <View style={styles.wrapper}>
        <Icon width={35} height={35} />
      </View>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
    </RectButton>
  );
}
