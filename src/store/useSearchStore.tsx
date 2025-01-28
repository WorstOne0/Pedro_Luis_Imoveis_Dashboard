// Next
import { create } from "zustand";

export type SearchStoreType = {
  search: string;
  isModalOpen: boolean;
  //
  toggleModal: () => void;
  setModal: (isModalOpen: boolean) => void;
};

const useSearchStore = create<SearchStoreType>((set) => ({
  search: "",
  isModalOpen: false,
  //
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  setModal: (isModalOpen: boolean) => set({ isModalOpen }),
}));

export default useSearchStore;
