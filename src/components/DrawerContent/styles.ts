import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        marginTop: -5,
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: theme.colors.primary,
        paddingVertical: 20,
        justifyContent: "center",
        width: "100%",
    },
    title: {
        fontSize: 18,
        width: "100%",
        fontWeight: "bold",
        marginTop: 3,
        color: "white",
    },
    caption: {
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 2,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    email: {
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 14,
        color: "white",
    },
    wraperSwitch: { 
        flexDirection: "row", 
        paddingHorizontal: 15, 
        alignItems: "center" 
    },
});