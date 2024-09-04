import { TotalWeatherType } from '@/entities/weather/types/weatherType.ts';
import { startWeatherWorker } from '@/entities/weather/workers/workerInstance.ts';

const useInitWorker = (setWeatherData: (_data: TotalWeatherType) => void) => {
  startWeatherWorker(setWeatherData);
};

export default useInitWorker;
