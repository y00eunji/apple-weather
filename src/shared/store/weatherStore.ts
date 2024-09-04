import { TotalWeatherType } from '@/shared/types/weatherType.ts';

import { create } from 'zustand';

interface Store {
  weather: TotalWeatherType | null;
  setWeather: (_data: TotalWeatherType) => void;
}

export const useWeatherStore = create<Store>(set => ({
  weather: null,
  setWeather: data => set({ weather: data }),
}));
