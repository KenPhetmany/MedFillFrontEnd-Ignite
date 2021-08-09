import { PharmacyStoreModel } from "./pharmacy-store"

test("can be created", () => {
  const instance = PharmacyStoreModel.create({})

  expect(instance).toBeTruthy()
})
