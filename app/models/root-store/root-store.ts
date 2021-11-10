import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CharacterStoreModel } from "../character-store/character-store"
import { UserModel } from "../user/user"
import { PatientModel } from "./../patient/patient"
import { PatientStoreModel } from "./../patient-store/patient-store"
import { OrderModel } from "./../order/order"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  characterStore: types.optional(CharacterStoreModel, {} as any),
  user: types.optional(UserModel, {} as any ),
  patient: types.optional(PatientModel, {} as any ),
  patientStore: types.optional(PatientStoreModel, {} as any ),
  order: types.optional(OrderModel, {} as any ),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
