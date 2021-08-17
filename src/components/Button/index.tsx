import React from "react";
import {View, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'

import { styles} from './styles'

type Props = TouchableOpacityProps & {
    name: string;
    color:string;
    fontColor: string;
}

export function Button({name, color, fontColor, ...rest}:Props) {
    return(
        <TouchableOpacity
        {...rest}
        style={[styles.button, {backgroundColor:color}]}
        >
            <Text style={[styles.buttonText, {color:fontColor}]}>{name}</Text>
        </TouchableOpacity>
    )
}
