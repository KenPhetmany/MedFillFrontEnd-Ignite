import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

export const ProfileScreen = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen preset="scroll">
      <Button text="User Details" onPress={() => navigation.navigate("user")} />
      <Button text="Card Details" onPress={() => navigation.navigate("user")} />
      <Button text="Settings" onPress={() => navigation.navigate("settings")} />
    </Screen>
  )
})
