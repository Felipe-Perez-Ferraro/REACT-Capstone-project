import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchApi from '../../services/api';

const initialState = {
  companies: [],
  isFetched: false,
};

export const fetchCompaniesThunk = createAsyncThunk(
  'companies/fetchcompanies',
  async (symbol) => {
    const data = await fetchApi(symbol);
    const companies = data.map((company) => ({
      id: company.calendarYear,
      calendarYear: company.calendarYear,
      costAndExpenses: company.costAndExpenses,
      costOfRevenue: company.costOfRevenue,
      grossProfit: company.grossProfit,
      incomeTaxExpense: company.incomeTaxExpense,
      interestIncome: company.interestIncome,
      netIncome: company.netIncome,
      operatingExpenses: company.operatingExpenses,
      revenue: company.revenue,
    }));
    return companies;
  },
);

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompaniesThunk.fulfilled, (state, action) => {
      state.companies = action.payload;
      state.isFetched = true;
    });
  },
});

export default companiesSlice.reducer;
