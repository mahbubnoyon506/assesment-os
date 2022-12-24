import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductProvider from './context/ProductProvider';

function App() {
  return (
    <div>
      <ProductProvider>
        <RouterProvider router={routes}></RouterProvider>
      </ProductProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
