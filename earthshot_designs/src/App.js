import './App.css';
import Design1 from './components/Design1';
import Design2 from './components/Design2';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState(1)

  return (
    <div className="App">
      <button onClick={() => setPage(1)}>View design 1</button>
      <button onClick={() => setPage(2)}>View design 2</button>
      
      <>
        {
          page === 1 ?
          <Design1 />

          :

          <Design2 />
        }
      </>
    </div>
  );
}

export default App;
