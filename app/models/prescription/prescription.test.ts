import { PrescriptionModel } from "./prescription"

test("can be created", () => {
  const instance = PrescriptionModel.create({})

  expect(instance).toBeTruthy()
})
