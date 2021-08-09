import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { PatientModel } from './../patient/patient';

/**
 * Model description here for TypeScript hints.
 */
export const PatientStoreModel = types
  .model("PatientStore")
  .props({
    patients: types.map(PatientModel),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    addPatient(id, fName, lName, email, dob, sex ) {
      self.patients.set(id, PatientModel.create({ firstName: fName, lastName: lName, email: email, dob: dob, sex: sex }))
  }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type PatientStoreType = Instance<typeof PatientStoreModel>
export interface PatientStore extends PatientStoreType {}
type PatientStoreSnapshotType = SnapshotOut<typeof PatientStoreModel>
export interface PatientStoreSnapshot extends PatientStoreSnapshotType {}
export const createPatientStoreDefaultModel = () => types.optional(PatientStoreModel, {})
