import React from "react"
import { observer } from "mobx-react-lite"
import { FlatList, View } from "react-native"
import { Screen, Text, Button, TextField, Header } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import { CARD, FORM } from "./../../theme/coreStyles"

export const OrderDetailsScreen = observer(function OrderDetailsScreen() {
  const { order, user } = useStores()

  const navigation = useNavigation()
  return (
    <Screen preset="scroll">
      <View style={CARD}>
        <View style={FORM}>
          <Text text="Your shopping cart" />
          <FlatList
            data={[{ key: "Panadol" }, { key: "Fisiocrem" }, { key: "Valdaxon" }]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
          <TextField
            label="Your Full Name:"
            value={user.firstName + " " + user.lastName}
            editable={false}
          />
          <TextField label="Your Mobile Number:" value={user.phoneNumber} editable={false} />
          <TextField label="Your Your Email address:" value={user.email} editable={false} />
          <TextField label="Assigned Pharmacy:" value={order.orderPharmacy} editable={false} />
          <TextField label="Collection Date" value={order.orderDate} editable={false} />
          <Button text="Confirm Order!" onPress={() => navigation.navigate("home")} />
        </View>
      </View>
    </Screen>
  )
})
