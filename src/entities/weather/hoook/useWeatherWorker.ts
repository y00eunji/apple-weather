import { useWeatherStore } from '@/app/store/weatherStore.ts';
import { weatherWorkerStore } from '@/app/store/workerStore.ts';
import { startWeatherWorker, stopWeatherWorker } from '@/entities/weather/workers/workerInstance.ts';

export const useWeatherWorker = () => {
  const setWeatherData = useWeatherStore(state => state.setWeather);
  const { isWorkerRunning, startWorker, stopWorker } = weatherWorkerStore.getState();

  if (!isWorkerRunning) {
    startWeatherWorker(setWeatherData);
    startWorker();
  } else {
    stopWeatherWorker();
    stopWorker();
  }
};
