import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { CARD } from "./../../theme/coreStyles"

export const SettingsAccountDetailsUserScreen = observer(
  function SettingsAccountDetailsUserScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen preset="scroll">
        <View style={CARD}>
          <Text preset="bold">Your Name:</Text>
        </View>
        <View style={CARD}>
          <Text preset="bold">Your Email:</Text>
        </View>
        <View style={CARD}>
          <Text preset="bold">Your Phone Number:</Text>
        </View>
        <View style={CARD}>
          <Text preset="bold">Your Home Address:</Text>
          <Text preset="bold">Your Preferred Phamarcitical Address:</Text>
        </View>
      </Screen>
    )
  },
)
