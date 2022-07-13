import axios from "axios";

const HOST = process.env.REACT_APP_URL;
const urls = {
  MENS_CLOTHING: `api/mens-wears?populate=image`,
};

const getMensChlothes = async () => {
  try {
    const { data } = axios.get(HOST + urls.MENS_CLOTHING);
    console.log("daat", data);
    debugger;
    return data;
  } catch (err) {
    return err;
  }
};

export const apiClient = {
  getMensChlothes,
};
