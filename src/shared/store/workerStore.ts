import { CITIES } from '@/shared/constants/locations.ts';

import { create } from 'zustand';

interface WorkerStore {
  currentIndex: number;
  isWorkerRunning: boolean;
  incrementIndex: () => void;
  resetIndex: () => void;
  startWorker: () => void;
  stopWorker: () => void;
}

export const useWorkerStore = create<WorkerStore>(set => ({
  currentIndex: 0,
  isWorkerRunning: false,
  incrementIndex: () =>
    set(state => ({
      currentIndex: (state.currentIndex + 1) % CITIES.length,
    })),
  resetIndex: () => set({ currentIndex: 0 }),
  startWorker: () => set({ isWorkerRunning: true }),
  stopWorker: () => set({ isWorkerRunning: false }),
}));
