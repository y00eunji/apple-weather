import { CurrentWeatherType } from '@/entities/weather/types/weatherType.ts';

export const getCurrentWeather = async (city: string | undefined): Promise<CurrentWeatherType | null> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}&units=metric&lang=kr`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};
