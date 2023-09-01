import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Company from './components/Company';
import YearInfo from './components/YearInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: '/company/:symbol',
    element: (
      <>
        <Navbar />
        <Company />
      </>
    ),
  },
  {
    path: '/insights/:symbol/:id',
    element: (
      <>
        <Navbar />
        <YearInfo />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
