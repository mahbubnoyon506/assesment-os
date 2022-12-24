import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
