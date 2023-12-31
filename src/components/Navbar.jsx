import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
  faMicrophone,
  faAngleLeft,
  faGear,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { screenStyle } from '../tailwindStyles';

const goBack = <FontAwesomeIcon icon={faAngleLeft} />;
const user = <FontAwesomeIcon icon={faMicrophone} />;
const settings = <FontAwesomeIcon icon={faGear} />;
const search = <FontAwesomeIcon icon={faMagnifyingGlass} />;

function Navbar({ handleClick }) {
  return (
    <header className="bg-pink-600">
      <nav className={screenStyle}>
        <ul className="flex justify-between items-center h-14">
          <Link to="/">
            <li className="text-white text-xl cursor-pointer">{goBack}</li>
          </Link>
          <li className="text-white text-lg font-bold">Companies Financials</li>
          <li>
            <div className="flex gap-3">
              <p className="text-white text-lg">{user}</p>
              <p className="text-white text-lg">{settings}</p>
              <button
                onClick={handleClick}
                type="button"
                className="text-white text-lg"
              >
                {search}
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Navbar;
