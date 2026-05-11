import { authAxios } from "./main";
const ENDPOINT = "/books";

export const getBooks = async (params) => {
  const res = await authAxios.get(`${ENDPOINT}?${new URLSearchParams(params)}`);
  return res.data;
};
export const addBooks = async (data) => {
  const res = await authAxios.post(`${ENDPOINT}`, data);
  return res.data;
};
export const deleteBooks = async (id) => {
  const res = await authAxios.delete(`${ENDPOINT}/${id}`);
  return res.data;
};
