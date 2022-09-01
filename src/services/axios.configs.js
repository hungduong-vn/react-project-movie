import axios from "axios";
import { TOKEN_CYBERSOFT } from "../constants/common";

export const request = axios.create({
  baseURL: "http://movienew.cybersoft.edu.vn/api/",
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});
