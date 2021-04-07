const findMatching = (drivers, name) => {
    return drivers.filter(driverName => driverName.toUpperCase() === name.toUpperCase())

}

const fuzzyMatch = (drivers, nameLetters) => {
    return drivers.filter(nameStart => nameStart.substring( 0 , nameLetters.length) === nameLetters)
}
fuzzyMatch()

function matchName (drivers, name) {
    return drivers.filter(driverObj => driverObj.name === name)
}
matchName()


