import React from 'react';
import {View, Text} from 'react-native'
import { styles } from './styles';

type Props = {
    text: string
}

export function SubTitle({text}:Props){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}