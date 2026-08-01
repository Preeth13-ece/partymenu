import { useContext } from "react";
import { Link } from "react-router-dom";
import { savedDishesContext } from "../../context/saveddishes";
import DishCard from "../../Components/DishCard";
import "./index.css";

function SavedDishes() {
  const { savedishes } = useContext(savedDishesContext);

  return (
    <div className="saved-page">
      <div className="saved-header">
        <div>
          <h1>Saved Recipes</h1>
          <p>{savedishes.length} recipes saved</p>
        </div>

        <Link to="/">
          <button>Back to Menu</button>
        </Link>
      </div>

      {savedishes.length === 0 ? (
        <div className="empty">
          <p>No saved recipes yet.</p>

          <Link to="/">
            <button>Browse the menu</button>
          </Link>
        </div>
      ) : (
        <div className="card-grid">
          {savedishes.map((dish) => (
            <DishCard key={dish.id} item={dish} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedDishes;