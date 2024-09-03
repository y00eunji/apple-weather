import { DailyWeatherType } from '@/entities/weather/types/weatherType.ts';

export const getDailyWeather = async (city: string | undefined): Promise<DailyWeatherType | null> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}&lang=kr&units=metric`,
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
