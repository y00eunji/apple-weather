import { startWeatherWorker, stopWeatherWorker } from '@/entities/weather/workers/workerInstance.ts';
import { useWeatherStore } from '@/shared/store/weatherStore.ts';
import { weatherWorkerStore } from '@/shared/store/workerStore.ts';

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
