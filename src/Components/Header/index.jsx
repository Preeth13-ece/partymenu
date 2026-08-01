import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Cookies from "js-cookie";
import { savedDishesContext } from "../../context/saveddishes";

function Header() {
  const { savedishes } = useContext(savedDishesContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };

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

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Header;