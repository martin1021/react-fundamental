import './App.css';
import { GlobalContext } from './context/index.js';
import { RouterProvider } from 'react-router-dom';
import {router} from './routers/index.jsx';

function App() {
  const userName = {
    nama: "Martinus Rombe"
  }

  return (
    <>
      <div className='App'>
        <GlobalContext.Provider value={userName}>
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;
