import { useWeatherStore } from '@/app/store/weatherStore.ts';
import Section from '@/shared/ui/section';

export default function DetailsWeather() {
  const { weather } = useWeatherStore();
  if (!weather) return;

  const { current } = weather;

  return (
    <div className="flex w-full flex-wrap gap-4 items-center justify-center">
      <Section title="습도" size="detail">
        <div className="weather-detail">
          <div>{current.main.humidity}%</div>
        </div>
      </Section>
      <Section title="구름" size="detail">
        <div className="weather-detail">{current.clouds.all}%</div>
      </Section>
      <Section title="바람 속도" size="detail">
        <div className="weather-detail">{current.wind.speed}m/s</div>
      </Section>
      <Section title="기압" size="detail">
        <div className="weather-detail">{current.main.pressure.toLocaleString()} hpa</div>
      </Section>
    </div>
  );
}
