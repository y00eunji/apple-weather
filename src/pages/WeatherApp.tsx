import { useWeatherStore } from '@/app/store/weatherStore.ts';
import { useWeatherWorker } from '@/entities/weather/hoook/useWeatherWorker.ts';
import Daily from '@/widgets/daily';
import Details from '@/widgets/details';
import Hourly from '@/widgets/hourly';
import Radar from '@/widgets/radar';
import Summary from '@/widgets/summary';

export default function WeatherApp() {
  useWeatherWorker(); // 워커 훅을 호출하여 상태 업데이트를 트리거합니다.

  const weatherData = useWeatherStore(state => state.weather);

  if (!weatherData) return null; // 날씨 데이터가 없는 경우 렌더링을 중지합니다.
  return (
    <div className="w-full h-full flex items-center justify-center text-white">
      <div className="w-[480px] h-full bg-primary opacity-60 flex flex-col items-center gap-5 py-10">
        <Summary />
        <Hourly />
        <Daily />
        <Radar />
        <Details />
      </div>
    </div>
  );
}
