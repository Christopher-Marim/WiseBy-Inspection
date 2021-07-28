import NetInfo from '@react-native-community/netinfo';

export async function netInfo(){
  const result = await NetInfo.fetch().then(state => {
        if (state.isConnected?.valueOf() == true) {
         return true
        } else {
          return false
        }
      });
      return result
}