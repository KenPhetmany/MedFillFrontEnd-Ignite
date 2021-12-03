import React from "react"
import { observer } from "mobx-react-lite"
import { Screen, Header, TextField, Button } from "../../components"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { CARD, FORM } from "./../../theme/coreStyles"
import { getSnapshot } from "mobx-state-tree"

export const AddAPatientScreen = observer(function AddAPatientScreen() {
  // Pull in one of our MST stores
  const { patient, patientStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen preset="scroll">
      <Header headerText="Fill in form to add patient" />
      <View style={CARD}>
        <View style={FORM}>
          <TextField
            label="Please enter your first name!"
            onChangeText={(e) => patient.setFirstName(e)}
          />
          <TextField
            label="Please enter your last name !"
            onChangeText={(e) => patient.setLastName(e)}
          />
        </View>
        <Button
          text="Add Patient"
          onPress={() => {
            patientStore.addPatient(Math.random(), patient.firstName, patient.lastName)
          }}
        />
      </View>
      <Button text="Clear Patients" onPress={() => console.log(patientStore.clearPatients())} />
      <Button text="Go back" onPress={() => navigation.navigate("home")} />
    </Screen>
  )
})
