import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { PharmacyModel, PharmacySnapshot } from ".."

/**
 * Model description here for TypeScript hints.
 */
export const PharmacyStoreModel = types
  .model("PharmacyStore")
  .props({
    pharmacies: types.optional(types.array(PharmacyModel), []),
  })
  .actions((self) => ({
    addPharmacy: async () =>{
      console.log("Hello")
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type PharmacyStoreType = Instance<typeof PharmacyStoreModel>
export interface PharmacyStore extends PharmacyStoreType {}
type PharmacyStoreSnapshotType = SnapshotOut<typeof PharmacyStoreModel>
export interface PharmacyStoreSnapshot extends PharmacyStoreSnapshotType {}
export const createPharmacyStoreDefaultModel = () => types.optional(PharmacyStoreModel, {})
