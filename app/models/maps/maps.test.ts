import { MapsModel } from "./maps"

test("can be created", () => {
  const instance = MapsModel.create({})

  expect(instance).toBeTruthy()
})
