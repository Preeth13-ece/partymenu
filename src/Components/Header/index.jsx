import { Link } from "react-router-dom";
import { useContext } from "react";
import { savedDishesContext } from "../../context/saveddishes";

function Header() {
  const { savedishes } = useContext(savedDishesContext);

  return (
    <div>
      <Link to="/saved">
        <button>
          Saved Recipes
          {savedishes.length > 0 && (
            <span>{savedishes.length}</span>
          )}
        </button>
      </Link>

      <Link to="/login">
        <button>Logout</button>
      </Link>
    </div>
  );
}

export default Header;