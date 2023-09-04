import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Company from './components/Company';
import YearInfo from './components/YearInfo';

function App() {
  const [openSearch, setOpenSearch] = useState(false);
  const handleClick = () => {
    setOpenSearch(!openSearch);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar handleClick={handleClick} />
          <Home openSearch={openSearch} />
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

  return <RouterProvider router={router} />;
}

export default App;
