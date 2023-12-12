import './App.css';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState(1)

  return (
    <div className="App">
      <button onClick={() => setPage(1) }>View design 1</button>
      <button onClick={() => setPage(2) }>View design 2</button>

      <div className="testDiv">
        hello
      </div>
      
      <>
        {
          page === 1 ?
          <div>Page 1</div>

          :

          <div>Page 2</div>
        }
      </>
    </div>
  );
}

export default App;
