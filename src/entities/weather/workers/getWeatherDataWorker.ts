import { getWeatherData } from '@/shared/api';
import { CITIES } from '@/shared/constants/locations.ts';

const INTERVAL_MS = 10000;
let currentIndex = 0;

// 날씨 데이터 가져오기
const fetchWeatherData = async () => {
  const location = CITIES[currentIndex];

  try {
    const { current, hourly, daily } = await getWeatherData(location);
    postMessage({ current, hourly, daily });

    // 인덱스 증가 (목록의 끝에 도달하면 처음으로 돌아가도록)
    currentIndex = (currentIndex + 1) % CITIES.length;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

// 메시지 수신 시 인덱스 설정
self.addEventListener('message', event => {
  if (event.data.index !== undefined) {
    currentIndex = event.data.index % CITIES.length; // 전달받은 인덱스가 목록의 길이를 초과하지 않도록
  }
  fetchWeatherData();
});

// 주기적으로 데이터 가져오기
setInterval(fetchWeatherData, INTERVAL_MS);
