import React from "react";

// function Order(props) {
//destructuring of this

function Order({ openHour, closeHour }) {
  const style = {
    margin: "4rem",
  };
  //   console.log(props);
  const time = new Date().getHours();
  //   console.log(time);

  //this line also can changed to
  //  const isOpen = time >= props.openHour && time <= props.closeHour;

  const isOpen = time >= openHour && time <= closeHour;

  // console.log(isOpen);

  return (
    <div className="order">
      {isOpen ? (
        <div className="order" style={style}>
          <p>We're Open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We are happy to welcome you between {openHour} and
          {closeHour}
        </p>
      )}
    </div>
  );
}

export default Order;
