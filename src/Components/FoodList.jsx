import FoodItem from '../Components/FoodItem';
import PropTypes from 'prop-types';

export default function FoodList({foodData, setFoodId}) {
    return (
      <div>
        {foodData.map((food) => (
            <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
        ))}
      </div>
    );
}

FoodList.propTypes = {
  foodData: PropTypes.array.isRequired,
  setFoodId: PropTypes.func.isRequired,
};