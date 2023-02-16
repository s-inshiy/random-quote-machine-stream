import { useState, useEffect } from 'react';
import { fetchData } from './services/api';
import { getRandomNumber } from './utils/helpers';

import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchDataAsync() {
      const data = await fetchData();
      setData(data);
    }
    fetchDataAsync();
  }, []);

  // useEffect(() => {
  //   if (data.length) {
  //     console.log(
  //       getRandomNumber(data.length)
  //     );
  //     console.log(
  //       data[getRandomNumber(data.length)]
  //     );
  //   }
  // }, [data]);

  return (
    <div className="App">
      <div>
        {/* <a
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            src="/vite.svg"
            className="logo"
            alt="Vite logo"
          />
        </a> */}
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
      <h1>
        Hey, TikTok! Push a Like button :)
      </h1>
      <h1>
        {!!data.length &&
          `Author: ${
            data[getRandomNumber(data.length)]
              .author
          }. Quote: ${
            data[getRandomNumber(data.length)]
              .quote
          }`}
      </h1>
      <div className="card">
        <button
          onClick={() =>
            setCount((count) => count + 1)
          }
        >
          New quote
        </button>
        <p>
          Edit <code>src/App.jsx</code> and
          save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to
        learn more
      </p>
    </div>
  );
}

export default App;

// ` `
