import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
 import { useNavigation } from "@react-navigation/native"
 import { useStores } from "../../models"
import { color } from "../../theme"
import {
  Header,
  BulletItem,
  Button,
  Text,
  Screen,
  TextField,
} from "../../components"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.pink,
}

const CARD: ViewStyle = {
  backgroundColor: color.palette.darkerPink,
  margin: 10
}

const FORM: ViewStyle = {
  alignItems: 'center',
  justifyContent:'center',
}

const FORMBUTTONS: ViewStyle = {
  flex: 2,
  flexDirection:'row',
  alignItems:'center',
  justifyContent: 'space-around'
}


export const LoginScreen = observer(function LoginScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const { userStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const navigation = useNavigation()

  return (
    <Screen style={ROOT} preset="scroll">
      <Header headerText="Welcome to Medfill"/>
      <View style={CARD}>
        <View style={FORM}>
      <TextField label="Please enter your email!"  onChangeText={e => userStore.setEmail(e)} />
      <TextField label="Please enter your password!" onChangeText={e => userStore.setPassword(e)} />
        </View>
        <View style={FORMBUTTONS}>
      <Button
      text="Login"
      onPress={() => userStore.login()}
      />
      <Button
      text="Register a new Account"
      onPress={() => navigation.navigate("register")}
      />
      </View>
    </View>
    </Screen>
  )
})
