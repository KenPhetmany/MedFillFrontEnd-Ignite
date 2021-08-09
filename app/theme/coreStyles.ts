import { ViewStyle } from "react-native"
import { color } from "../theme"

export const ROOT: ViewStyle = {
        backgroundColor: color.palette.black,
        flex: 1,
    }

  
export const CARD: ViewStyle = {
        backgroundColor: color.palette.darkerPink,
        margin: 10
      }
      
export const FORM: ViewStyle = {
        alignItems: 'center',
        justifyContent:'center',
      }
      
export  const FORMBUTTONS: ViewStyle = {
        flex: 2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-around'
      }

