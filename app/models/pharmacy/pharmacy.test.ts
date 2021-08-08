import { PharmacyModel } from "./pharmacy"

test("can be created", () => {
  const instance = PharmacyModel.create({})

  expect(instance).toBeTruthy()
})
