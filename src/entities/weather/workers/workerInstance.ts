import { weatherWorkerStore } from '@/app/store/workerStore.ts';
import { TotalWeatherType } from '@/entities/weather/types/weatherType.ts';

let weatherWorker: Worker | null = null;

export const startWeatherWorker = (setWeatherData: (_data: TotalWeatherType) => void) => {
  const { currentIndex, incrementIndex, isWorkerRunning, startWorker } = weatherWorkerStore.getState();

  if (!weatherWorker && !isWorkerRunning) {
    weatherWorker = new Worker('/src/entities/weather/workers/getWeatherDataWorker.ts', { type: 'module' });

    weatherWorker.onmessage = event => {
      setWeatherData(event.data as TotalWeatherType);
      incrementIndex(); // 인덱스를 증가시킴
    };

    // 기존 인덱스를 워커에 전달
    weatherWorker.postMessage({ action: 'start', index: currentIndex });
    startWorker(); // 워커 실행 상태로 변경
  }
};

export const stopWeatherWorker = () => {
  const { stopWorker } = weatherWorkerStore.getState();

  if (weatherWorker) {
    weatherWorker.terminate();
    weatherWorker = null;
    stopWorker(); // 워커 중지 상태로 변경
  }
};
