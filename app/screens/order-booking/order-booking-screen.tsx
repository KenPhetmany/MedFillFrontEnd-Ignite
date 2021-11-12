import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import DatePicker from "react-native-date-picker"
import { CARD, FORM } from "./../../theme/coreStyles"

export const OrderBookingScreen = observer(function OrderBookingScreen() {
  const { order, user } = useStores()
  const navigation = useNavigation()
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const orderConfirm = () => {
    order.setOrderDate(date.toString())
    order.setPharmacy(user.assignedPharmacy)
    navigation.navigate("orderDetails")
  }

  return (
    <Screen preset="scroll">
      <View style={CARD}>
        <View style={FORM}>
          <TextField
            label="Your currently assigned Pharmacy:"
            value={user.assignedPharmacy}
            editable={false}
          ></TextField>
          <Button
            text="Change Pharmacy?"
            onPress={() => navigation.navigate("findAChemist")}
          ></Button>
        </View>
      </View>
      <View style={CARD}>
        <View style={FORM}>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
          <TextField label="Current booking:" value={date.toString()} editable={false}></TextField>
          <Button text="Set A booking" onPress={() => setOpen(true)} />
        </View>
      </View>
      <Button text="Proceed to Confirmation" onPress={() => orderConfirm()} />
    </Screen>
  )
})
