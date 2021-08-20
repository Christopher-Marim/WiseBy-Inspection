import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Checkbox } from "react-native-paper";
import { theme } from "../../global/styles/theme";
import { Equipamento } from "../../redux/types";
import {styles} from './styles'

type Props = {
    item:Equipamento,
    itemSelecionado(item: Equipamento):void
}

export function EquipamentoItem({item, itemSelecionado}:Props) {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
    onPress={() => {
        setChecked(!checked);
        
        if(checked==false)
            itemSelecionado(item)
        
        
      }}
     style={[styles.button, {
        backgroundColor:checked ? theme.colors.background : 'white'}]}>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
      />
      <Text>{item?.nomeEquipamento}</Text>
    </TouchableOpacity>
  );
}
