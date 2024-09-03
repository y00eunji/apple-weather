import { useWeatherStore } from '@/app/store/weatherStore.ts';

export default function CurrentWeather() {
  const { weather } = useWeatherStore();
  const current = weather?.current;

  if (!current) return;

  return (
    <div className="flex flex-col items-center justify-center font-medium">
      <div className="text-5xl">{current.name}</div>
      <div className="text-8xl my-6">{Math.floor(current.main.temp)}°</div>
      <div className="text-3xl mb-2">{current.weather[0].description}</div>
      <div className="text-xl flex gap-2">
        <span>{`최고 : ${Math.floor(current.main.temp_max)}°`}</span> |
        <span>{`최저 : ${Math.floor(current.main.temp_min)}°`}</span>
      </div>
    </div>
  );
}
