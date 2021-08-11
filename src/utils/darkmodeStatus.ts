
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function statusDarkMode() {
    const status = await AsyncStorage.getItem("darkModeStatus");
     
    return status=='1'?true:false
}