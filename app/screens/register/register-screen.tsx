import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text, Button, TextField } from "../../components"

 import { useNavigation } from "@react-navigation/native"
 import { useStores } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const RegisterScreen = observer(function RegisterScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const {userStore} = useStores();

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const navigation = useNavigation()

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="Register" />
      <TextField label="Please provide an email!"onChangeText={e => userStore.setEmail(e)} />
      <TextField label="Please enter a valid password" onChangeText={e => userStore.setPassword(e)} />
      <TextField label="Please confirm password" onChangeText={e => userStore.setPassword(e)} />
    
      <Button
      text="Go back to Login"
          onPress={() => navigation.navigate("login")}
        />
    </Screen>
  )
})
