import HourlyWeather from '@/entities/hourly/ui';
import Section from '@/shared/ui/section';

export default function Hourly() {
  return (
    <Section title="시간별 날씨" size={'hourly'}>
      <HourlyWeather />
    </Section>
  );
}
