import { HourlyWeatherType } from '@/shared/types/weatherType.ts';

export const getHourlyWeather = async (city: string | undefined): Promise<HourlyWeatherType | null> => {
  try {
    const response = await fetch(
      `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&cnt=24&appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}&units=metric&lang=kr`,
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
