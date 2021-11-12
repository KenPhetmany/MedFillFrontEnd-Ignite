import React from "react"
import { observer } from "mobx-react-lite"
import { View, VirtualizedList, FlatList } from "react-native"
import { Screen, Text, Button } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { CARD } from "../../theme/coreStyles"
import { Patient } from "../../models/patient/patient"
import { values } from "mobx"

export const HomeScreen = observer(function HomeScreen() {
  const { user, patientStore, order } = useStores()
  const navigation = useNavigation()

  const renderPatient = ({ item }) => {
    const patient: Patient = item
    return (
      <View key={item.id}>
        <Button key={patient.id} text="IM testingf" />
      </View>
    )
  }

  const orderClick = () => {
    order.setOrderType("Click and Collect")
    console.log(order.orderType)
    navigation.navigate("shoppingCart")
  }
  const orderDelivery = () => {
    order.setOrderType("Delivery")
    console.log(order.orderType)
    navigation.navigate("shoppingCart")
  }
  const orderInstore = () => {
    // order.setOrderType("Instore")
    console.log(order.orderPrescription)
    // navigation.navigate("shoppingCart")
  }

  const setInitialValues = () => {
    user.setFirstName("Ken")
    user.setLastName("Phetmany")
    user.setLastName("Phetmany")
    user.setPhoneNumber("0132441234")
    user.setEmail("kphetmany@gmail.com")
    user.setAddress(" 15 Broadway, Ultimo NSW 2007")
    order.setOrderPrescription(["Panadol", "Fisiocrem", "Valdaxon"])
  }

  return (
    <Screen preset="scroll">
      {setInitialValues()}
      <View style={CARD}>
        <Text preset="bold" text="TODO: Add adding a patient feature and then listing them here" />
        <View>
          <VirtualizedList
            keyExtractor={(item) => {
              return item.id
            }}
            data={patientStore.patients}
            renderItem={renderPatient}
            getItemCount={patientStore.getPatientCount}
            getItem={patientStore.getPatient}
          />
        </View>
        <Button text="Add a patient" onPress={() => navigation.navigate("addAPatient")} />
      </View>
      <View style={CARD}>
        <Text preset="bold" text="TODO: Add geocode feature to find chemist" />
        <Button text="Find your chemist" onPress={() => navigation.navigate("findAChemist")} />
      </View>
      <View style={CARD}>
        <Text
          preset="bold"
          text="TODO: Add a single ordering screen for these features (they just change the state of order.type)"
        />
        <Button text="Click and collect" onPress={(e) => orderClick()} />
        <Button text="Delivery" onPress={(e) => orderDelivery()} />
        <Button text="Scan in-store" onPress={(e) => orderInstore()} />
      </View>
      <Button text="Logout" onPress={() => user.logout()} />
    </Screen>
  )
})
