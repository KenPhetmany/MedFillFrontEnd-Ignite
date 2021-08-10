import { PatientStoreModel } from "./patient-store"

test("can be created", () => {
  const instance = PatientStoreModel.create({})

  expect(instance).toBeTruthy()
})
