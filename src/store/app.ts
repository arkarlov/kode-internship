import { create } from "zustand";

import { SortOption } from "../modules/SortModule";

interface AppStore {
  error: string | null;
  setError: (v: string | null) => void;

  loading: boolean;
  setLoading: (v: boolean) => void;

  sortBy: SortOption;
  setSortBy: (v: SortOption) => void;

  search: string;
  setSearch: (v: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  error: null,
  setError: (v) => set({ error: v }),

  loading: true,
  setLoading: (v) => set({ loading: v }),

  sortBy: SortOption.Default,
  setSortBy: (v) => set({ sortBy: v }),

  search: "",
  setSearch: (v) => set({ search: v }),
}));
