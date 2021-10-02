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
  const { user, patient, patientStore } = useStores()
  const navigation = useNavigation()

  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  )

  const renderPatient = ({ item }) => {
    return (
      <View>
        <Item title={item.firstName} />
      </View>
    )
  }

  return (
    <Screen preset="scroll">
      <View style={CARD}>
        <Text preset="bold" text="TODO: Add adding a patient feature and then listing them here" />
        <View>
          <FlatList
            keyExtractor={(item) => item.id}
            data={patientStore.patients}
            renderItem={renderPatient}
          />
        </View>
        <Button text="Add a patient" onPress={() => navigation.navigate("addPatient")} />
        <Button text="Check for patients" onPress={() => console.log(patientStore.patients)} />
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
        <Button text="Click and collect" />
        <Button text="Delivery" />
        <Button text="Scan in-store" />
      </View>
      <Button text="Logout" onPress={() => user.logout()} />
    </Screen>
  )
})
