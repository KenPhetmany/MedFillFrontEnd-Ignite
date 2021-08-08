import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CharacterStoreModel } from "../character-store/character-store"
import { UserModel } from "../user/user"
import { PharmacyModel } from './../pharmacy/pharmacy';
import { PatientModel } from './../patient/patient';
import { PharmacyStoreModel } from "..";
import { PatientStoreModel } from './../patient-store/patient-store';

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  characterStore: types.optional(CharacterStoreModel, {} as any),
  user: types.optional(UserModel, {} as any ),
  pharmacy: types.optional(PharmacyModel, {} as any ),
  pharmacyStore: types.optional(PharmacyStoreModel, {} as any ),
  patient: types.optional(PatientModel, {} as any ),
  patientStore: types.optional(PatientStoreModel, {} as any ),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
