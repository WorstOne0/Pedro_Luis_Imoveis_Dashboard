import { create } from "zustand";

type DistrictStore = {
  districtSelected: any;
  //
  setDistrictSelected: (districtSelected: any) => void;
};

const useDistrictStore = create<DistrictStore>((set) => ({
  districtSelected: "",
  setDistrictSelected: (districtSelected: any) => set({ districtSelected: districtSelected }),
}));

export default useDistrictStore;
