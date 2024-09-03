// TODO : 매일 날씨 나타내는 컴포넌트로 분리하기
import { useWeatherStore } from '@/app/store/weatherStore.ts';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

export default function DailyWeather() {
  const { weather } = useWeatherStore();
  if (!weather) return;
  const { daily } = weather;

  return (
    <div className="flex flex-col gap-2 w-full">
      {daily.list.map((day, index) => {
        return (
          <div
            key={index}
            className="text-[16px] flex justify-between items-center border-t border-white border-opacity-15 pt-1"
          >
            <div className="w-[20%] font-semibold text-[17px]">
              {index === 0 ? '오늘' : daysOfWeek[new Date(day.dt * 1000).getUTCDay()]}
            </div>
            <div className="w-[40%] flex justify-center items-center">
              <img
                alt={day.weather[0].description}
                width={40}
                height={40}
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              />
            </div>

            <div className="flex gap-2 w-[40%] justify-end">
              <span>{`최고 : ${Math.floor(day.temp.max)}°`}</span> <span>{`최저 : ${Math.floor(day.temp.min)}°`}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
