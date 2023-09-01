import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompaniesThunk } from '../redux/apple/companiesSlice';
import { buttonStyle, screenStyle } from '../tailwindStyles';
import companiesArray from '../companies/companiesArray';

function Company() {
  const { symbol } = useParams();
  const { companies } = useSelector((state) => state.companies);
  const symbolSelected = companiesArray.find((company) => company.symbol === symbol);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompaniesThunk(symbolSelected.symbol));
  }, [fetchCompaniesThunk]);

  return (
    <section className="section bg-pink-900">
      <article
        className={`${screenStyle} grid grid-cols-2 last:col-span-2 gap-3`}
      >
        {companies.map((company) => (
          <Link className="last:col-span-2" to="/" key={company.id}>
            <button className={`${buttonStyle} w-full`} type="button">
              {company.calendarYear}
            </button>
          </Link>
        ))}
      </article>
    </section>
  );
}

export default Company;
