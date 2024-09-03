import Map from '@/entities/map';
import Section from '@/shared/ui/section';

export default function Radar() {
  return (
    <Section title="강수량 지도" size={'radar'}>
      <Map />
    </Section>
  );
}
