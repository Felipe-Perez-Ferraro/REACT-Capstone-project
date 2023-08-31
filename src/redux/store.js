import { configureStore } from '@reduxjs/toolkit';
import companiesreducer from './apple/companiesSlice';

const store = configureStore({
  reducer: {
    companies: companiesreducer,
  },
});

export default store;
