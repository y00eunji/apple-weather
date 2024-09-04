import { startWeatherWorker, stopWeatherWorker } from '@/entities/weather/workers/workerInstance.ts';
import { useWeatherStore } from '@/shared/store/weatherStore.ts';
import { weatherWorkerStore } from '@/shared/store/workerStore.ts';

import { CiPause1, CiPlay1 } from 'react-icons/ci';

export default function ControlWorkerButton() {
  const setWeatherData = useWeatherStore(state => state.setWeather);
  const { isWorkerRunning, startWorker, stopWorker, currentIndex } = weatherWorkerStore(state => ({
    isWorkerRunning: state.isWorkerRunning,
    startWorker: state.startWorker,
    stopWorker: state.stopWorker,
    currentIndex: state.currentIndex,
  }));

  const handleStartButton = () => {
    if (!isWorkerRunning) {
      startWeatherWorker(setWeatherData);
      startWorker();
    } else {
      stopWeatherWorker();
      stopWorker();
    }

    // 상태 변경 후 상태 확인 : 상태 업데이트를 확인할 수 있도록 리렌더링 기다리기
    const updatedState = weatherWorkerStore.getState().isWorkerRunning;
    console.log('Updated isWorkerRunning:', updatedState, currentIndex);
  };

  return (
    <div className="w-[90%] h-[20px] flex justify-end">
      {isWorkerRunning ? (
        <CiPlay1 onClick={handleStartButton} size={27} />
      ) : (
        <CiPause1 onClick={handleStartButton} size={27} />
      )}
    </div>
  );
}
