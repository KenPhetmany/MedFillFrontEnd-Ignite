import React from "react"
import { observer } from "mobx-react-lite"
import { View, VirtualizedList } from "react-native"
import { Screen, Text, Button } from "../../components"
import { useNavigation } from "@react-navigation/native"
 import { useStores } from "../../models"
import {ROOT, CARD} from "../../theme/coreStyles"
import { Patient } from "../../models/patient/patient"
import { decodeHTMLEntities } from "../../utils/html-decode"


export const HomeScreen = observer(function HomeScreen() {
  const {user, pharmacy, patientStore, order,} = useStores()
  const navigation = useNavigation()

  const renderPatient = ({ item }) => {
    const patient: Patient = item
    return (
      <View>
        <Text  text={decodeHTMLEntities(patient.firstName)} />
      </View>
    )
  }

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="Homescreen" />
      <View style={CARD}>
        <Text preset="bold" text="TODO: Add adding a patient feature and then listing them here"/>
        <View >
          <VirtualizedList  
          data={patientStore.patients}
          renderItem={renderPatient}
          />
        </View>
        <Button text="Add a patient" onPress={() => navigation.navigate("addAPatient")} />
      </View>
      <View style={CARD}>
        <Text preset="bold" text="TODO: Add geocode feature to find chemist"/>
        <Button text="Add a patient" onPress={() => navigation.navigate("findAChemist")} />
      </View>
      <View style={CARD}>
        <Text preset="bold" text="TODO: Add a single ordering screen for these features (they just change the state of order.type)"/>
        <Button text="Click and collect" 
        onPress={() => {
        order.setOrderType("click"); 
        navigation.navigate("order")}}
        />
        <Button text="Delivery"
        onPress={() => {
        order.setOrderType("delivery"); 
        navigation.navigate("order")}}
        />
        <Button text="Scan in-store"
        onPress={() => {
        order.setOrderType("scan"); 
        navigation.navigate("order")}}/>
      </View>
      <Button
      text="Logout"
          onPress={() => user.logout()}
        />
    </Screen>
  )
})
