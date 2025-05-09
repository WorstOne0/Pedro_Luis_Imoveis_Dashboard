"use client";

import useSWR from "swr";
import apiService from "@/services/api_service";

type axiosPayload = {
  url: string;
  method: string;
  body?: any;
  options?: any;
};

export const useApiFetch = (axiosPayload: axiosPayload, storeFunction?: any) => {
  //
  const fetcher = async ({ url, method, body, options }: axiosPayload, storeFunction?: any) => {
    let res = null;

    if (method === "get") res = await apiService.get(url, options);

    if (method === "post") res = await apiService.post(url, body, options);

    if (method === "put") res = await apiService.put(url, body, options);

    if (method === "delete") res = await apiService.delete(url, options);

    if (storeFunction) storeFunction(res?.data.payload);

    return res?.data;
  };

  const { data, isLoading, error } = useSWR([axiosPayload, storeFunction], ([axiosPayload, storeFunction]) => fetcher(axiosPayload, storeFunction));

  return { data, isLoading, error };
};
