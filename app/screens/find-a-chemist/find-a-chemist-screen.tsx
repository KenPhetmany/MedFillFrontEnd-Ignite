import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { ROOT } from "../../theme/"
import { CARD, FORM } from "./../../theme/coreStyles"

export const FindAChemistScreen = observer(function FindAChemistScreen() {
  // Pull in one of our MST stores
  const { user } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen preset="scroll">
      <View style={CARD}>
        <View style={FORM}>
          <TextField label="enter address" onChangeText={(e) => user.setPharmacy(e)} />
          <Button text="Set as main Pharmacy" onPress={() => navigation.goBack()} />
        </View>
        <View></View>
      </View>
    </Screen>
  )
})
