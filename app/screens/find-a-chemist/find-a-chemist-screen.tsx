import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
 import { useStores } from "../../models"
import {ROOT} from "../../theme/"

export const FindAChemistScreen = observer(function FindAChemistScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const { pharmacyStore } = useStores();


  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <View>
        <TextField label="enter address"/>
        <View>
          
        </View>
      </View>
          </Screen>
  )
})
