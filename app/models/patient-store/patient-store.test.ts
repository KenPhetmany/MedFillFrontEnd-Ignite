import { PatientModel } from "./../patient/patient"

test("can be created", () => {
  const instance = PatientModel.create({
    id: 1,
    firstName: "Ken",
    lastName: "Phetmany",
  })

  expect(instance).toBeTruthy()
})
