import axios from "axios";

import { APP_KEY_HEADER, APP_TOKEN_HEADER } from "../constants/apiPathPayMee";

const apiPayMee = axios.create({
  baseURL: process.env.PAYMEE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    [APP_KEY_HEADER]: "key",
    [APP_TOKEN_HEADER]: "token",
  },
});

export { apiPayMee };
