import React from 'react';
import {View, Text} from 'react-native'
import { styles } from './styles';

type Props = {
    children: JSX.Element,
}

export function BlankContainer({children }:Props){
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}