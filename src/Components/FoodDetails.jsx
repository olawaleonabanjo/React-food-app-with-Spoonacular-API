import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import styles from './FoodDetails.module.css'

export default function FoodDetails({ foodId }){
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
  if (!foodId) return; // prevent request if no id

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

  async function fetchFood() {
    try {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      if (!res.ok) throw new Error("Failed to fetch food details");
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching food details:", err);
    }
  }

  fetchFood();
}, [foodId]);

    return (
        <div>
        <div className={styles.recipeCard}>
            <h1 className={styles.recipeName}>{food.title}</h1>
            <img className={styles.recipeImage} src={food.image} alt="" />
            <div className={styles.recipeDetails}>
        <span>
            ⌚<strong>{food.readyInMinutes} Minutes</strong>
            <span>
                👨‍👩‍👧‍👦<strong>Serves {food.servings}</strong>
                </span>
            <span>
               <strong> {food.vegetarian? '🥦Vegetarian' : '🍗🍖Non-Vegetarian'}</strong>
                <span> <strong>{food.vegan? '🐄Vegan' : ''}</strong></span>
            </span>
        </span>
        </div>
             <div>
                💲<span> <strong>{food.pricePerServing} Per Serving </strong></span>
             </div>
             <h2>Ingredients</h2>
             <div className={styles.itemContainer}>
             {isLoading ? <p>Loading...</p> : food.extendedIngredients.map((item) => (
                <div className={styles.nameContainer} key={item.id}>
                    <div className={styles.imageContainer}>
                    <img className={styles.image} src={`https://spoonacular.com/cdn/ingredients_100x100/`  + item.image} alt="" />
                    </div>
                    <div className={styles.name}>{item.name}</div>
                    {/* <div className={styles.amount}>{item.amount} {item.unit}</div> */}
                </div>
            ))}
            </div>
        <h2 className={styles.recipeInstruction}>Instructions</h2>
        <div className={styles.recipeInstructions}>
            <ol>
            {isLoading ? (<p>Loading...</p>) : (
            food.analyzedInstructions[0].steps.map((step) =>( <li key={step.number}>{step.step}</li>))
            )}
            </ol>
        </div>
        </div>
        </div>

    )
}

FoodDetails.propTypes = {
    foodId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};