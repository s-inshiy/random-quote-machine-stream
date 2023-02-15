import {
  useState,
  // useEffect
} from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const URL =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

async function getData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    const authors = data.quotes.map(
      ({ author }) => author
    );
    return authors;
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const [count, setCount] = useState(0);
  // const [authors, setAuthors] =
  //   useState(null);

  // useEffect(() => {
  //   getData().then((data) => {
  //     setAuthors(data);
  //   });
  // }, []);

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
        Hey, TikTok {count}! Push a Like
        button :)
      </h1>
      {/* <ul>
        {authors.map((author) => (
          <li>{author}</li>
        ))}
      </ul> */}

      <div className="card">
        <button
          onClick={() =>
            setCount((count) => count + 1)
          }
        >
          Like is {count}!
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
