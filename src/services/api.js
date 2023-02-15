const BASE_URL =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

export async function fetchData() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.quotes;
  } catch (error) {
    console.error(error);
  }
}
