import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.titleColor,
        borderRadius:10,
        padding: 12,
        width:'100%',
        marginTop:10
    },
    text: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight:'bold',
        fontSize:18,
        color: theme.colors.white
    }
})