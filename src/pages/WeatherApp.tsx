import ControlWorkerButton from '@/feature/stop-worker';
import { useScrollPosition } from '@/shared/hook/useScroll.ts';
import { startWeatherWorker } from '@/shared/lib/workerInstance.ts';
import { useWeatherStore } from '@/shared/store/weatherStore.ts';
import Daily from '@/widgets/daily';
import Details from '@/widgets/details';
import Hourly from '@/widgets/hourly';
import Navigation from '@/widgets/nav';
import Radar from '@/widgets/radar';
import Summary from '@/widgets/summary';

export default function WeatherApp() {
  const { setWeather, weather } = useWeatherStore();

  startWeatherWorker(setWeather);

  useScrollPosition();

  return (
    <>
      {weather && (
        <div className="flex justify-center">
          <Navigation />
          <div className="w-[480px] h-full bg-primary opacity-60 flex flex-col items-center gap-5 py-10 text-white mr-20">
            <ControlWorkerButton />
            <Summary />
            <Hourly />
            <Daily />
            <Radar />
            <Details />
          </div>
        </div>
      )}
    </>
  );
}
