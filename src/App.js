import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductProvider from './context/ProductProvider';
import { useEffect, useState } from 'react';
import Loader from './components/loader/Loader';
import BackToTop from './components/backToTop/BackToTop';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    }, [1500])
  }, [])

  return (
    <div>
      {
        isLoading ? <Loader /> :
          <ProductProvider>
            <RouterProvider router={routes}></RouterProvider>
            <BackToTop />
            <ToastContainer />
          </ProductProvider>
      }
    </div>
  );
}

export default App;
