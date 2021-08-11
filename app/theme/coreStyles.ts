import { ViewStyle } from "react-native"
import { color } from "../theme"

  
export const CARD: ViewStyle = {
        backgroundColor: color.palette.darkerPink,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
          borderRadius: 4,

      }
      
export const FORM: ViewStyle = {
        alignItems: 'stretch',
        justifyContent:'center',
        marginHorizontal: 10
      }
      
export  const FORMBUTTONS: ViewStyle = {
        flex: 2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-around'
      }

