import { create } from "zustand";

interface UiState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

export const useUiStore = create<UiState>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  error: null,
  setError: (error) => set({ error: error }),
}));
