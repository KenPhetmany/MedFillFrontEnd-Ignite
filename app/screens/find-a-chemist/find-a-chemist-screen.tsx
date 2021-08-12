/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { CARD, FORM } from "./../../theme/coreStyles"
import { SearchBarWithAutocomplete } from "../../components/search-bar-with-autocomplete/search-bar-with-autocomplete"
import MapView from "react-native-maps"
import { getLocation, geocodeLocationByName } from "./../../utils/location-service"

export const FindAChemistScreen = observer(function FindAChemistScreen() {
  // Pull in one of our MST stores
  const { pharmacy } = useStores()
  const [state, setState] = useState({ region: {} })

  const getInitialState = () => {
    getLocation().then((data) => {
      console.log(data)
      setState({
        region: {
          latitude: data.latitude,
          longitude: data.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        },
      })
    })
  }

  const getCoordsFromName = (loc) => {
    setState({
      region: {
        latitude: loc.lat,
        longitude: loc.lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      },
    })
  }

  const onMapRegionChange = (region) => {
    setState({ region })
  }

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen preset="scroll">
      <View style={CARD}>
        <View style={FORM}>
          <SearchBarWithAutocomplete notifyChange={(loc) => getCoordsFromName(loc)} />
          <Button
            text="Set as new Chemist"
            onPress={() => pharmacy.setPharmacy(pharmacy.address)}
          />
        </View>
      </View>
      <View style={CARD}>
        <Text text="Place the map here" />
      </View>
    </Screen>
  )
})
