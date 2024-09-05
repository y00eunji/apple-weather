import { getWeatherData } from '@/shared/api/index.ts';
import { CITIES } from '@/shared/constants/locations.ts';

const INTERVAL_MS = 10000;
let currentIndex = 0;

// 날씨 데이터 가져오기
const fetchWeatherData = async () => {
  const location = CITIES[currentIndex];

  try {
    const { current, hourly, daily } = await getWeatherData(location);
    postMessage({ current, hourly, daily }); // 메인 스레드로 날씨 데이터 전송

    currentIndex = (currentIndex + 1) % CITIES.length;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

// 메시지 수신 시 인덱스 설정
self.addEventListener('message', event => {
  if (event.data.index !== undefined) {
    currentIndex = event.data.index % CITIES.length; // index 수신 후 설정
    fetchWeatherData();
  }
});

// 주기적으로 데이터 가져오기
setInterval(fetchWeatherData, INTERVAL_MS);
