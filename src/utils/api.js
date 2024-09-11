import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'x-rapidapi-key': "3e2492801fmsh21eb7304d55b9a3p131fa6jsnf7eebb4eaa3f",
      'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchDataFromApi =  async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }