import FoodItem from '../Components/FoodItem';

export default function FoodList({foodData, setFoodId}) {
    return (
      <div>
        {foodData.map((food) => (
            <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
        ))}
      </div>
    );
}