import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/signIn";
import Menu from "./pages/Menu";
import FoodDetails from "./pages/fooddetails";
import Saveddishes from "./pages/Saveddishes";
import NotFound from "./pages/Notfound";

import SavedDishesProvider from "./context/saveddishes";

import "./App.css";

function App() {
  return (
    <SavedDishesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Menu />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/saved" element={<Saveddishes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SavedDishesProvider>
  );
}

export default App;