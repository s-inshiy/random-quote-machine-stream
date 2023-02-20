import { useState, useEffect } from 'react';
import { fetchData } from './services/api';
import {
  getRandomNumber,
  getRandomColor,
} from './utils/helpers';
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
    }
  }, [data]);

  function handleBackgroundColorChange() {
    const color = getRandomColor();
    document.documentElement.style.setProperty(
      '--bg-color',
      color
    );
  }

  function handleClick() {
    const randomIndex = getRandomNumber(
      data.length
    );
    setObject(data[randomIndex]);
    handleBackgroundColorChange();
  }

  return (
    <div className="App">
      {object && (
        <div className="quote-box">
          <p className="quote-text">
            <i
              className="fa fa-quote-left"
              aria-hidden="true"
            ></i>
            {object.quote}
          </p>
          <div className="quote-author">
            - {object.author}
          </div>
          <div>
            <button
              className="quote-button"
              onClick={handleClick}
            >
              New Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

// ` `
