import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const PharmacyModel = types
  .model("Pharmacy")
  .props({
    address: types.maybe(types.string),
    name: types.maybe(types.string),
    savedPharmacy: types.maybe(types.string),
  })
  .actions((self) => ({
    setPharmacy: (value: string) => {
      self.savedPharmacy = value
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type PharmacyType = Instance<typeof PharmacyModel>
export interface Pharmacy extends PharmacyType {}
type PharmacySnapshotType = SnapshotOut<typeof PharmacyModel>
export interface PharmacySnapshot extends PharmacySnapshotType {}
export const createPharmacyDefaultModel = () => types.optional(PharmacyModel, {})
