import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './search.module.css';

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = 'c52eb3b06925453da1c7f5eda1c04d53';

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState('Pizza');

  useEffect(() => {
  const timeoutId = setTimeout(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        if (!res.ok) throw new Error(`API Error: ${res.status}`);
        const data = await res.json();
        setFoodData(data.results || []);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    }
    if (query) fetchFood();
  }, 500); // wait 500ms after typing

  return () => clearTimeout(timeoutId); // cleanup
}, [query, setFoodData]);


  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for food..."
      />
    </div>
  );
}

Search.propTypes = {
  setFoodData: PropTypes.func.isRequired,
};
