import { create } from "zustand";

export type AuthStoreType = {
  user: User | null;
  isAuthenticated: boolean;
  //
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  login: (user: User) => void;
  logout: () => void;
};

export type User = {
  email: string;
};

const useAuthStore = create<AuthStoreType>((set) => ({
  user: null,
  isAuthenticated: false,
  //
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  login: (user: User) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;
