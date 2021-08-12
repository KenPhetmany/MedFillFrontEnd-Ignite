/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, MyMapView, Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { CARD, FORM } from "./../../theme/coreStyles"
import { SearchBarWithAutocomplete } from "../../components/search-bar-with-autocomplete/search-bar-with-autocomplete"
import MapView from "react-native-maps"
import { getLocation, geocodeLocationByName } from "./../../utils/location-service"

export const FindAChemistScreen = observer(function FindAChemistScreen() {
  // Pull in one of our MST stores
  const { pharmacy } = useStores()

  const [state, setState] = useState({
    region: {
      latitude: 51.5079145,
      longitude: -0.0899163,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    },
  })

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
  // TODO: Have to fix updating the new address, it only saves after app refreshes (see SearchBarWithAutoComp
  // lete component )
  return (
    <Screen preset="scroll">
      <View style={CARD}>
        <View style={FORM}>
          <SearchBarWithAutocomplete notifyChange={(loc) => getCoordsFromName(loc)} />

          <Button text="Set as new Chemist" onPress={() => console.log(pharmacy.address)} />
        </View>
      </View>
      <View style={CARD}>
        <MyMapView region={state.region} onRegionChange={(reg) => onMapRegionChange(reg)} />
      </View>
    </Screen>
  )
})
