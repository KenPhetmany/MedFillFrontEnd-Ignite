import { PatientModel } from "./patient"

test("can be created", () => {
  const instance = PatientModel.create({})

  expect(instance).toBeTruthy()
})
