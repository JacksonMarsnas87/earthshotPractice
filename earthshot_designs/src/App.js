import './styles/App.css';
import Design1 from './components/Design1/Design1';
import Design2 from './components/ProblemProfile/Design2';
import NavPage from './components/NavComponents/NavPage';
import NavCardData from './testdata/NavCardData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ResetScroll from './helpers/ResetScroll';
import { CategoryContext } from './helpers/CategoryContext';

function App() {

  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("All")
  const [data, setData] = useState(NavCardData)

  return (
    <div className='App'>
      <BrowserRouter>
        <ResetScroll />
        <CategoryContext.Provider value={{category, setCategory, data, setData}}>
          <Routes>
            <Route path="/" element={<NavPage />} />
            <Route path="/problemProfile/:problemNumber" element={<Design2 />} />
            <Route path="/design1" element={<Design1 />} />
          </Routes>
        </CategoryContext.Provider>
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
