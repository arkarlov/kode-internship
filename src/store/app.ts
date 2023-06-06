import { create } from "zustand";

interface AppStore {
  error: string | null;
  setError: (v: string | null) => void;

  loading: boolean;
  setLoading: (v: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  error: null,
  setError: (v) => set({ error: v }),

  loading: true,
  setLoading: (v) => set({ loading: v }),
}));
