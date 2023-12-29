import './App.css';
import Design1 from './components/Design1';
import Design2 from './components/Design2';
import NavPage from './components/NavComponents/NavPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState(1)

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* This is here temporarily for testing */}
          <Route path="/" element={<NavPage />} />
          <Route path="/design1" element={<Design1 />} />
          <Route path="/design2" element={<Design2 />} />
        </Routes>
      </BrowserRouter>
    </div>

    // Leaving this here in case I need to go back on my choice of using routes

    // <div className="App">
    //   <button onClick={() => setPage(1)}>View design 1</button>
    //   <button onClick={() => setPage(2)}>View design 2</button>
      
    //   <>
    //     {
    //       page === 1 ?
    //       <Design1 />

    //       :

    //       <Design2 />
    //     }
    //   </>
    // </div>
  );
}

export default App;
