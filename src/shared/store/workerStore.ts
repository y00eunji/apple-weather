import { CITIES } from '@/shared/constants/locations.ts';

import { create } from 'zustand';

interface WorkerStore {
  currentIndex: number;
  isWorkerRunning: boolean;
  incrementIndex: () => void;
  resetIndex: () => void;
  setIndex: (_index: number) => void;
  startWorker: () => void;
  stopWorker: () => void;
}

export const useWorkerStore = create<WorkerStore>(set => ({
  currentIndex: 0,
  isWorkerRunning: false,
  incrementIndex: () =>
    set(state => ({
      currentIndex: (state.currentIndex + 1) % CITIES.length, // 인덱스가 목록 길이를 초과하지 않도록
    })),
  resetIndex: () => set({ currentIndex: 0 }),
  setIndex: (index: number) => set({ currentIndex: index % CITIES.length }), // 인덱스가 목록 길이를 초과하지 않도록
  startWorker: () => set({ isWorkerRunning: true }),
  stopWorker: () => set({ isWorkerRunning: false }),
}));
