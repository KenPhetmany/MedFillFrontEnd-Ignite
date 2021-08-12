import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { Region } from "react-native-maps"

/**
 * Model description here for TypeScript hints.
 */
export const MapsModel = types
  .model("Maps")
  .props({
    latitude: types.maybe(types.number),
    longitude: types.maybe(types.number),
    latitudeDelta: types.maybe(types.number),
    longitudeDelta: types.maybe(types.number),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setRegion(data: Region) {
      self.latitude = data.latitude
      self.longitude = data.longitude
      self.latitudeDelta = data.latitudeDelta
      self.longitudeDelta = data.longitudeDelta
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type MapsType = Instance<typeof MapsModel>
export interface Maps extends MapsType {}
type MapsSnapshotType = SnapshotOut<typeof MapsModel>
export interface MapsSnapshot extends MapsSnapshotType {}
export const createMapsDefaultModel = () => types.optional(MapsModel, {})
