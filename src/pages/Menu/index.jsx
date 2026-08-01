import { useState } from "react";
import "./index.css";
import dishes from "../../data/dishs";
import Header from "../../Components/Header";
import DishCard from "../../Components/DishCard";

function Menu() {
  const categoryList = ["All", "Starter", "Main", "Sides", "Desert"];
  const dietList = ["All", "Veg", "Non-Veg"];

  const [selectedCategory, setcate] = useState("All");
  const [selectedDiet, setdiet] = useState("All");
  const [searcheddish, setdish] = useState("");

  const filterDishes = () => {
    const filtered = dishes.filter((dish) => {
      // Search
      const matchName = dish.name
        .toLowerCase()
        .includes(searcheddish.toLowerCase());

      // Category
      const matchCategory =
        selectedCategory === "All" ||
        dish.category.toLowerCase() === selectedCategory.toLowerCase();

      // Diet
      const matchDiet =
        selectedDiet === "All" ||
        (selectedDiet === "Veg" && dish.isVeg === true) ||
        (selectedDiet === "Non-Veg" && dish.isVeg === false);

      return matchName && matchCategory && matchDiet;
    });

    return filtered;
  };

  const filterlist = filterDishes();

  return (
    <div>
      <Header />

      <div className="menu-container">
        <h1>Party Menu</h1>
        <p>Welcome Admin User</p>

        <section id="selectiondish">
          <p>CATEGORY</p>

          <div className="category-buttons">
            {categoryList.map((cate) => (
              <button
                key={cate}
                className={
                  selectedCategory === cate ? "selected" : "non-selected"
                }
                onClick={() => setcate(cate)}
              >
                {cate}
              </button>
            ))}
          </div>

          <p>DIET</p>

          <div className="diet-buttons">
            {dietList.map((di) => (
              <button
                key={di}
                className={selectedDiet === di ? "selected" : "non-selected"}
                onClick={() => setdiet(di)}
              >
                {di}
              </button>
            ))}
          </div>

          <div className="search-box">
            <input
              type="search"
              placeholder="Search by name (e.g. Chicken)"
              value={searcheddish}
              onChange={(e) => setdish(e.target.value)}
            />

            <button>Search</button>
          </div>
        </section>

        <section id="constainerdish">
          <p>{filterlist.length} items found</p>

          <div className="card-grid">
            {filterlist.map((item) => (
              <DishCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Menu;