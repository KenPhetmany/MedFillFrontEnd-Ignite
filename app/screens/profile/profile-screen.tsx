import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { CARD, color } from "../../theme"
import { SettingsAccountDetailsUserScreen } from "../settings-account-details-user/settings-account-details-user-screen"

export const ProfileScreen = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen preset="scroll">
      <View style={CARD}>
        <Text preset="bold" text="Your  personal details" />
        <Button text="User Details" onPress={() => navigation.navigate("user")} />
      </View>
      <View style={CARD}>
        <Text preset="bold" text="Settings" />
        <Button text="Settings" onPress={() => navigation.navigate("settings")} />
      </View>
    </Screen>
  )
})
