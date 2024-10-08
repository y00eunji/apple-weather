import { CurrentWeatherType, DailyWeatherType, HourlyWeatherType } from '@/shared/types/weatherType.ts';

export const CurrentMock: CurrentWeatherType = {
  coord: {
    lon: 126.9778,
    lat: 37.5683,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: '맑음',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 30.19,
    feels_like: 32.03,
    temp_min: 27.69,
    temp_max: 31.66,
    pressure: 1006,
    humidity: 54,
    sea_level: 1006,
    grnd_level: 1000,
  },
  visibility: 10000,
  wind: {
    speed: 1.54,
    deg: 60,
  },
  clouds: {
    all: 0,
  },
  dt: 1725075409,
  sys: {
    type: 1,
    id: 8105,
    country: 'KR',
    sunrise: 1725051697,
    sunset: 1725098621,
  },
  timezone: 32400,
  id: 1835848,
  name: 'Seoul',
  cod: 200,
};
export const HourlyMock: HourlyWeatherType = {
  cod: '200',
  message: 0,
  cnt: 24,
  list: [
    {
      dt: 1725076800,
      main: {
        temp: 30.19,
        feels_like: 32.03,
        temp_min: 30.19,
        temp_max: 32.4,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1000,
        humidity: 54,
        temp_kf: -2.21,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: '맑음',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.28,
        deg: 309,
        gust: 1.46,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-08-31 04:00:00',
    },
    {
      dt: 1725080400,
      main: {
        temp: 30.77,
        feels_like: 32.24,
        temp_min: 30.77,
        temp_max: 33.07,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1000,
        humidity: 50,
        temp_kf: -2.3,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: '맑음',
          icon: '01d',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 1.72,
        deg: 289,
        gust: 1.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-08-31 05:00:00',
    },
    {
      dt: 1725084000,
      main: {
        temp: 31.41,
        feels_like: 32.5,
        temp_min: 31.41,
        temp_max: 33.24,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 999,
        humidity: 46,
        temp_kf: -1.83,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: '맑음',
          icon: '01d',
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.27,
        deg: 282,
        gust: 1.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-08-31 06:00:00',
    },
    {
      dt: 1725087600,
      main: {
        temp: 31.86,
        feels_like: 32.62,
        temp_min: 31.86,
        temp_max: 32.97,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 999,
        humidity: 43,
        temp_kf: -1.11,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: '맑음',
          icon: '01d',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 3.12,
        deg: 274,
        gust: 2.03,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-08-31 07:00:00',
    },
    {
      dt: 1725091200,
      main: {
        temp: 31.53,
        feels_like: 32.13,
        temp_min: 31.53,
        temp_max: 31.87,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 999,
        humidity: 43,
        temp_kf: -0.34,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: '맑음',
          icon: '01d',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 3.48,
        deg: 270,
        gust: 2.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-08-31 08:00:00',
    },
    {
      dt: 1725094800,
      main: {
        temp: 30.12,
        feels_like: 30.91,
        temp_min: 30.12,
        temp_max: 30.12,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1000,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: '약간의 구름이 낀 하늘',
          icon: '02d',
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 3.36,
        deg: 266,
        gust: 3.49,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-08-31 09:00:00',
    },
    {
      dt: 1725098400,
      main: {
        temp: 28.4,
        feels_like: 29.57,
        temp_min: 28.4,
        temp_max: 28.4,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1001,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: '구름조금',
          icon: '03d',
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 2.41,
        deg: 252,
        gust: 3.52,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-08-31 10:00:00',
    },
    {
      dt: 1725102000,
      main: {
        temp: 27.48,
        feels_like: 28.8,
        temp_min: 27.48,
        temp_max: 27.48,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1001,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: '구름조금',
          icon: '03n',
        },
      ],
      clouds: {
        all: 31,
      },
      wind: {
        speed: 1.57,
        deg: 234,
        gust: 2.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-08-31 11:00:00',
    },
    {
      dt: 1725105600,
      main: {
        temp: 27.03,
        feels_like: 28.34,
        temp_min: 27.03,
        temp_max: 27.03,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1001,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: '구름조금',
          icon: '03n',
        },
      ],
      clouds: {
        all: 28,
      },
      wind: {
        speed: 1.08,
        deg: 229,
        gust: 1.46,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-08-31 12:00:00',
    },
    {
      dt: 1725109200,
      main: {
        temp: 26.55,
        feels_like: 26.55,
        temp_min: 26.55,
        temp_max: 26.55,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: '튼구름',
          icon: '04n',
        },
      ],
      clouds: {
        all: 65,
      },
      wind: {
        speed: 0.94,
        deg: 221,
        gust: 1.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-08-31 13:00:00',
    },
    {
      dt: 1725112800,
      main: {
        temp: 26.21,
        feels_like: 26.21,
        temp_min: 26.21,
        temp_max: 26.21,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: '튼구름',
          icon: '04n',
        },
      ],
      clouds: {
        all: 82,
      },
      wind: {
        speed: 1.42,
        deg: 186,
        gust: 2.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-08-31 14:00:00',
    },
    {
      dt: 1725116400,
      main: {
        temp: 25.82,
        feels_like: 26.26,
        temp_min: 25.82,
        temp_max: 25.82,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: '온흐림',
          icon: '04n',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 0.98,
        deg: 177,
        gust: 1.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-08-31 15:00:00',
    },
    {
      dt: 1725120000,
      main: {
        temp: 25.44,
        feels_like: 25.87,
        temp_min: 25.44,
        temp_max: 25.44,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: '온흐림',
          icon: '04n',
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 0.88,
        deg: 167,
        gust: 1.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-08-31 16:00:00',
    },
    {
      dt: 1725123600,
      main: {
        temp: 25,
        feels_like: 25.44,
        temp_min: 25,
        temp_max: 25,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: '온흐림',
          icon: '04n',
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 1.16,
        deg: 165,
        gust: 1.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-08-31 17:00:00',
    },
    {
      dt: 1725127200,
      main: {
        temp: 24.56,
        feels_like: 25,
        temp_min: 24.56,
        temp_max: 24.56,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: '온흐림',
          icon: '04n',
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 1.16,
        deg: 157,
        gust: 1.7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-08-31 18:00:00',
    },
    {
      dt: 1725130800,
      main: {
        temp: 24.2,
        feels_like: 24.66,
        temp_min: 24.2,
        temp_max: 24.2,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1001,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: '온흐림',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1,
        deg: 151,
        gust: 1.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-08-31 19:00:00',
    },
    {
      dt: 1725134400,
      main: {
        temp: 23.89,
        feels_like: 24.37,
        temp_min: 23.89,
        temp_max: 23.89,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: '온흐림',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.09,
        deg: 156,
        gust: 1.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-08-31 20:00:00',
    },
    {
      dt: 1725138000,
      main: {
        temp: 23.48,
        feels_like: 24,
        temp_min: 23.48,
        temp_max: 23.48,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1002,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: '온흐림',
          icon: '04n',
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 1.04,
        deg: 161,
        gust: 1.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-08-31 21:00:00',
    },
    {
      dt: 1725141600,
      main: {
        temp: 23.87,
        feels_like: 24.4,
        temp_min: 23.87,
        temp_max: 23.87,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1003,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: '튼구름',
          icon: '04d',
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 1.23,
        deg: 164,
        gust: 2.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-08-31 22:00:00',
    },
    {
      dt: 1725145200,
      main: {
        temp: 24.85,
        feels_like: 25.35,
        temp_min: 24.85,
        temp_max: 24.85,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1003,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: '튼구름',
          icon: '04d',
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 1.69,
        deg: 176,
        gust: 3.18,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-08-31 23:00:00',
    },
    {
      dt: 1725148800,
      main: {
        temp: 26.21,
        feels_like: 26.21,
        temp_min: 26.21,
        temp_max: 26.21,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1003,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: '튼구름',
          icon: '04d',
        },
      ],
      clouds: {
        all: 56,
      },
      wind: {
        speed: 2.04,
        deg: 204,
        gust: 3.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-09-01 00:00:00',
    },
    {
      dt: 1725152400,
      main: {
        temp: 27.65,
        feels_like: 28.76,
        temp_min: 27.65,
        temp_max: 27.65,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1003,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: '맑음',
          icon: '01d',
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 2.63,
        deg: 219,
        gust: 3.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-09-01 01:00:00',
    },
    {
      dt: 1725156000,
      main: {
        temp: 28.97,
        feels_like: 29.39,
        temp_min: 28.97,
        temp_max: 28.97,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1002,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: '맑음',
          icon: '01d',
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 3.06,
        deg: 221,
        gust: 3.49,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-09-01 02:00:00',
    },
    {
      dt: 1725159600,
      main: {
        temp: 30.19,
        feels_like: 29.91,
        temp_min: 30.19,
        temp_max: 30.19,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: '맑음',
          icon: '01d',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 3.56,
        deg: 229,
        gust: 3.78,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-09-01 03:00:00',
    },
  ],
  city: {
    id: 1835848,
    name: 'Seoul',
    coord: {
      lat: 37.5683,
      lon: 126.9778,
    },
    country: 'KR',
    population: 10349312,
    timezone: 32400,
    sunrise: 1725051697,
    sunset: 1725098621,
  },
};
export const DailyMock: DailyWeatherType = {
  city: {
    id: 1835848,
    name: 'Seoul',
    coord: {
      lon: 126.9778,
      lat: 37.5683,
    },
    country: 'KR',
    population: 10349312,
    timezone: 32400,
  },
  cod: '200',
  message: 0.0476673,
  cnt: 5,
  list: [
    {
      dt: 1725073200,
      sunrise: 1725051697,
      sunset: 1725098621,
      temp: {
        day: 30.4,
        min: 22.66,
        max: 31.86,
        night: 26.21,
        eve: 30.12,
        morn: 22.66,
      },
      feels_like: {
        day: 32.01,
        night: 26.21,
        eve: 30.91,
        morn: 23.07,
      },
      pressure: 1006,
      humidity: 52,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: '맑음',
          icon: '01d',
        },
      ],
      speed: 3.48,
      deg: 270,
      gust: 3.84,
      clouds: 3,
      pop: 0,
    },
    {
      dt: 1725159600,
      sunrise: 1725138147,
      sunset: 1725184933,
      temp: {
        day: 30.19,
        min: 23.48,
        max: 31.21,
        night: 25.08,
        eve: 28,
        morn: 23.48,
      },
      feels_like: {
        day: 29.91,
        night: 25.16,
        eve: 27.6,
        morn: 24,
      },
      pressure: 1008,
      humidity: 40,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: '맑음',
          icon: '01d',
        },
      ],
      speed: 4.36,
      deg: 253,
      gust: 4.37,
      clouds: 3,
      pop: 0,
    },
    {
      dt: 1725246000,
      sunrise: 1725224597,
      sunset: 1725271244,
      temp: {
        day: 23.59,
        min: 21.28,
        max: 26.92,
        night: 24.2,
        eve: 25.84,
        morn: 24,
      },
      feels_like: {
        day: 24.02,
        night: 24.4,
        eve: 26.18,
        morn: 24.28,
      },
      pressure: 1010,
      humidity: 77,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: '보통 비',
          icon: '10d',
        },
      ],
      speed: 4.84,
      deg: 76,
      gust: 10.54,
      clouds: 100,
      pop: 0.67,
      rain: 3.28,
    },
    {
      dt: 1725332400,
      sunrise: 1725311047,
      sunset: 1725357555,
      temp: {
        day: 27.78,
        min: 22.6,
        max: 30.39,
        night: 26.53,
        eve: 29.23,
        morn: 22.6,
      },
      feels_like: {
        day: 27.61,
        night: 26.53,
        eve: 29.04,
        morn: 22.59,
      },
      pressure: 1013,
      humidity: 42,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: '구름조금',
          icon: '03d',
        },
      ],
      speed: 3.48,
      deg: 71,
      gust: 9.48,
      clouds: 31,
      pop: 0,
    },
    {
      dt: 1725418800,
      sunrise: 1725397497,
      sunset: 1725443866,
      temp: {
        day: 29.9,
        min: 21.88,
        max: 31.71,
        night: 26.61,
        eve: 28.89,
        morn: 21.88,
      },
      feels_like: {
        day: 29.81,
        night: 26.61,
        eve: 29.52,
        morn: 21.87,
      },
      pressure: 1010,
      humidity: 42,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: '구름조금',
          icon: '03d',
        },
      ],
      speed: 3.51,
      deg: 289,
      gust: 4.1,
      clouds: 28,
      pop: 0,
    },
  ],
};
