import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Header, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { CARD, FORMBUTTONS } from "../../theme/coreStyles"

export const PrescriptionsScreen = observer(function PrescriptionsScreen() {
  const { prescription, prescriptionStore } = useStores()
  const navigation = useNavigation()

  const fillData = () => {
    console.log("Filling in data")
    prescriptionStore.testAdd("1", "abc")
    prescriptionStore.testAdd("2", "abcd")
    prescriptionStore.testAdd("3", "abcde")
    prescriptionStore.testAdd("4", "abcefg")
    console.log(prescriptionStore)
  }
  return (
    <Screen preset="scroll">
      <View style={CARD}>
        <Text preset="header" text="Here are your prescriptions" />
        <Button onPress={() => fillData()} text="fill data" />
      </View>
      <View style={CARD}>
        <View style={FORMBUTTONS}>
          <Button text="Current Prescriptions" />
          <Button text="Past Prescriptions" />
        </View>
      </View>
    </Screen>
  )
})
