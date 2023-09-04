import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/store';
import Company from '../components/Company';

it('Should render Home component', () => {
  const { company } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Company />
      </MemoryRouter>
    </Provider>,
  );
  expect(company).toMatchSnapshot();
});
