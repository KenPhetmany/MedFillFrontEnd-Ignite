import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const PrescriptionModel = types
  .model("Prescription")
  .props({
    id: types.maybe(types.string),
    name: types.maybe(types.string),
    status: types.maybe(types.string),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type PrescriptionType = Instance<typeof PrescriptionModel>
export interface Prescription extends PrescriptionType {}
type PrescriptionSnapshotType = SnapshotOut<typeof PrescriptionModel>
export interface PrescriptionSnapshot extends PrescriptionSnapshotType {}
export const createPrescriptionDefaultModel = () => types.optional(PrescriptionModel, {})
