import http from "./http";
import { baseUrl } from "../config.json";

export const GetAllCategory = async () => {
  const { data } = await http.get(baseUrl + "/category");
  return data;
};
