import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const UserModel = types
  .model("User")
  .props({
    email: types.maybe(types.string),
    password: types.maybe(types.string),
    status: types.maybe(types.string),
  })
  .actions((self) => ({
    setEmail(newEmail: string) {
      self.email = newEmail
  },
  setPassword(newPassword: string) {
    self.password = newPassword
},
    login: flow(function* login(creds){
      self.status = "PENDING"
      try {
       console.log(self.email); 
       console.log(self.password);
       self.status="LOGGED_IN";
      } catch (e){
        console.log(e); 
        self.status="FAILED"
      }
    }),
    register: flow(function* register(creds){
      self.status = "PENDING"
      try {
       console.log(self.email); 
       console.log(self.password);
       self.status="LOGGED_IN";
      } catch (e){
        console.log(e); 
        self.status="FAILED"
      }
    }),
    logout: flow(function* logout() {
      try {
        console.log(self.email);
        self.status="LOGGED_OUT";
      } catch (e) {
        console.error(e)
        self.status="FAILED"
      }
    })
    
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type UserType = Instance<typeof UserModel>
export interface User extends UserType {}
type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType {}
export const createUserDefaultModel = () => types.optional(UserModel, {})
