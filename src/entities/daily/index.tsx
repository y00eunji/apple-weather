import { useWeatherStore } from '@/app/store/weatherStore.ts';
import DayWeather from '@/entities/daily/ui/DayWeather.tsx';

export default function DailyWeather() {
  const { weather } = useWeatherStore();
  const daily = weather?.daily;

  if (!daily) return;

  return (
    <div className="flex flex-col gap-2 w-full">
      {daily.list.map((day, index) => (
        <DayWeather key={index} day={day} />
      ))}
    </div>
  );
}
