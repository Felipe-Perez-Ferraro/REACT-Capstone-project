import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Home from '../components/Home';
import store from '../redux/store';

it('Should render Home component', () => {
  const openSearch = true;
  const { home } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Home openSearch={openSearch} />
      </MemoryRouter>
    </Provider>,
  );
  expect(home).toMatchSnapshot();
});
