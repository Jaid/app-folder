import path from "path"

import fss from "@absolunet/fss"
import appdataPath from "appdata-path"
import {tail} from "lodash"

import filenamify from "./filenamify"

export default (...name) => {
  let folder
  if (name.length > 1) {
    folder = path.join(appdataPath(name[0] |> filenamify), ...tail(name).map(filenamify))
  } else {
    folder = appdataPath(name[0] |> filenamify)
  }
  fss.ensureDir(folder)
  return folder
}