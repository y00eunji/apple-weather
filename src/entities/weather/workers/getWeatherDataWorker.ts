import { getWeatherData } from '@/shared/api';
import { CITIES } from '@/shared/constants/locations.ts';

const INTERVAL_MS = 10000;
let currentIndex = 0;

// 10초마다 날씨 데이터 가져오기
const fetchWeatherData = async () => {
  if (currentIndex >= CITIES.length) {
    currentIndex = 0;
  }

  const location = CITIES[currentIndex];
  currentIndex++;

  try {
    const { current, hourly, daily } = await getWeatherData(location);
    postMessage({ current, hourly, daily });
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

setInterval(fetchWeatherData, INTERVAL_MS);

// 웹 워커가 메시지를 받을 때마다 fetchWeatherData 실행
self.addEventListener('message', fetchWeatherData);
