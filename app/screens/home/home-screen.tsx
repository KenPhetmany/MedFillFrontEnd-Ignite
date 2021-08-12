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
  const { user, patient, patientStore, pharmacy } = useStores()
  const navigation = useNavigation()
  const savedPharmacyTitle = `Your current pharmacy is: ${pharmacy.savedPharmacy}`
  const renderPatient = ({ item }) => {
    const patient: Patient = item
    return (
      <View key={item.id}>
        <Button key={patient.id} text="IM testingf" />
      </View>
    )
  }

  return (
    <Screen preset="scroll">
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
        <Text preset="bold" text={savedPharmacyTitle} />
        <Button text="Find your chemist" onPress={() => navigation.navigate("findAChemist")} />
      </View>
      <View style={CARD}>
        <Text
          preset="bold"
          text="TODO: Add a single ordering screen for these features (they just change the state of order.type)"
        />
        <Button text="Click and collect" />
        <Button text="Delivery" />
        <Button text="Scan in-store" />
      </View>
      <Button text="Logout" onPress={() => user.logout()} />
    </Screen>
  )
})
