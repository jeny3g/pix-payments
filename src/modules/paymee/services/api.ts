import axios, { AxiosInstance } from "axios";

import { APP_KEY_HEADER, APP_TOKEN_HEADER } from "../constants/apiPathPayMee";

export const apiPayMee = (key: string, token: string): AxiosInstance => {
  return axios.create({
    baseURL: process.env.PAYMEE_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      [APP_KEY_HEADER]: key,
      [APP_TOKEN_HEADER]: token,
    },
  });
};
