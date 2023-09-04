import { configureStore } from '@reduxjs/toolkit';
import companiesreducer from './companies/companiesSlice';

const store = configureStore({
  reducer: {
    companies: companiesreducer,
  },
});

export default store;
