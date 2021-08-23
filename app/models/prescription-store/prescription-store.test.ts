import { PrescriptionStoreModel } from "./prescription-store"

test("can be created", () => {
  const instance = PrescriptionStoreModel.create({})

  expect(instance).toBeTruthy()
})
