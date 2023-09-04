import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import YearInfo from '../components/YearInfo';
import companiesReducer, {
  fetchCompaniesThunk,
} from '../redux/companies/companiesSlice';
import fetchApi from '../services/api';

jest.mock('../services/api');

describe('companiesSlice tests', () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        companies: companiesReducer,
      },
    });
  });

  it('Should fetch the financial API', async () => {
    const mockData = [
      {
        id: 2023,
        calendarYear: 2023,
        costAndExpenses: 4352345345,
        costOfRevenue: 3241234,
        grossProfit: 312412341234,
        incomeTaxExpense: 764574567,
        interestIncome: 45625462456,
        netIncome: 7864678674,
        operatingExpenses: 234523342,
        revenue: 43584839734,
      },
    ];
    fetchApi.mockResolvedValue(mockData);
    await store.dispatch(fetchCompaniesThunk('symbol'));

    const state = store.getState().companies;
    expect(state.isLoading).toBe(false);
    expect(state.isFetched).toBe(true);
    expect(state.error).toBe(false);
    expect(state.companies).toEqual(mockData);
  });

  it('Should render a financial information', async () => {
    const mockData = [
      {
        id: 2023,
        calendarYear: 2023,
        costAndExpenses: 4352345345,
        costOfRevenue: 3241234,
        grossProfit: 312412341234,
        incomeTaxExpense: 764574567,
        interestIncome: 45625462456,
        netIncome: 7864678674,
        operatingExpenses: 234523342,
        revenue: 43584839734,
      },
    ];
    fetchApi.mockResolvedValue(mockData);
    await store.dispatch(fetchCompaniesThunk('symbol'));

    const { yearInfo } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/AAPL/2022']}>
          <Routes>
            <Route path="/:symbol/:id" element={<YearInfo />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(yearInfo).toMatchSnapshot();
    expect(screen.getByTestId('costAndExpenses').textContent).toBe(
      'Costs and expenses:',
    );
    expect(screen.getByTestId('costOfRevenue').textContent).toBe(
      'Cost of revenue:',
    );
    expect(screen.getByTestId('grossProfit').textContent).toBe('Gross Profit:');
    expect(screen.getByTestId('incomeTaxExpense').textContent).toBe(
      'Income Tax Expense:',
    );
    expect(screen.getByTestId('interestIncome').textContent).toBe(
      'Interest Income:',
    );
    expect(screen.getByTestId('netIncome').textContent).toBe('Net Income:');
    expect(screen.getByTestId('operatingExpenses').textContent).toBe(
      'Operating Expenses:',
    );
    expect(screen.getByTestId('revenue').textContent).toBe('Revenue:');
  });
});
