import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

type Props = TouchableOpacityProps & {
  nameIcon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  sizeIcon: number;
  color: string;
  text: string;
};

export function ButtonIconText({
  nameIcon,
  sizeIcon,
  color,
  text,
  ...rest
}: Props) {
  return (
    <TouchableOpacity {...rest}>
      <MaterialCommunityIcons name={nameIcon} size={sizeIcon} color={color} />
      <Text style={{ fontWeight: "bold", color: "gray" }}>{text}</Text>
    </TouchableOpacity>
  );
}
