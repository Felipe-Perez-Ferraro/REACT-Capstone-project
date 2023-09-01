import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Company from './components/Company';

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
