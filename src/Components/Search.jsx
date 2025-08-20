import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = 'c52eb3b06925453da1c7f5eda1c04d53';
export default function Search ({ setFoodData }){
    const [query, setQuery]= useState('Pizza');

    // syntax of the useEffect hook
    useEffect(() => {
      async function fetchFood() {
          const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
          const data = await res.json()
          console.log(data.results);
          setFoodData(data.results)
        }
        fetchFood();
    }, [query, setFoodData]);

    return ( 
        <div className={styles.searchContainer}>
    <input 
      className={styles.input}
      value={query}
      type="text"
      onChange={e => setQuery(e.target.value)}
    />
    </div>
    );
}

Search.propTypes = {
    setFoodData: PropTypes.func.isRequired
};