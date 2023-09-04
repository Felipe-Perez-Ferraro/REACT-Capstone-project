import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { buttonStyle, screenStyle } from '../tailwindStyles';
import companiesArray from '../companies/companiesArray';

function Home({ openSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const filterCompanies = (searched) => {
    const filtered = companiesArray.filter((e) => e.company.toLowerCase().includes(searched.toLowerCase()));
    setFilteredCompanies(filtered);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterCompanies(e.target.value);
  };

  return (
    <main className="bg-pink-900 py-10 ">
      <article className={`${screenStyle}`}>
        {openSearch && (
          <input
            onChange={handleChange}
            value={searchTerm}
            className="rounded-lg w-full px-1 py-1 mb-4 outline-none"
            type="text"
            placeholder="Search a company..."
            name="search"
          />
        )}
        <div className="grid grid-cols-2 gap-4">
          {filteredCompanies.length > 0
            ? filteredCompanies.map((company) => (
              <Link key={company.id} to={`company/${company.symbol}`}>
                <button
                  className={`${buttonStyle} w-full text-center`}
                  type="button"
                >
                  {company.company}
                </button>
              </Link>
            ))
            : companiesArray.map((company) => (
              <Link key={company.id} to={`company/${company.symbol}`}>
                <button
                  className={`${buttonStyle} w-full text-center`}
                  type="button"
                >
                  {company.company}
                </button>
              </Link>
            ))}
        </div>
      </article>
    </main>
  );
}

Home.propTypes = {
  openSearch: PropTypes.bool.isRequired,
};

export default Home;
