import { useState } from "react";
import "./styles.css";
const foodDictionary = {
  "🍇": "Grapes",
  "🍋": "Lemon",
  "🍎": "RedApple",
  "🍅": "Tomato",
  "🍟": "FrenchFries",
  "🍔": "Hamburger",
  "🍕": "Pizza",
  "🍨": "IceCream",
  "🍷": "Wine",
  "🍸": "Cocktail",
  "🍹": "Tropical Drink",
  "🍵": "Tea/Coffee"
};

var foodByDefault = Object.keys(foodDictionary);
export default function App() {
  const [foodMean, setFoodMenaning] = useState("");
  function inputChangeHandller(event) {
    var userInput = event.target.value;
    var foodMean = foodDictionary[userInput];
    if (foodMean === undefined) {
      foodMean = "we do not have in our database";
    }
    // console.log(foodMean);
    setFoodMenaning(foodMean);
  }
  function inputFoodHandller(food) {
    var foodMean = foodDictionary[food];
    // console.log(foodMean);
    setFoodMenaning(foodMean);
    // console.log(food);
  }
  return (
    <div className="App">
      <span role="img" className="title">
        {" "}
        🍲 Food & Drink 🍹
      </span>
      <h3>Emojis for fruit, vegetables, meals, beverages and utensils.</h3>
      <input placeholder="search" onChange={inputChangeHandller}></input>
      <div className="title"> {foodMean}</div>
      <ul>
        {foodByDefault.map((food) => {
          return (
            <span onClick={() => inputFoodHandller(food)} key={food}>
              {""}
              {food} {""}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
