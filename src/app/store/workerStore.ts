import { TotalWeatherType } from '@/entities/weather/types/weatherType.ts';

import { create } from 'zustand';

interface WorkerStore {
  isWorkerRunning: boolean;
  startWorker: (_setWeatherData: (_data: TotalWeatherType) => void) => void;
  stopWorker: () => void;
}

let weatherWorker: Worker | null = null;

export const useWorkerStore = create<WorkerStore>(set => ({
  isWorkerRunning: false,
  startWorker: (setWeatherData: (_data: TotalWeatherType) => void) => {
    if (!weatherWorker) {
      weatherWorker = new Worker('/src/entities/weather/workers/getWeatherDataWorker.ts', { type: 'module' });
      weatherWorker.postMessage({});

      weatherWorker.onmessage = event => {
        setWeatherData(event.data as TotalWeatherType);
      };
    }
    set({ isWorkerRunning: true });
  },
  stopWorker: () => {
    if (weatherWorker) {
      weatherWorker.terminate();
      weatherWorker = null;
    }
    set({ isWorkerRunning: false });
  },
}));
