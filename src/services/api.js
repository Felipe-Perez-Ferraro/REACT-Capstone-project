const apiKey = '9bdf2f9051dd1e2a942f6a776cfd57a2';

const fetchApi = async (symbol) => {
  try {
    const res = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/${symbol}?limit=120&apikey=${apiKey}`);
    const data = res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchApi;
