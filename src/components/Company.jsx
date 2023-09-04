import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompaniesThunk } from '../redux/companies/companiesSlice';
import { buttonStyle, screenStyle } from '../tailwindStyles';
import companiesArray from '../companies/companiesArray';

function Company() {
  const { symbol } = useParams();
  const { companies } = useSelector((state) => state.companies);
  const symbolSelected = companiesArray.find((company) => company.symbol === symbol);
  const dispatch = useDispatch();

  useEffect(() => {
    const symbolToFetch = symbolSelected.symbol;
    dispatch(fetchCompaniesThunk(symbolToFetch));
  }, [fetchCompaniesThunk]);

  return (
    <section className="section bg-pink-900 py-7">
      <article className={`${screenStyle} flex flex-col gap-2`}>
        <h2 className="text-center text-slate-100 font-bold text-4xl">
          {symbol === 'AAPL' && 'Apple'}
          {symbol === 'GOOG' && 'Google'}
        </h2>
        <p className="text-center font-semibold text-2xl text-slate-100 mb-5">Check the financial insights of the company in the last 5 years.</p>
        <div className="grid grid-cols-2 last:col-span-2 gap-3">
          {companies.map((company) => (
            <Link className="last:col-span-2" to={`/insights/${symbol}/${company.id}`} key={company.id}>
              <button className={`${buttonStyle} w-full`} type="button">
                {company.calendarYear}
              </button>
            </Link>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Company;
