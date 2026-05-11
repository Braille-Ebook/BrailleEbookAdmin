import { defaultAxios } from "./main";
const ENDPOINT = "/login";

export const signIn = async ({ identifier, password }) => {
  const res = await defaultAxios.post(`${ENDPOINT}`, {
    identifier,
    password,
  });
  console.log(res);
  return res.data;
};
