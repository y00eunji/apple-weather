import { TotalWeatherType } from '@/entities/weather/types/weatherType.ts';

let weatherWorker: Worker | null = null;

export const startWeatherWorker = (setWeatherData: (_data: TotalWeatherType) => void) => {
  if (!weatherWorker) {
    weatherWorker = new Worker('/src/entities/weather/workers/getWeatherDataWorker.ts', { type: 'module' });
    weatherWorker.postMessage({});

    weatherWorker.onmessage = event => {
      setWeatherData(event.data as TotalWeatherType);
    };
  }
};

// export const stopWeatherWorker = () => {
//   if (weatherWorker) {
//     weatherWorker.terminate();
//     weatherWorker = null;
//   }
// };
