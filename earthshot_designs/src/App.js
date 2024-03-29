import { Helmet } from "react-helmet";
import './styles/App.css';
import Design1 from './components/Design1/Design1';
import Design2 from './components/ProblemProfile/Design2';
import NavPage from './components/NavComponents/NavPage';
import CountryNavPage from './components/CountryNav/CountryNavPage';
import Landing from './components/LandingPage/Landing';
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
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>

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
                <Route path="/" element={<Landing />} />
              </Routes>
            </QueryClientProvider>
          </CategoryContext.Provider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
