import React from "react"
import { observer } from "mobx-react-lite"
import { Screen, Header, TextField } from "../../components"
import { ViewStyle, View } from "react-native"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { ROOT, CARD, FORM } from './../../theme/coreStyles';




export const AddAPatientScreen = observer(function AddAPatientScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Header headerText="Fill in form to add patient"/>
      <View style={CARD}>
        <View style={FORM}>
      <TextField label="Please enter your first name!"   />
      <TextField label="Please enter your last name !" />
      <TextField label="Please enter your email !" />
      <TextField label="Please enter your date of birth !" />
      <TextField label="Please enter your sex !" />
        </View>
        </View>
    </Screen>
  )
})
