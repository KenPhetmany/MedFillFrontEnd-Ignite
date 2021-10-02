import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { PrescriptionModel } from "./../prescription/prescription"

/**
 * Model description here for TypeScript hints.
 */
export const PrescriptionStoreModel = types
  .model("PrescriptionStore")
  .props({
    prescriptions: types.optional(types.map(PrescriptionModel), {}),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    testAdd(id: string, name: string) {
      self.prescriptions.set(
        id,
        PrescriptionModel.create({
          name: name,
        }),
      )
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type PrescriptionStoreType = Instance<typeof PrescriptionStoreModel>
export interface PrescriptionStore extends PrescriptionStoreType {}
type PrescriptionStoreSnapshotType = SnapshotOut<typeof PrescriptionStoreModel>
export interface PrescriptionStoreSnapshot extends PrescriptionStoreSnapshotType {}
export const createPrescriptionStoreDefaultModel = () => types.optional(PrescriptionStoreModel, {})
