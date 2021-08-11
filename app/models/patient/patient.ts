import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const PatientModel = types
  .model("Patient")
  .props({
    id: types.maybe(types.string),
    firstName: types.maybe(types.string),
    lastName: types.maybe(types.string),
  })
  .actions((self) => ({
    setFirstName(value: string) {
      self.firstName = value
    },
    setLastName(value: string) {
      self.lastName = value
    },
    setEmail(value: string) {
      self.email = value
    },
    setDob(value: Date) {
      self.dob = value
    },
    setSex(value: string) {
      self.sex = value
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type PatientType = Instance<typeof PatientModel>
export interface Patient extends PatientType {}
type PatientSnapshotType = SnapshotOut<typeof PatientModel>
export interface PatientSnapshot extends PatientSnapshotType {}
export const createPatientDefaultModel = () => types.optional(PatientModel, {})
