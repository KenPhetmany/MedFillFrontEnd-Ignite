import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Header, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { CARD, color, FORM } from "../../theme"
import { FlatList } from "react-native-gesture-handler"

export const ShoppingCartScreen = observer(function ShoppingCartScreen() {
  // Pull in one of our MST stores
  const { order } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen preset="scroll">
      <View style={CARD}>
        <View style={FORM}>
          <Text>This is your Order:</Text>
          <FlatList
            data={[{ key: "Panadol" }, { key: "Fisiocrem" }, { key: "Valdaxon" }]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </View>
      </View>
      <Button text="Proceed to Booking" onPress={() => navigation.navigate("orderBooking")} />
    </Screen>
  )
})
