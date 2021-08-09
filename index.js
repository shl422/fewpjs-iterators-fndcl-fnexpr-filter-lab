// Code your solution here
const drivers = ['Joey', 'Ross', 'Chandler', 'Pheobe', 'Rachel', 'Monica']

function findMatching (drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers,string) {
    return drivers.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(drivers, string) {
    return drivers.filter( driver => driver.name === string)
} 