import './FoodItem.module.css';
import PropTypes from 'prop-types';

export default function FoodItem({ food, setFoodId }){
    return (
                <div className='itemContainer'>
                    <img className='itemImage' src={food.image} alt="" />
                    <div className='itemContent'>
                    <h2 className='itemName'>{ food.title }</h2>
                        </div>
                        <div className='buttonContainer'>
                    <button onClick={() => {
                        console.log(food.id)
                        setFoodId(food.id)
                    }} className='itemButton'>View Recipe</button>
                        </div>
                </div>
    );
}

FoodItem.propTypes = {
    food: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    setFoodId: PropTypes.func.isRequired,
};