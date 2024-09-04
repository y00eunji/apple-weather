import { getCurrentWeather } from '@/shared/api/getCurrentWeather.ts';
import { getDailyWeather } from '@/shared/api/getDayWeather.ts';
import { getHourlyWeather } from '@/shared/api/getHourWeather.ts';

// import { CurrentMock, DailyMock, HourlyMock } from '@/shared/api/mockData.ts';

export const getWeatherData = async (city: string | undefined) => {
  const [currentData, hourlyData, dailyData] = await Promise.all([
    getCurrentWeather(city),
    getHourlyWeather(city),
    getDailyWeather(city),
  ]);

  return {
    current: currentData,
    hourly: hourlyData,
    daily: dailyData,
  };

  // return {
  //   current: CurrentMock,
  //   hourly: HourlyMock,
  //   daily: DailyMock,
  // };
};
