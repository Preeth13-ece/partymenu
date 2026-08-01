import { createContext, useState } from "react";

export const savedDishesContext = createContext();

function SavedDishesProvider({ children }) {

   const [savedishes, setSavedDishes] = useState([]);

   const addtoSavedDishes = (dish) => {
      const alreadyAdded = savedishes.some(
         (item) => item.id === dish.id
      );

      if (!alreadyAdded) {
         setSavedDishes((prev) => [...prev, dish]);
      }
   };

   const removeSavedDishes = (id) => {
      setSavedDishes((prev) =>
         prev.filter((dish) => dish.id !== id)
      );
   };

   return (
      <savedDishesContext.Provider
         value={{
            savedishes,
            addtoSavedDishes,
            removeSavedDishes,
         }}
      >
         {children}
      </savedDishesContext.Provider>
   );
}

export default SavedDishesProvider;