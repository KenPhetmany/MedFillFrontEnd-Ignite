import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { CARD, color } from "../../theme"

export const SettingsScreen = observer(function SettingsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen preset="scroll">
      <View style={CARD}>
        <Text preset="bold" text="User Settings" />
        <Button text="Account Settings" onPress={() => navigation.navigate("patients")} />
        <Button text="Patient Settings" onPress={() => navigation.navigate("patients")} />
        <Button text="Address Settings" onPress={() => navigation.navigate("user")} />
        <Button text="Card Settings" onPress={() => navigation.navigate("user")} />
      </View>
    </Screen>
  )
})
