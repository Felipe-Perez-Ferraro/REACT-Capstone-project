import React from 'react';
import { Link } from 'react-router-dom';
import { buttonStyle, screenStyle } from '../tailwindStyles';
import companiesArray from '../companies/companiesArray';

function Home() {
  return (
    <main className="bg-pink-900 py-10">
      <article className={`${screenStyle} flex justify-between`}>
        {companiesArray.map((company) => (
          <Link key={company.id} to={`company/${company.symbol}`}>
            <button
              className={buttonStyle}
              type="button"
            >
              {company.company}
            </button>
          </Link>
        ))}
      </article>
    </main>
  );
}

export default Home;
