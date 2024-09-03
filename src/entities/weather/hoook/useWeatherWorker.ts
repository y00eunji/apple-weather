import { useWeatherStore } from '@/app/store/weatherStore.ts';
import { startWeatherWorker } from '@/entities/weather/workers/workerInstance.ts';

import { useEffect } from 'react';

export const useWeatherWorker = () => {
  const setWeatherData = useWeatherStore(state => state.setWeather);

  useEffect(() => {
    startWeatherWorker(setWeatherData);

    return () => {
      // 웹 워커를 종료하고 싶다면 이 부분에서 종료 호출하기!
      // stopWeatherWorker();
    };
  }, [setWeatherData]);
};
