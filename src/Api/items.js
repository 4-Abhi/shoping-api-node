import http from "./http";
import { baseUrl } from "../config.json";

export const GetItemByCategory = async (categorid) => {
  const { data } = await http.post(baseUrl + "/items/categoryid", {
    category: categorid,
  });
  return data;
};
