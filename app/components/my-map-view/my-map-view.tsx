/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import MapView, { Marker, Region } from "react-native-maps"
import { Text } from "../"

export interface MyMapViewProps {
  /**
   * An optional style override useful for padding & margin.
   */

  region?: Region

  onRegionChange?: any

  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const MyMapView = observer(function MyMapView(props: MyMapViewProps) {
  const { region, onRegionChange, style } = props
  return (
    <MapView
      style={{ width: 300, height: 450, margin: 10, alignContent: "center" }}
      region={region}
      showsUserLocation={true}
      onRegionChange={(reg) => onRegionChange(reg)}
    >
      <Marker coordinate={region} />
    </MapView>
  )
})
