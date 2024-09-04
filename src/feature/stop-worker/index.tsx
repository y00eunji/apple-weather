import { useWeatherStore } from '@/app/store/weatherStore.ts';
import { weatherWorkerStore } from '@/app/store/workerStore.ts';
import { startWeatherWorker, stopWeatherWorker } from '@/entities/weather/workers/workerInstance.ts';

import { VscDebugStart } from 'react-icons/vsc';

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

    // 상태 변경 후 상태를 확인하려면 상태 업데이트를 확인할 수 있도록 리렌더링을 기다립니다.
    const updatedState = weatherWorkerStore.getState().isWorkerRunning;
    console.log('Updated isWorkerRunning:', updatedState, currentIndex);
  };

  return (
    <div className="w-[90%] h-[20px] flex justify-end">
      <VscDebugStart onClick={handleStartButton} size={27} />
    </div>
  );
}
