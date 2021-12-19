import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "12d09cb89bmsh3d8236317a4f9a8p142e1djsn381371d386e0",
    },
  });

  return data;
};
