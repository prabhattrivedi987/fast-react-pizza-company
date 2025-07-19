import React from "react";

function Pizza(props) {
  // console.log(props.pizzaObj);
  //   console.log(props.name);
  //   console.log(props.ingredients);
  //   console.log(props.photoName);
  //   console.log(props.price);

  // we can also return the conditional into JSX
  // if (!props.pizzaObj.soldOut) {
  //   return null;
  // }

  return (
    //adding className using ternary operator
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt="Pizza Image"></img>
      <div>
        <h4> {props.pizzaObj.name} </h4>
        <p> {props.pizzaObj.ingredients} </p>
        <span className="pizza">
          {/* if we want to increase the price of pizzza we have to write just  */}
          {props.pizzaObj.soldOut ? (
            <h4>SOLD OUT</h4>
          ) : (
            <h4>{props.pizzaObj.price}</h4>
          )}
        </span>
      </div>
    </li>
  );
}

export default Pizza;
