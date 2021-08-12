import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { useRef, useEffect } from "react"
import { useStores } from "../../models"
import { Button } from "../button/button"

export interface SearchBarWithAutocompleteProps {
  notifyChange?: any
}

/**
 * Describe your component here
 */

export const SearchBarWithAutocomplete = observer(function SearchBarWithAutocomplete(
  props: SearchBarWithAutocompleteProps,
) {
  const { pharmacy } = useStores()
  const { notifyChange } = props
  const ref = useRef()

  useEffect(() => {
    pharmacy.setAddress(ref.current?.getAddressText())
  }, [])

  return (
    <View>
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder="Search for a pharmarcy"
        minLength={2}
        listViewDisplayed={false}
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          notifyChange(details.geometry.location)
        }}
        query={{
          key: "hello",
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
      />
    </View>
  )
})
