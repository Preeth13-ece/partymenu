import { Link } from "react-router-dom";
import "./index.css";

function DishCard({ item }) {
  return (
    <Link
      to={`/food/${item.id}`}
      className="dish-link"
    >
      <div className="dish-card">
        <div className="image-container">
          <img
            src={item.image}
            alt={item.name}
            className="dish-image"
          />

          <span className={item.isVeg ? "veg" : "non-veg"}>
            {item.isVeg ? "VEG" : "NON-VEG"}
          </span>
        </div>

        <div className="detailcont">
          <p className="category">{item.category}</p>

          <h3>{item.name}</h3>

          <p>{item.description}</p>

          <p>For {item.servings} people</p>
        </div>
      </div>
    </Link>
  );
}

export default DishCard;