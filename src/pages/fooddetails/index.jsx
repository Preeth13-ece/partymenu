import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { savedDishesContext } from "../../context/saveddishes";
import dishes from "../../data/dishs";
import "./index.css";

function FoodDetails() {
  const { id } = useParams();

  const dish = dishes.find((item) => item.id === Number(id));

  const { savedishes, addtoSavedDishes } = useContext(savedDishesContext);

  if (!dish) {
    return <h2>Dish not found</h2>;
  }

  const isSaved = savedishes.some((item) => item.id === dish.id);

  return (
    <div className="food-details">
      <div className="top-bar">
        <Link to="/">
          <button>← Back to Menu</button>
        </Link>

        <div>
          <Link to="/saved">
            <button>Saved Recipes</button>
          </Link>

          <button
            className="save-btn"
            onClick={() => addtoSavedDishes(dish)}
            disabled={isSaved}
          >
            {isSaved ? "Saved" : "Save Recipe"}
          </button>
        </div>
      </div>

      <div className="food-info">
        <img src={dish.image} alt={dish.name} />

        <div>
          <div className="badges">
            <span>{dish.category}</span>

            <span className={dish.isVeg ? "veg" : "non-veg"}>
              {dish.isVeg ? "Veg" : "Non-Veg"}
            </span>
          </div>

          <h1>{dish.name}</h1>

          <p>For {dish.servings} people</p>

          <p>{dish.fullDescription}</p>
        </div>
      </div>

      <div className="ingredients">
        <h2>Ingredients</h2>

        {dish.ingredients.map((item, index) => (
          <div key={index} className="ingredient">
            <span>{item.name}</span>
            <span>{item.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodDetails;