import './styles/App.css';
import Design1 from './components/Design1/Design1';
import Design2 from './components/ProblemProfile/Design2';
import NavPage from './components/NavComponents/NavPage';
import CountryNavPage from './components/CountryNav/CountryNavPage';
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ResetScroll from './helpers/ResetScroll';
import { CategoryContext } from './helpers/CategoryContext';
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function App() {

  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("All")
  const [filteredNavCardData, setFilteredNavCardData] = useState([])

  return (
    <div className='App'>
      <BrowserRouter>
        <ResetScroll />
        <CategoryContext.Provider value={{category, setCategory, filteredNavCardData, setFilteredNavCardData}}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/nav" element={<NavPage />} />
              <Route path="/nav/problemProfile/:problemNumber" element={<Design2 />} />
              <Route path="/nav/design1" element={<Design1 />} />
              <Route path="/countries" element={<CountryNavPage />} />
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </QueryClientProvider>
        </CategoryContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
