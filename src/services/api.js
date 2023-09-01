import axios from 'axios';

const apiKey = '04ecc2840ecc44887bf18fa4b6327d8e';

const fetchApi = async (symbol) => {
  try {
    const res = await axios.get(`https://financialmodelingprep.com/api/v3/income-statement/${symbol}?limit=120&apikey=${apiKey}`);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchApi;
