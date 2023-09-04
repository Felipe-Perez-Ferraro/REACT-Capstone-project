import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/store';
import YearInfo from '../components/YearInfo';

it('Should render Home component', () => {
  const { yearInfo } = render(
    <Provider store={store}>
      <MemoryRouter>
        <YearInfo />
      </MemoryRouter>
    </Provider>,
  );
  expect(yearInfo).toMatchSnapshot();
});
