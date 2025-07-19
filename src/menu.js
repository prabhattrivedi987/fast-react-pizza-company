import React from "react";
import Pizza from "./pizza";

function Menu() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  const numPizza = pizzaData.length;

  return (
    <main className="menu">
      <h2> Our Menu </h2>

      {/* conditional rendering */}

      {/* {numPizza > 0 && ( */}

      {/* conditional rendering with ternary operator */}

      {numPizza > 0 ? (
        // wrap all it in react fragment
        <React.Fragment>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from.All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {/* rendering List */}
            {pizzaData.map((pizza) => (
              <Pizza
                //   name={pizza.name}
                //   ingredients={pizza.ingredients}
                //   photoName={pizza.photoName}
                //   price={pizza.price}
                pizzaObj={pizza}
                key={pizza.name}
              />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on our menu. Please come back later:</p>
      )}
      {/* passing props in a child component
      <Pizza
            name = "Focaccia"
            ingredients = "Bread with italian olive oil and rosemary"
            photoName = "pizzas/focaccia.jpg"
            price={6} //for Number otherwise it will take as a string
      />
      <Pizza
            name = "Focaccia"
            ingredients = "Bread with italian olive oil and rosemary"
            photoName = "pizzas/focaccia.jpg"
            price={6} //for Number otherwise it will take as a string
      />
      <Pizza
            name = "Focaccia"
            ingredients = "Bread with italian olive oil and rosemary"
            photoName = "pizzas/focaccia.jpg"
            price={6} //for Number otherwise it will take as a string
      />
      */}
    </main>
  );
}

export default Menu;
