import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import { Header, Button, Screen, TextField } from "../../components"
import { CARD, FORM, FORMBUTTONS } from "./../../theme/coreStyles"

export const LoginScreen = observer(function LoginScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const { user } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const navigation = useNavigation()

  return (
    <Screen preset="scroll">
      <Header headerText="Welcome to Medfill" />
      <View style={CARD}>
        <View style={FORM}>
          <TextField label="Please enter your email!" onChangeText={(e) => user.setEmail(e)} />
          <TextField
            label="Please enter your password!"
            onChangeText={(e) => user.setPassword(e)}
          />
        </View>
        <View style={FORMBUTTONS}>
          <Button text="Login" onPress={() => user.login()} />
          <Button text="Register a new Account" onPress={() => navigation.navigate("register")} />
        </View>
      </View>
    </Screen>
  )
})
