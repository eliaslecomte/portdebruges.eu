
export type currentWeatherResponse = {
  main: {
    feels_like: number,
    temp: number,
    temp_max: number,
    temp_min: number,
  },
  wind: {
    speed: number,
    gust: number,
    deg: number,
  },
  weather: Array<{
    description: string,
    icon: string,
  }>,
  sys: {
    sunrise: number,
    sunset: number,
  }
}

export async function getCurrentWeather() {
  const openWeatherApiKey = process.env.OPENWEATHER_API_KEY;
  if (typeof openWeatherApiKey !== 'string') {
    throw Error('Could not get OPENWEATHER_API_KEY from environment variables!');
  }
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=zeebrugge,be&units=metric&lang=nl&appid=${openWeatherApiKey}`)
  const dataResponse: currentWeatherResponse = await response.json();
  return dataResponse;
}

