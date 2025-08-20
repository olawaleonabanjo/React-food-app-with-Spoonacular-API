import styles from './FoodItem.module.css';
export default function FoodItem({ food, setFoodId }){
    return (
                <div className={styles.itemContainer}>
                    <img className={styles.itemImage} src={food.image} alt="" />
                    <div className={styles.itemContent}>
                    <h2 className={styles.itemName}>{ food.title }</h2>
                        </div>
                        <div className={styles.buttonContainer}>
                    <button onClick={() => {
                        console.log(food.id)
                        setFoodId(food.id)
                    }} className={styles.itemButton}>View Recipe</button>
                        </div>
                </div>
    );
}