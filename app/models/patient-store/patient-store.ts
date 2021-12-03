import { values } from "mobx"
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { PatientModel } from "./../patient/patient"
/**
 * Model description here for TypeScript hints.
 */
export const PatientStoreModel = types
  .model("PatientStore")
  .props({
    patients: types.optional(types.map(PatientModel), {}),
  })
  .actions((self) => ({
    addPatient(id, firstName, lastName) {
      self.patients.set(id, PatientModel.create({ firstName, lastName }))
    },
    getPatientCount() {
      return values(self.patients).length
    },
    getPatient() {
      return self.patients
    },
    clearPatients() {
      self.patients.clear()
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type PatientStoreType = Instance<typeof PatientStoreModel>
export interface PatientStore extends PatientStoreType {}
type PatientStoreSnapshotType = SnapshotOut<typeof PatientStoreModel>
export interface PatientStoreSnapshot extends PatientStoreSnapshotType {}
export const createPatientStoreDefaultModel = () => types.optional(PatientStoreModel, {})
