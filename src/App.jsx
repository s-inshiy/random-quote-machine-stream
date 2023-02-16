import { useState, useEffect } from 'react';
import { fetchData } from './services/api';
import { getRandomNumber } from './utils/helpers';

import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [object, setObject] = useState(null);

  // first render, fetching quotes and authors
  useEffect(() => {
    async function fetchDataAsync() {
      const quotes = await fetchData();
      setData(quotes);
    }
    fetchDataAsync();
  }, []);

  // get one quote from our data
  useEffect(() => {
    if (data.length) {
      setObject(
        data[getRandomNumber(data.length)]
      );
      console.log(object);
    }
  }, [data]);

  return (
    <div className="App">
      <div>
        <a
          href="https://reactjs.org"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>

      {object && (
        <div>
          <h2>{object.quote}</h2>
          <h3>{object.author}</h3>
        </div>
      )}

      <div className="card">
        <button
          onClick={() => {
            setObject(
              data[
                getRandomNumber(data.length)
              ]
            );
          }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;

// ` `
