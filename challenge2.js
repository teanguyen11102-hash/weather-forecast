var weatherForecast = [
 {
  day: "Today",
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
 },
 {
  day: "Saturday",
  temperature: {
    high: 50,
    low: 29
   },
  conditions: "cloudy",
  astronomy: {
    sunrise: "7:44 AM",
    sunset: "5:08 PM"
  }
 },
 {
  day: "Sunday",
  temperature: {
    high: 47,
    low: 35
   },
  conditions: "chance of rain",
  astronomy: {
    sunrise: "7:45 AM",
    sunset: "5:07 PM"
  }
 }
]
//FUNCTION: to find the condition of a specific day
function findConditions (day) {
    for (let item of weatherForecast ) {
        if (item.day === day) {
            console.log(`${day} is ${item.conditions}`)
        }
    }
}

//FUNCTION: to find the high temperature of a specific day

function findHighTemp(day) {
    for (let item of weatherForecast) {
        if (item.day === day) {
            console.log(`High temperature ${day} is ${item.temperature.high}`)
        }
    }
}

//FUNCTION: to find the sunrise time of a specific day

function findSunriseTime(day) {
    for (let item of weatherForecast) {
        if (item.day === day) {
            console.log(`On ${day}, sun rose at ${item.astronomy.sunrise}`)
        }
    }
}

//FUNCTION: to find the sunset time of a specific day

function findSunsetTime(day) {
    for (let item of weatherForecast) {
        if (item.day === day) {
            console.log(`On ${day}, sun will set at ${item.astronomy.sunset}`)
        }
    }
}

function printWeatherForcast(day) {
    for (let item of weatherForecast) {
        if (item.day === day) {
        console.log(`The high on ${day} will be ${item.temperature.high} and the low will be ${item.temperature.low}. We're predicting a chance of ${item.conditions}. The sun will rise at ${item.astronomy.sunrise} and set at ${item.astronomy.sunset}`)
    }
}
}

//executive
findConditions("Today");
findHighTemp("Saturday");
findSunriseTime("Saturday");
findConditions("Sunday");
findSunsetTime("Sunday");
printWeatherForcast("Sunday")