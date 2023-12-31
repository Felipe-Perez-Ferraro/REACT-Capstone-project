import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCompaniesThunk } from '../redux/companies/companiesSlice';
import { screenStyle } from '../tailwindStyles';

function YearInfo() {
  const goBack = <FontAwesomeIcon icon={faAngleLeft} />;
  const dispatch = useDispatch();
  const { id } = useParams();
  const { symbol } = useParams();
  const { companies } = useSelector((state) => state.companies);
  const { isFetched } = useSelector((state) => state.companies);
  const { isLoading } = useSelector((state) => state.companies);
  const { error } = useSelector((state) => state.companies);
  const yearSelected = companies.find((company) => company.id === id) || {};

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchCompaniesThunk(symbol));
    }
  }, [dispatch, isFetched, symbol]);

  return (
    <section className="section bg-pink-900 py-4">
      <article className={`${screenStyle} flex flex-col gap-4`}>
        {isLoading && (
          <div>
            <p className="text-2xl text-center font-bold text-slate-100">Loading...</p>
          </div>
        )}
        {!isLoading && (
          <>
            <Link className="text-slate-100 font-semibold mb-2 text-left whitespace-nowrap inline w-3" to={`/company/${symbol}`}>
              {goBack}
              {' '}
              Back to years
            </Link>
            <table className="table border w-full bg-pink-600">
              <thead className="border bg-pink-800">
                <tr>
                  <th className="text-slate-100 font-semibold text-xl py-3">{id}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-pink-600 even:bg-pink-700">
                  <td className="flex justify-between px-1 lg:px-2 xl:px-2 py-3">
                    <span data-testid="costAndExpenses" className="text-slate-100 font-semibold lg:text-lg xl:text-lg">Costs and expenses:</span>
                    {' '}
                    <span className="text-slate-100 font-semibold">{yearSelected.costAndExpenses}</span>
                  </td>
                </tr>
                <tr className="bg-pink-600 even:bg-pink-700">
                  <td className="flex justify-between px-1 lg:px-2 xl:px-2 py-3">
                    <span data-testid="costOfRevenue" className="text-slate-100 font-semibold lg:text-lg xl:text-lg">Cost of revenue:</span>
                    {' '}
                    <span className="text-slate-100 font-semibold">{yearSelected.costOfRevenue}</span>
                  </td>
                </tr>
                <tr className="bg-pink-600 even:bg-pink-700">
                  <td className="flex justify-between px-1 lg:px-2 xl:px-2 py-3">
                    <span data-testid="grossProfit" className="text-slate-100 font-semibold lg:text-lg xl:text-lg">Gross Profit:</span>
                    {' '}
                    <span className="text-slate-100 font-semibold">{yearSelected.grossProfit}</span>
                  </td>
                </tr>
                <tr className="bg-pink-600 even:bg-pink-700">
                  <td className="flex justify-between px-1 lg:px-2 xl:px-2 py-3">
                    <span data-testid="incomeTaxExpense" className="text-slate-100 font-semibold lg:text-lg xl:text-lg">Income Tax Expense:</span>
                    {' '}
                    <span className="text-slate-100 font-semibold">{yearSelected.incomeTaxExpense}</span>
                  </td>
                </tr>
                <tr className="bg-pink-600 even:bg-pink-700">
                  <td className="flex justify-between px-1 lg:px-2 xl:px-2 py-3">
                    <span data-testid="interestIncome" className="text-slate-100 font-semibold lg:text-lg xl:text-lg">Interest Income:</span>
                    {' '}
                    <span className="text-slate-100 font-semibold">{yearSelected.interestIncome}</span>
                  </td>
                </tr>
                <tr className="bg-pink-600 even:bg-pink-700">
                  <td className="flex justify-between px-1 lg:px-2 xl:px-2 py-3">
                    <span data-testid="netIncome" className="text-slate-100 font-semibold lg:text-lg xl:text-lg">Net Income:</span>
                    {' '}
                    <span className="text-slate-100 font-semibold">{yearSelected.netIncome}</span>
                  </td>
                </tr>
                <tr className="bg-pink-600 even:bg-pink-700">
                  <td className="flex justify-between px-1 lg:px-2 xl:px-2 py-3">
                    <span data-testid="operatingExpenses" className="text-slate-100 font-semibold lg:text-lg xl:text-lg">Operating Expenses:</span>
                    {' '}
                    <span className="text-slate-100 font-semibold">{yearSelected.operatingExpenses}</span>
                  </td>
                </tr>
                <tr className="bg-pink-600 even:bg-pink-700">
                  <td className="flex justify-between px-1 lg:px-2 xl:px-2 py-3">
                    <span data-testid="revenue" className="text-slate-100 font-semibold lg:text-lg xl:text-lg">Revenue:</span>
                    {' '}
                    <span className="text-slate-100 font-semibold">{yearSelected.revenue}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
        {error && <div>{error}</div>}
      </article>
    </section>
  );
}

export default YearInfo;
