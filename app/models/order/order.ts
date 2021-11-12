import { Instance, SnapshotOut, types, cast } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const OrderModel = types
  .model("Order")
  .props({
    orderType: types.maybe(types.string),
    orderPrescription: types.maybe(types.array(types.string)),
    orderUser: types.maybe(types.string),
    orderPharmacy: types.maybe(types.string),
    orderDate: types.maybe(types.string),
  })
  .actions((self) => ({
    setOrderType(value: string) {
      self.orderType = value
    },
    setOrderDate(value: string) {
      self.orderDate = value
    },
    setPharmacy(value: string) {
      self.orderPharmacy = value
    },
    setOrderPrescription(value: string[]) {
      self.orderPrescription = cast(value)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type OrderType = Instance<typeof OrderModel>
export interface Order extends OrderType {}
type OrderSnapshotType = SnapshotOut<typeof OrderModel>
export interface OrderSnapshot extends OrderSnapshotType {}
export const createOrderDefaultModel = () => types.optional(OrderModel, {})
