import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://dev4.xtnd.io/2022/m/tibyana/public/api",
  headers: {
    "Cache-Control": "no-cache",
  },
});

export default apiClient;
