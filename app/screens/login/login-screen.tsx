import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
 import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import {
  BulletItem,
  Button,
  Header,
  Text,
  Screen,
  Wallpaper,
  AutoImage as Image,
} from "../../components"



const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const LoginScreen = observer(function LoginScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const navigation = useNavigation()

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="Login" />
      <Button
      text="Register a new Account"
          onPress={() => navigation.navigate("register")}
        />
    </Screen>
  )
})
