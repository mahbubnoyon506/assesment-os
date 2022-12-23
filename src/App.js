import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
{/* <link href="/dist/output.css" rel="stylesheet"></link> */}

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
