import { useWeatherStore } from '@/shared/store/weatherStore.ts';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function HourlyWeather() {
  const { weather } = useWeatherStore();
  if (!weather) return null;

  const { current, hourly } = weather;

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={6}
      className="flex items-center justify-center gap-3 pt-4 border-t border-white border-opacity-15 "
    >
      <SwiperSlide className="flex flex-col items-center gap-2">
        <div className="text-[14px]">지금</div>
        <img
          alt={hourly.list[0].weather[0].description}
          width={40}
          height={40}
          src={`http://openweathermap.org/img/wn/${hourly.list[0].weather[0].icon}@2x.png`}
        />
        <div className="font-semibold">{`${Math.floor(hourly.list[0].main.temp)}`}°</div>
      </SwiperSlide>

      {hourly.list.map((hour, index) => {
        const utcDate = new Date(hour.dt * 1000);
        const localDate = new Date(utcDate.getTime() + current.timezone * 1000);
        const timeLabel = new Intl.DateTimeFormat('ko-kr', {
          hour: 'numeric',
          timeZone: 'UTC',
        }).format(localDate);

        return (
          <SwiperSlide key={index} className="flex flex-col items-center gap-2">
            <div className="text-[14px]">{timeLabel}</div>
            <img
              alt={hour.weather[0].description}
              width={40}
              height={40}
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
            />
            <div className="font-semibold">{`${Math.floor(hour.main.temp)}`}°</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
