import React from "react"
import { observer } from "mobx-react-lite"
import { Screen, Header, TextField, Button } from "../../components"
import {  View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { ROOT, CARD, FORM } from './../../theme/coreStyles';

export const AddAPatientScreen = observer(function AddAPatientScreen() {
  // Pull in one of our MST stores
   const { patient  } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Header headerText="Fill in form to add patient"/>
      <View style={CARD}>
        <View style={FORM}>
      <TextField label="Please enter your first name!" onChangeText={e => patient.setFirstName(e)}  />
      <TextField label="Please enter your last name !" onChangeText={e => patient.setLastName(e)} />
      <TextField label="Please enter your email !" onChangeText={e => patient.setLastName(e)} />
      <TextField label="Please enter your date of birth !"/>
      <TextField label="Please enter your sex !" onChangeText={e => patient.setSex(e)} />
        </View>
      </View>
      <Button
      text="Add Patient"
      onPress={() => patient.addPatient()}
      />
      <Button
      text="Go back"
      onPress={() => navigation.navigate("home")}
      />
    </Screen>
  )
})
