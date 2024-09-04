import DayWeather from '@/entities/daily/ui/DayWeather.tsx';
import { useWeatherStore } from '@/shared/store/weatherStore.ts';

export default function DailyWeather() {
  const { weather } = useWeatherStore();
  const daily = weather?.daily;

  if (!daily) return;

  return (
    <div className="flex flex-col gap-2 w-full">
      {daily.list.map((day, index) => (
        <DayWeather key={index} index={index} day={day} />
      ))}
    </div>
  );
}
