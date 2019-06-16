import path from "path"

import fss from "@absolunet/fss"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: appFolder} = indexModule

it("should run", () => {
  const id = `${_PKG_NAME}-test`
  const folder = appFolder("Jaid", id)
  expect(folder).toMatch(id)
  expect(fss.pathExists(folder)).toBeTruthy()
})