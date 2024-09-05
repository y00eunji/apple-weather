import { CurrentMock, DailyMock, HourlyMock } from '@/shared/constants/mockData.ts';

// import { getCurrentWeather } from '@/entities/current/api/getCurrentWeather.ts';
// import { getDailyWeather } from '@/entities/daily/api/getDayWeather.ts';
// import { getHourlyWeather } from '@/entities/hourly/api/getHourWeather.ts';

export const getWeatherData = async (city: string | undefined) => {
  // const [currentData, hourlyData, dailyData] = await Promise.all([
  //   getCurrentWeather(city),
  //   getHourlyWeather(city),
  //   getDailyWeather(city),
  // ]);
  //
  // return {
  //   current: currentData,
  //   hourly: hourlyData,
  //   daily: dailyData,
  // };

  return {
    current: CurrentMock,
    hourly: HourlyMock,
    daily: DailyMock,
  };
};
