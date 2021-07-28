import React from "react";
import {FontAwesome} from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity} from 'react-native'
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Header() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>COMPRAR</Text>
            <TouchableOpacity style={styles.button}>
                <FontAwesome name="question-circle-o" size={30} color={theme.colors.heading}/>
            </TouchableOpacity>
        </View>
    );
}