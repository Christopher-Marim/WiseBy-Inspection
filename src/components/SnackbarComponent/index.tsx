import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

type Props = {
    closeSnack():void,
    visible: boolean, 
    text:String,
}

export function SnackbarComponent({visible, text, closeSnack}:Props )  {
  return (
    <View >
      <Snackbar
        visible={visible}
        onDismiss={()=>closeSnack()}
        action={{
          label: 'Ok',
          onPress: () => {
            // Do something
          },
        }}>
        {text}
      </Snackbar>
    </View>
  );
};


