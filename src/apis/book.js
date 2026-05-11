import { defaultAxios } from "./main";
const ENDPOINT = "/books";

export const getBooks = async (params) => {
  const res = await defaultAxios.get(
    `${ENDPOINT}?${new URLSearchParams(params)}`,
  );
  return res.data;
};
export const addBooks = async (data) => {
  const res = await defaultAxios.post(`${ENDPOINT}`, data);
  return res.data;
};
export const deleteBooks = async (id) => {
  const res = await defaultAxios.delete(`${ENDPOINT}/${id}`);
  return res.data;
};
