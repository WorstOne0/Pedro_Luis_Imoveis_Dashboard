import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  login: () => set({ user: null }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;
