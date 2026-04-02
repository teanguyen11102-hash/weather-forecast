var todaysWeather = {
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
}

console.log(`Today's high temperature: ${todaysWeather.temperature.high}`);
console.log(`Today's low temperature: ${todaysWeather.temperature.low}`);
console.log(`Today is ${todaysWeather.conditions}`);
console.log(`Today, the sun rose at ${todaysWeather.astronomy.sunrise}`);
console.log (`Today is ${todaysWeather.conditions}. The highest and lowest temperature are ${todaysWeather.temperature.high} and ${todaysWeather.temperature.low}. The sun rose at ${todaysWeather.astronomy.sunrise} and will set at ${todaysWeather.astronomy.sunset}`)
