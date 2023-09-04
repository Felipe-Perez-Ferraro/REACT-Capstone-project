import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/store';
import Navbar from '../components/Navbar';

it('Should render Home component', () => {
  const handleClick = () => {};
  const { navbar } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Navbar handleClick={handleClick} />
      </MemoryRouter>
    </Provider>,
  );
  expect(navbar).toMatchSnapshot();
});
