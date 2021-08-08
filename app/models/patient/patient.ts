import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const PatientModel = types
  .model("Patient")
  .props({
    firstName: types.maybe(types.string),
    lastName: types.maybe(types.string),
    email: types.maybe(types.string),
    dob: types.maybe(types.Date),
    sex: types.maybe(types.string),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    addPatient: async () => {
      console.log("add stuff")
    }  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type PatientType = Instance<typeof PatientModel>
export interface Patient extends PatientType {}
type PatientSnapshotType = SnapshotOut<typeof PatientModel>
export interface PatientSnapshot extends PatientSnapshotType {}
export const createPatientDefaultModel = () => types.optional(PatientModel, {})
