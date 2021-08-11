import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { Screen, Text, Button, TextField, Header } from "../../components"

 import { useNavigation } from "@react-navigation/native"
 import { useStores } from "../../models"
import { color } from "../../theme"
import { CARD, FORM } from './../../theme/coreStyles';


export const RegisterScreen = observer(function RegisterScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const {user} = useStores();

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const navigation = useNavigation()

  return (
    <Screen preset="scroll">
      <Header headerText="Please Register"/>
      <View style={CARD}>
        <View style={FORM}>
      <TextField label="Please provide an email!"onChangeText={e => user.setEmail(e)} />
      <TextField label="Please enter a valid password" onChangeText={e => user.setPassword(e)} />
      <TextField label="Please confirm password" onChangeText={e => user.setPassword(e)} />
        </View>
      <Button
      text="Go back to Login"
      onPress={() => navigation.navigate("login")}
      />
      </View>
    </Screen>
  )
})
