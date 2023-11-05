export function areGameVersionsEqual(oldVersion: string, newVersion: string) {
  // check with regex if oldVersion has format "x.y.z" or throw
  const oldVersionRegex = /^(\d+)\.(\d+)\.(\d+)$/

  if (!oldVersionRegex.test(oldVersion))
    throw new Error(`Old version "${oldVersion}" has invalid format`)

  // check with regex if newVersion has format "x.y.z" or throw
  const newVersionRegex = /^(\d+)\.(\d+)\.(\d+)$/

  if (!newVersionRegex.test(newVersion))
    throw new Error(`New version "${newVersion}" has invalid format`)

  // split oldVersion into array of numbers
  const [oldMajor, oldMinor] = oldVersion.split('.').map(Number)

  // split newVersion into array of numbers
  const [newMajor, newMinor] = newVersion.split('.').map(Number)

  // check if oldMajor is equal to newMajor and oldMinor is equal to newMinor
  return oldMajor === newMajor && oldMinor === newMinor
}
