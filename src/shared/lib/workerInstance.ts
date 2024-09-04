import { useWorkerStore } from '@/shared/store/workerStore.ts';
import { TotalWeatherType } from '@/shared/types/weatherType.ts';

let weatherWorker: Worker | null = null;

// 워커 시작
export const startWeatherWorker = (setWeatherData: (_data: TotalWeatherType) => void) => {
  const { currentIndex, incrementIndex, isWorkerRunning, startWorker } = useWorkerStore.getState();

  if (!weatherWorker && !isWorkerRunning) {
    weatherWorker = new Worker('/src/shared/api/getWeatherDataWorker.ts', { type: 'module' }); // 1. 워커 생성

    // 메세지 수신 후 날씨 데이터 저장
    weatherWorker.onmessage = event => {
      setWeatherData(event.data as TotalWeatherType);
      incrementIndex();
    };

    weatherWorker.postMessage({ index: currentIndex }); // 워커에게 index 정보 전송
    startWorker();
  }
};

// 워커 중지
export const stopWeatherWorker = () => {
  const { stopWorker } = useWorkerStore.getState();

  if (weatherWorker) {
    weatherWorker.terminate();
    weatherWorker = null;
    stopWorker();
  }
};
