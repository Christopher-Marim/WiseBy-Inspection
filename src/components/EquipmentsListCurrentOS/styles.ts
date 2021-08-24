import {StyleSheet} from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container:{
    flex:1,
     width: '100%'
    },
    containerEquipamentos: { justifyContent: "center", alignItems: "center" },
    wrapperTitulo:{
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      buttonModal:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      textButton:{ fontWeight: "bold", color: "gray" },
      wrapperEquipments:{
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-between",
        alignItems: "center",
      },
      buttonAdd:{
          flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }
})